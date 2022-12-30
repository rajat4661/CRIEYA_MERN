import React, { useState } from "react";
import { useJwt } from "react-jwt";
import Input from "../components/lib/Input";

export const Login = () => {
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleLoginInputs = (e) => {
    const { name, value } = e.target;

    setLogin({ ...Login, [name]: value });
    // console.log(user)
  };

  const CheckLogin = async (e) => {
    e.preventDefault();
    console.log(Login);
    const res = await fetch("http://localhost:5000/sign", {
      method: "POST",
      Credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        Login,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid login");
      console.log("invalid login");
    } else {
      window.alert("login succesfull");
      console.log(" login successfull");
      // navigate.push("/login")
    }
  };
  return (
    <>
      <form>
        <Input
          type="email"
          placeholder="email"
          name="email"
          value={Login.email}
          onChange={handleLoginInputs}
          required
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={Login.password}
          onChange={handleLoginInputs}
          required
        />
        <Input type="submit" value="register" onClick={CheckLogin} />
      </form>
    </>
  );
};
