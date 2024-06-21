import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom';
import { auth } from './firebase';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  const login =event=>{
    event.preventDefault(); //This stops the refress
    //using firebase to sign in
    signInWithEmailAndPassword(auth, email,password)
    .then((auth) =>{
        //logged in redirect to homepage
        const user = auth.user
        console.log("Signed in successfully",user)
        navigate("/");
    })
    .catch((e)=>alert(e.message));
  }
  const register =(event)=>{
    event.preventDefault(); //Prevent from refresh page
    //use firebase for login stuff
    createUserWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
        //Create new User and logged in..
        navigate("/");
    })
    .catch((e)=>alert(e.message));

  }
  return (
    <div className='login'>
      <Link to="/">
        <img 
           className='login_logo'
           src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'
           alt='Amazon logo'
        />
      </Link>
      <div className='login_container' >
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='email' value={email} onChange={event=>setEmail(event.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={event=>setPassword(event.target.value)} />
            <button className='login_Sign' type='submit' onClick={login}>Sign in</button>
        </form>
        <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button className='login_registerButton' onClick={register}>Create Your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login
