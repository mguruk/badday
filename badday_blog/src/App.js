import  React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routing from './Routing';
import Header from "./component/Header";

function App() {
  return (
    <Router><Header /><Routing /></Router>
  );
}

export default App;
