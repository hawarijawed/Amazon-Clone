import React, { useEffect } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import user from "./Components/reducer";

function App() {
const [{basket},dispatch] = useStateValue();

//Runs once when app component load
useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //user is logged in
        //pushing user data
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      }
      else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null,
        })
        console.log("user is here",user)
      }
    });

    return ()=>{
      unsubscribe();
    }
},[])

  return (
    <Router>
      <div className="App">
       <Header />
       <Routes>
       {/* <Route path="/Header" element={<Header />}/> */}
       <Route path="/Checkout" element={<Checkout/>} />
       <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
       </Routes>
      </div>
      {/* <Home /> */}
    </Router>
    
  );
}

export default App;
