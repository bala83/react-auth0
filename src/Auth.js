   /*eslint no-restricted-globals: 0*/


import auth0 from "auth0-js";
import jwt_decode from "jwt-decode";

const LOGIN_FAILURE_PAGE = "/";
const LOGIN_SUCCESS_PAGE = "/secret";

export default class Auth{
auth0 = new  auth0.WebAuth({
    domain: "bmn.us.auth0.com",
    clientID: "3Lt9qAi9gYMG3z4bv0gv23GRfxhogW6f",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://bmn.us.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid profile"

})

constructor(){
    this.login = this.login.bind(this);

}

login(){
    this.auth0.authorize();
}

handleAuthentication(){
    this.auth0.parseHash((err , authResults) => {
        if (authResults && authResults.accessToken && authResults.idToken){
            let expireAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
            localStorage.setItem("access_token",authResults.accessToken)
            localStorage.setItem("id_token",authResults.idToken);
            localStorage.setItem("expires_at", expireAt);
            localStorage.hash = "";
            location.pathname = LOGIN_SUCCESS_PAGE;
        }else if (err){
            location.pathname = LOGIN_FAILURE_PAGE;
            console.log(err);
    }
});

}

isAuthenticated(){
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
}

logout(){
localStorage.removeItem("access_token");
localStorage.removeItem("id_token");
localStorage.removeItem("expires_at");
location.pathname = LOGIN_FAILURE_PAGE;

}

getProfile(){
    if (localStorage.getItem("id_token")){
        return jwt_decode(localStorage.getItem("id_token"));
    }else{
        return {};
    }
}

}