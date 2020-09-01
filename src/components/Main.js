import React , {Component} from "react";


export default class Main extends Component{
    render(){
        return(
            <div>
                <p className="App-Intro">
                    Hello {this.props.name} <br/>
                    Do you ant to see the secret area ? <a href= "/secret">Click here </a>
                    
                </p>
                {!this.[this.props.auth.isAuthenticated()]}
                <div>
                    <hr/>
                     Please login first 
                    <hr/>
                    <button onClick={this.props.auth.login}>Login </button>
                </div>
            </div>
        )
    }
}