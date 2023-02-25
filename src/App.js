import React from "react";
import Header from './component/Header'
import {Routes , Route} from 'react-router-dom'
import Home from './homepage/Home'
import PropertyDetails from "./homepage/PropertyDetails";
import Footer from './component/Footer'
import Login from './component/Login'
import SignUp from "./component/Signup";
function App() {
  return (
  <div className="bg-[#eaeeff] w-full h-full mx-auto text-black"> 
    <Header/>
          <Routes>
          <Route path="/signin" element={<Login/>}> </Route>
          <Route path="/signup" element={<SignUp/>}> </Route>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/product/:id" element={<PropertyDetails/>}> </Route>
          </Routes>
      <Footer/>
  </div>
  
    );
}

export default App;
