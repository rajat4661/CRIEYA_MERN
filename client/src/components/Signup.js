import React , {useState} from 'react'

import { NavLink , useNavigate  } from 'react-router-dom';
import axios from 'axios'
// import fetch from 'isomorphic-fetch'



export const Signup = () => {
    const navigate = useNavigate();
    const [user , setUser ]= useState({
        name: "" , email: "" , phone: "" , work: "" , password: "" , cpassword: ""

    });


    let name , value;

    const handleInputs = (e)=>{
        const {name , value} = e.target;

        setUser({...user , [name]:value});
        // console.log(user)
    }

    const PostData = async(e)=>{
     e.preventDefault();
     console.log(user)
    //  console.log(setUser)

     const { name , email , phone , work , password, cpassword} = user ;

     const res = await fetch("http://localhost:5000/register" , {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"

        },
        body:JSON.stringify({
            // name:user.name , email:user.email , phone:user.phone , work:user.work , password:user.password, cpassword:user.cpassword
            // name:"rajat" 
            user
        })
     });
    // if( name && email && work  &&phone && password && (password === cpassword)){
    // await axios.post("/register" , user)
    
    // }


    const data= await res.json();
     if(data.status === 422 || !data ){
        window.alert("Invalid registration");
        console.log("invalid registration");

     }

     else{

        window.alert("registration succesfull");
        console.log(" registration successfull");
        // navigate.push("/login")

     }


    
    }

  return (
    <>
     
        <form  >
          <input type="text" placeholder='name' name="name"  value={user.name} onChange={handleInputs} required />
          <input type="email" placeholder='email' name="email"  value={user.email} onChange={handleInputs} required />
          <input type="number" placeholder='phone' name="phone"  value={user.phone} onChange={handleInputs} required />
          <input type="text" placeholder='work' name="work"  value={user.work} onChange={handleInputs} required />
          <input type="password" placeholder='password' name="password" value={user.password} onChange={handleInputs}  required />
          <input type="password" placeholder='cpassword' name="cpassword"  value={user.cpassword} onChange={handleInputs} required />
          <input type="submit" value="register" onClick={PostData}/>

          

        
          
           
       </form>
          



    
    
    
    </>
  )

  
}
