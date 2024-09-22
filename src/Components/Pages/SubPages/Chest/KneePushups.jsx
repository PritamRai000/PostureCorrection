import React from 'react'
import '../SubPages.css'
import kneePushups from '../../../../Assets/kneePushups.gif'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const KneePushups = () => {

  const navigate = useNavigate();
  const navigateChest = useNavigate();
  const handleNavigateChest = () => {
    navigate('/chestlist'); 
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
            To perform diamond push-ups, start in a plank position with your
            hands placed close together beneath your chest, forming a diamond
            shape with your thumbs and index fingers touching. Your feet should
            be about hip-width apart, and your body should form a straight line
            from your head to your heels. Engage your core and keep your body
            stable as you lower yourself by bending your elbows, keeping them
            close to your body. Lower until your chest nearly touches your
            hands. Push through your palms to extend your arms and return to the
            starting position. Inhale as you lower yourself and exhale as you
            push back up. Repeat for the desired number of repetitions.
          </p>
          <h2>Steps</h2>
          <p>
            Start: Begin in a pushup position, hands under your chest forming a
            diamond with thumbs and index fingers. Keep your body straight, core
            tight.
            <br />
            Lower: Bend elbows, lowering your chest towards the diamond shape.
            Keep elbows close to your body.
            <br />
            Push: Push back up to the start position, keeping your core engaged.
            <br />
            Reps: Start with 3 sets of 8-12 reps, adjusting as needed.
          </p>
          <h2>Focus Area:</h2>
          <p>
            -Triceps (back of the arms) <br />
            -Pectoral muscles (chest) <br />
            -Deltoids (shoulders) <br />
            -Core muscles (to maintain stability)
          </p>
        <button className="upload-btn">Coming Soon...</button>
        </div>
      </div>

    </div>
  );
};

export default KneePushups
