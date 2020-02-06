import React from "react";
import Header from "./HOC/header";
import Footer from "./HOC/footer";
// import Routes from './routes';
import "./App.css";

const App = (props) => (
  // console.log(props.children);
    <div>
      <Header />
      <div className="col-md-12">{props.children}</div>
      <Footer />
    </div>
);

export default App;
