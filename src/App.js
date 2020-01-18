import React from "react";
import Header from "./HOC/header";
import Footer from "./HOC/footer";
// import Routes from './routes';
import "./App.css";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="col-md-10">{props.children}</div>
      <Footer />
    </div>
  );
};

export default App;
