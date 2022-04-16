import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import './App.css';

function App() {

  return (
    <BrowserRouter>
        <Navigation />
        <Routes /> 
    </BrowserRouter>
  );
}

export default App;
