import React from 'react';
import Header from './HOC/header';
import Footer from './HOC/footer';

import './App.css';

function App (props) {
    return (
      <div className="App container">
        <Header/>
        {props.children}
        <Footer/>
      </div>
    );
}

export default App;
