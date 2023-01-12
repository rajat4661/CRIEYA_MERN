import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection/HeroSection"
import Button from "../components/lib/Button";
import Counter from '../components/lib/Counter/Counter';
import IdeaForm from "./IdeaForm";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/idea-submission-form" element={<IdeaForm />} />
      </Routes>
      <div>
        <HeroSection />
        <Counter/>
        {/* <p className="pt-5">WELCOME</p>
        <h1>We Are The MERN Developer</h1>
        <NavLink to="/idea-submission-form">
          <Button type="submit" children={<span>Submit an Idea</span>} />
        </NavLink> */}
      </div>
    </>
  )
}

export default Home;
