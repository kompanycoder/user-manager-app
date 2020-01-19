import React from "react";
import Header from "./HOC/header";
import Footer from "./HOC/footer";
// import Routes from './routes';
import "./App.css";

const App = (props) => (
  // console.log(props.children);
    <div className="container">
      <Header />
      <div className="container col-10">{props.children}</div>
      <Footer />
    </div>
);

export default App;
