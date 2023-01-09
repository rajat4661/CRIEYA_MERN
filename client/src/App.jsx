import { Routes, Route } from "react-router-dom";
import IdeaForm from "./pages/IdeaForm";
import NavigationBar from "./components/lib/NavigationBar";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/idea-submission-form" element={<IdeaForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
    </div>
  );
}

export default App;
