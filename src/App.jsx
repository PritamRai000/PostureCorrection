import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
// import {Home,About,Exercises} from './Components/Pages'
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Exercises from "./Components/Pages/Exercises";
import Profile from "./Components/Pages/Profile";
import TermsAndServices from "./Components/Pages/TermsAndServices";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy";
import ArmsList from "./Components/Pages/SubPages/Arms/ArmsLists";
import ShoulderLists from "./Components/Pages/SubPages/Shoulder/ShoulderLists";
import LegLists from "./Components/Pages/SubPages/Leg/LegLists";
import Backlists from "./Components/Pages/SubPages/Back/Backlists";
import ChestLists from "./Components/Pages/SubPages/Chest/ChestLists";
import DiamondPushUps from "./Components/Pages/SubPages/Arms/DiamondPushUps";
import LateralRaises from "./Components/Pages/SubPages/Shoulder/LateralRaises";
import Squats from "./Components/Pages/SubPages/Leg/Squats";
import Triceps from "./Components/Pages/SubPages/Back/Triceps";
import KneePushups from "./Components/Pages/SubPages/Chest/KneePushups";
import Login from "./Components/Pages/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercise" element={<Exercises />} />
        <Route path="/termsandservices" element={<TermsAndServices />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/armlist" element={<ArmsList />} />
        <Route path="/shoulderlist" element={<ShoulderLists />} />
        <Route path="/leglist" element={<LegLists />} />
        <Route path="/backlist" element={<Backlists />} />
        <Route path="/chestlist" element={<ChestLists />} />
        <Route path="/diamond" element={<DiamondPushUps />} />
        <Route path="/dumbell" element={<LateralRaises />} />
        <Route path="/squat" element={<Squats />} />
        <Route path="/tricepdips" element={<Triceps />} />
        <Route path="/knee" element={<KneePushups />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path='/profile' element={<Profile/>} /> */}
      </Routes>
    </div>
  );
};

export default App;
