
import './App.css';
import { Link, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Routes}from "react-router-dom"





function App() {
  
  return (
  <>

    
    <Navbar />
    <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route  path='/about' element={< About />}></Route>
                 <Route  path='/login' element={< Login />}></Route>
                 <Route  path='/signup' element={< Signup />}></Route>
                 <Route  path='/contact' element={< Contact />}></Route>


          </Routes>
   

    
    
    

  </>


  
  );
}

export default App;

