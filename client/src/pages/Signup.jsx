import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import Input from "../components/lib/Input";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    // console.log(user)
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log(user);
    //  console.log(setUser)

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        user,
      }),
    });
    

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("invalid registration");
    } else {
      window.alert("registration succesfull");
      console.log(" registration successfull");
      // navigate.push("/login")
    }
  };

  return (
    <>
      <form>
        <Input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={handleInputs}
          required
        />
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleInputs}
          required
        />
        <Input
          type="number"
          placeholder="phone"
          name="phone"
          value={user.phone}
          onChange={handleInputs}
          required
        />
        <Input
          type="text"
          placeholder="work"
          name="work"
          value={user.work}
          onChange={handleInputs}
          required
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleInputs}
          required
        />
        <Input
          type="password"
          placeholder="cpassword"
          name="cpassword"
          value={user.cpassword}
          onChange={handleInputs}
          required
        />
        <Input type="submit" value="register" onClick={PostData} />
      </form>
    </>
  );
};

export default Signup;
