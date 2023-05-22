import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import './Signuppage.css';
import {FaRegIdCard} from 'react-icons/fa';
import {MdOutlineManageAccounts} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {IoIosCall} from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {app} from './firebase';

import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase';





function Signuppage () {
    

    const [data, setData] = useState({
      name:'',
      email:'',
      password:'',
      contact:'',
      
      
})







    const auth = getAuth(app);
    const signupClick =  () => {
        if(data.name ==='' || data.email ==='' ||data.password ==='' ||data.contact ==='')
        {
            alert("Fill all details to signup");
        }
        else{

            const{name,email,password,contact,url}=data;
                
                createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
            
                     const user = userCredential.user;
                     console.log(user);
                     alert("created account");
             })
            .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            // ..
             alert(errorCode)
           });

           //CODE TO STORE DATA IN REALTIME FIREBASE

        //    const res = fetch("https://login-signup-auth-80703-default-rtdb.firebaseio.com/rudalphform.json",
        //    {
        //      method: 'POST',
        //      headers:
        //      {
        //         'Content-Type':'application/json'
        //      },
        //      body:JSON.stringify({
        //         name,
        //         email,
        //         password,
        //         contact
        //      })
        //    }
        //    )


        //CODE TO STORE DATA IN FIREBASE FIRESTORE
         try{
              const docRef = addDoc(collection(db,"collections"),
              {
                name:name,
                email:email,
                password:password,
                contact:contact,
                
                
               
              });
              console.log("successfully data stored")
         } catch(e)
         {
           console.log("Couldnot store data")
         }


         
       
    }

    
}



// useEffect(()=>{
//     const getData = async() => {
//         const fetched_data = await getDocs(collection(db,"collections"));
//         console.log(fetched_data );
//         setData(fetched_data.docs.map((doc)=>({...doc.data(), id:doc.id})));
//         console.log(fetched_data );
//     };
//     getData();
// },[]);


    return (
        <div>
            <br/>
            <div>
                    <br/> <br/> <br/>
            </div>
            
            <br/>

            <div className="cardpos_s fade-in-right">

                <Card className="cardsize_e">
                  <FaRegIdCard className="signupimage"></FaRegIdCard>
                  <br/>
                  <h1 className="headingtxt">USER SIGNUP</h1>
                  <br/>
                  <span><MdOutlineManageAccounts className="inputimage_e"></MdOutlineManageAccounts><input className="input_t"  placeholder="Enter Name" type='text'onChange={(event)=>setData((prev) => ({...prev, name: event.target.value}))}></input></span>
                  <br/>
                  <span><MdEmail className="inputimage "></MdEmail><input className="input_t" placeholder="Enter Email" type='email' onChange={(event)=>setData((prev) => ({...prev, email: event.target.value}))}></input></span>
                  <br/>
                  <span><RiLockPasswordFill className="inputimage "></RiLockPasswordFill><input className="input_t" placeholder="Enter Password" type='password' onChange={(event)=>setData((prev) => ({...prev, password: event.target.value}))}></input></span>
                  <br/>
                  <span><IoIosCall className="inputimage "></IoIosCall><input className="input_t" placeholder="Contact Number" type='number' onChange={(event)=>setData((prev) => ({...prev, contact: event.target.value}))}></input></span>
                  <br></br>
                  
                  <br></br>
                  <Button className="loginbutton_n loginbuttontxt" onClick={signupClick}>SIGNUP</Button>
                  <br></br>
                 </Card>  

                 
                 {/* <div>
      <h1>Data List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Password: {item.password}</p>
            <p>Contact: {item.contact}</p>
          </li>
        ))}
      </ul>
    </div> */}
           
            
          
       
          
        
            </div>
        </div>
    );
}


export default Signuppage;