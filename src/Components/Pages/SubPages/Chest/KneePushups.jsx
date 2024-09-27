import React from 'react'
import '../SubPages.css'
import kneePushups from '../../../../Assets/kneePushups.gif'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../../Home.css";


const KneePushups = () => {

  const navigate = useNavigate();
  const navigateChest = useNavigate();
  const handleNavigateChest = () => {
    navigate('/chestlist'); 
  };
  const navigatePrivacy = useNavigate();
  const handleNavigatePrivacy = () => {
    navigate('/PrivacyPolicy'); 
  };

  const navigateTerms = useNavigate();
  const handleNavigateTerms = () => {
    navigate('/TermsAndServices'); 
  };
  return (
    <div className="D">
      <div className="diamond">
      <IoArrowBackCircleOutline className='backBtn1' onClick={handleNavigateChest}/>
        <img src={kneePushups} alt="" />
        <div className="diamondText">
          <h1>Knee Push-Ups</h1>
          <h2>Instructions</h2>
          <p>
          To perform knee push-ups, start by kneeling on the floor with your knees hip-width apart and your toes pointed behind you. Place your hands on the floor slightly wider than shoulder-width apart, ensuring your wrists are aligned with your shoulders. Engage your core and keep your body in a straight line from your head to your knees. Lower your body towards the floor by bending your elbows, keeping them at about a 45-degree angle to your body. Lower yourself until your chest is just above the ground. Pause briefly, then push through your palms to return to the starting position, fully extending your arms. Aim for 3 sets of 8-12 reps, adjusting as necessary based on your fitness level.
          </p>
          <h2>Steps</h2>
          <p>
          -Kneel:
Start by kneeling on the floor with your knees hip-width apart and toes pointed behind you. <br/>

-Hand Placement:
Place your hands on the floor slightly wider than shoulder-width apart, aligning your wrists with your shoulders. <br/>

-Engage Your Core:
Tighten your core muscles and maintain a straight line from your head to your knees. <br/>

-Lower Your Body:
Bend your elbows to lower your body toward the floor, keeping your elbows at about a 45-degree angle to your body. <br/>

-Pause:
Lower until your chest is just above the ground, holding the position briefly. <br/>

-Push Up:
Press through your palms to return to the starting position, fully extending your arms. <br/>

-Reps:
Aim for 3 sets of 8-12 reps, adjusting as necessary based on your fitness level. <br/>
          </p>
          <h2>Focus Area:</h2>
          <p>
          -Chest: Primarily targets the pectoral muscles for upper body strength. <br />
-Triceps: Engages the triceps for additional strength in the arms. <br />
-Shoulders: Activates the deltoids for stability and support. <br />
-Core: Engages the abdominal muscles for stability during the movement. <br />
-Wrist Stability: Helps improve wrist strength and stability, beneficial for various upper body exercises. <br />
          </p>
        <button className="upload-btn">Coming Soon...</button>
        </div>
      </div>
{/*footer section*/}
<div className="footer">
        <p>Copyright © 2024. PostureCorrector</p>
        <ul>
          <li onClick={handleNavigateTerms}>Terms of Service</li>
          <li onClick={handleNavigatePrivacy}>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default KneePushups
