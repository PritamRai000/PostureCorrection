import React from "react";
import arm from "../../Assets/arm.jpg";
import shoulder from "../../Assets/shoulder.jpg";
import chest from "../../Assets/chest.jpg";
import leg from "../../Assets/leg.jpg";
import back from "../../Assets/back.jpg";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import './Home.css'
import chest2 from '../../Assets/chest2.jpeg'



const Exercises = () => {

  const navigate = useNavigate();
  const navigateTerms = useNavigate();
  const handleNavigateTerms = () => {
    navigate('/TermsAndServices'); 
  };

  const navigatePrivacy = useNavigate();
  const handleNavigatePrivacy = () => {
    navigate('/PrivacyPolicy'); 
  };

  const navigateArm = useNavigate();
  const handleNavigateArm = () => {
    navigate('/armlist'); 
  };

  const navigateShoulder = useNavigate();
  const handleNavigateShoulder = () => {
    navigate('/shoulderlist'); 
  };
  const navigateLeg = useNavigate();
  const handleNavigateLeg = () => {
    navigate('/leglist'); 
  };
  const navigateBack = useNavigate();
  const handleNavigateBack = () => {
    navigate('/backlist'); 
  };
  const navigateChest = useNavigate();
  const handleNavigateChest = () => {
    navigate('/chestlist'); 
  };

  return (
    <div>

    <div className="ex">
      <div className="exercise" onClick={handleNavigateArm}>
        <img src={arm} alt="" />
        <div className="content">
          <p>Arm Workouts</p>
          <span>Strengthen Your Reach, Sculpt Your Arms</span>
          <text>Available workouts: 5+</text>
        </div>
      </div>

      <div className="exercise" onClick={handleNavigateShoulder}>
        <img src={shoulder} alt="" />
        <div className="content">
          <p>Shoulder Workouts</p>
          <span>Strengthen Your Reach, Sculpt Your Arms</span>
          <text>Available workouts: 5+</text>
        </div>
      </div>


      <div className="exercise" onClick={handleNavigateLeg}>
        <img src={leg} alt="" />
        <div className="content">
          <p>Leg Workouts</p>
          <span>Strengthen Your Reach, Sculpt Your Arms</span>
          <text>Available workouts: 5+</text>
        </div>
      </div>

      <div className="exercise" onClick={handleNavigateBack}>
        <img src={back} alt="" />
        <div className="content">
          <p>Back Workouts</p>
          <span>Strengthen Your Reach, Sculpt Your Arms</span>
          <text>Available workouts: 5+</text>
        </div>
      </div>

      <div className="exercise" onClick={handleNavigateChest}>
        <img src={chest2} alt=""  className="chestImg"/>
        <div className="content">
          <p>Chest Workouts</p>
          <span>Strengthen Your Reach, Sculpt Your Arms</span>
          <text>Available workouts: 5+</text>
        </div>
      </div>

      <div className="exercise" onClick={handleNavigateChest}>
        <img src={chest2} alt="" />
        <div className="content">
          <p>Chest Workouts</p>
          <span>Strengthen Your Reach, Sculpt Your Arms</span>
          <text>Available workouts: 5+</text>
        </div>
      </div>

    </div>

    <footer>
      <div className="footer">
        <p>Copyright © 2024. PostureCorrector</p>
        <ul>
          <li onClick={handleNavigateTerms}>Terms of Service</li>
          <li onClick={handleNavigatePrivacy}>Privacy Policy</li>
        </ul>
      </div>
      </footer>

    </div>
  );
};

export default Exercises;
