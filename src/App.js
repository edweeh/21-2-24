import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Psignup from './components/Psignup/Psignup';
import PetForm from './components/Admin/PetForm';
import PetV from './components/Admin/PetV';
import Adminlogin from './components/Admin/Adminlogin';
import Category from './components/Admin/Category';
import CategoryV from './components/Admin/CategoryV';
import AdminHome from './components/Admin/AdminHome';
import Home1 from './components/Home/Home1';
import Homeuser from './components/Home/Homeuser';
import Home1cart from './components/Home/Home1cart';

function App() {
  return (
    <Router>
      <Routes>
        {/* admin */}
        <Route path="/" element={<Adminlogin />} />
        <Route path="/Adminhome" element={<AdminHome />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Categoryview" element={<CategoryV />} />
        <Route path="/Pet" element={<PetForm />} />
        <Route path="/Petview" element={<PetV />} />

        {/* user */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Psignup />} />
        <Route path="/Home1" element={<Home1/>} />
        <Route path="/Home1cart" element={<Home1cart/>}/>
        <Route path="/Home2" element={<Homeuser />} />
      </Routes>
    </Router>
  );
}

export default App;
