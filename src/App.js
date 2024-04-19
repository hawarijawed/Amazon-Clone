import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
function App() {
  function Checkout() {
    return <h1>This is checkout page</h1>;
  }
  
  return (
    <Router>
      <div className="App">
       {/* <Header /> */}
       <Routes>
       <Route path="/checkout" element={<Header/>} />
        <Route path="/" element={<Header />}/>
        <Route path="/" element={<Home />} />
       </Routes>
      </div>
      <Home />
    </Router>
    
  );
}

export default App;
