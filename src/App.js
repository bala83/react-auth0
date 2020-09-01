import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret'
import ErrorScreen from './components/ErrorScreen'
import Callback from './components/Callback';

class App extends Component{
  
  render (){
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent =  <Main {...this.props}></Main>;
        break;
      case "secret":
          mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <ErrorScreen/>
          break;
      case "callback":
         mainComponent = <Callback></Callback>;
          break;
      default:
        mainComponent = <ErrorScreen></ErrorScreen>;
        break;;
    }
    return(
    <div className="App">
      <header className="App-header1">
        <div>   
            <img src={logo}  className="App-logo" alt="logo" />
        </div>
       <h1 className="App-title">Welcome to React ,{this.props.name} </h1>
      </header>
        {mainComponent}
    </div>
  );
}
}
export default App;
