import React, { Component } from 'react';
import Header from './HOC/header';
import Footer from './HOC/footer';
// import Routes from './routes';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state= {};

    }
    render(){
      return (
        <div className="container">
          <Header/>
      {/* <div>{props.children}</div> */}
          <Footer/>
        </div>
      );
    }
}

export default App;
