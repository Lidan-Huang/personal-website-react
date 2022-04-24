import React from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';
import NavBar from "./NavBar";
import Routes from "./Routes";
import './App.css';

/** Show Nav bar and all the UI
 * Props: none
 * 
 * App -> (NavBar, Routes)
 */

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes /> 
    </BrowserRouter>
  );
}

export default App;
