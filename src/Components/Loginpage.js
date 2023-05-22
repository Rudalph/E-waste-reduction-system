import React, { useState } from "react";
import './Loginpage.css';
import Card from 'react-bootstrap/Card';
import {FcBusinessman} from 'react-icons/fc'
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Loginpage  () {
    const [data, setData] = useState({
        email:'',
        password:''
    })
    function login () {
        if(data.email==='' || data.password==='')
        {
               alert("Fill all details to login");
        }
        else
        {
            const auth = getAuth();
               signInWithEmailAndPassword(auth, data.email, data.password)
                   .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        alert("logged in")
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        // const errorMessage = error.message;
                        alert(errorCode)
                    });
            console.log(data);
        }
    }
    return (

        <div >
                   <div>
                    <br/> <br/> <br/>
                   </div>

                   <br/>

                  <div className="cardpos fade-in-right">
                    <Card className="cardsize">
                        <FcBusinessman className="loginimage"></FcBusinessman>
                        <br></br>
                        <h1 className="headingtxt">USER LOGIN</h1>
                        <br></br>
                        <span><MdEmail className="inputimage "></MdEmail><input className="input" placeholder="Email" type='email' onChange={(e)=>setData((prev)=>({...prev, email:e.target.value}))}></input></span>
                        <br></br>
                        <span><RiLockPasswordFill className="inputimage "></RiLockPasswordFill><input className="input" placeholder="Password" type='password' onChange={(e)=>setData((prev)=>({...prev, password:e.target.value}))}></input></span>
                        <br></br>
                        
                        <Link to='/Signuppage'  className="sf">Signup for free</Link>
                        <Link to='/Signuppage'  className="sf">Forgot Password?</Link>
                    
                        <br></br>
                        <Button className="loginbutton loginbuttontxt" onClick={login}>LOGIN</Button>
                    </Card>
                   
                 </div> 
       </div>
       
           
        
    );
}

export default Loginpage;