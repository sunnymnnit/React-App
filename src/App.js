import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './mycomponents/Navbar'
import TextForm from './mycomponents/TextForm';
import About from './mycomponents/About'
function App() {
  return (
    <>
    {/* <Router> */}
    <Navbar title="UpperCase" sm="Conversion"/>
    <TextForm/>
    <About/>
    {/* <Routes> */}
      {/* always use exact path to avoid partial matching eg home/ab ==home */}
          {/* <Route exact path='/' element={<TextForm/>} />
          <Route exact path='/about' element={<About/>} />
    </Routes>
    </Router> */}
    </>
  );
}

export default App;
