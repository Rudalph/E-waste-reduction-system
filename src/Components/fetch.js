import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db, storage } from "./firebase";
import './Signuppage';


function DataList() {
  const [updates, setUpdates] = useState({
    name:"",
    email:"",
    password:"",
    contact:"",
   
    
   
   
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const fetched_data = await getDocs(collection(db, "collections"));
      setData(fetched_data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  const handleUpdate = async (id) => {
    const docRef = doc(db, "collections", id);
    await updateDoc(docRef, {name: updates.name, email: updates.email, password:updates.password, contact:updates.contact});
    const updatedData = await getDoc(docRef);
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...updatedData.data(), id } : item))
    );
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "collections", id);
    await deleteDoc(docRef);
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  

  

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name.toString()}</p>
            <p>Email: {item.email.toString()}</p>
            <p>Password: {item.password.toString()}</p>
            <p>Contact: {item.contact.toString()}</p>
            
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <br></br>
            <input placeholder="Enter name" type="name" onChange={(event)=>setUpdates((prev) => ({...prev, name: event.target.value}))}></input>
            <br></br>
            <input placeholder="Enter email" type="email" onChange={(event)=>setUpdates((prev) => ({...prev, email: event.target.value}))}></input>
            <br></br>
            <input placeholder="Enter password" type="text" onChange={(event)=>setUpdates((prev) => ({...prev, password: event.target.value}))}></input>
            <br></br>
            <input placeholder="Enter contact" type="number" onChange={(event)=>setUpdates((prev) => ({...prev, contact: event.target.value}))}></input>
            <br></br>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      
      
    </div>
  );
}

export default DataList;
