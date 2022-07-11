import React from "react";
import Header from "./HOC/header";
import Footer from "./HOC/footer";
// import Routes from './routes';
import "./App.css";

const App = (props) => (
  // console.log(props)
    <div>
      <Header /> 
       { props?
        // console.log(props)
        <div className="col-md-12">{props.children}</div>
        : <p>waiting for users data to render</p>
      }
      <Footer />
    </div>
);

export default App;
