import React, {Component} from "react";

export default class Secret extends Component{
    render(){
        return(
            <div>
                This is super secret .
                <br/><br/><br/>
                 Jump back to <a href="/">HOME</a>
                <br/><br/><br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}