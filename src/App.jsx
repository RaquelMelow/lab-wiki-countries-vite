import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import HomePage from "./pages/HomePage"; 
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryId" element={<CountryDetailsPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
