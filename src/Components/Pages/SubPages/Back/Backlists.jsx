import React from 'react'
import '../SubPages.css'
import tricepsDips from '../../../../Assets/tricepsDips.jpg'
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import back from '../../../../Assets/back.jpg'


const Backlists = () => {

  const navigate = useNavigate();
  const navigateTricep = useNavigate();
  const handleNavigateTricep = () => {
    navigate('/tricepdips'); 
  };
  const navigateBack = useNavigate();
  const handleNavigateBack = () => {
    navigate('/exercise'); 
  };

  return (
    <div className='exercises'>

<div className="exerciseRow1">
        <IoArrowBackCircleOutline className='backBtn' onClick={handleNavigateBack}/>
        <img src={back} alt="" />
        <h2>Back Exercises</h2>
        <p>A strong back is essential for maintaining proper posture, reducing the risk of injury, and supporting overall body strength. Our back workout routines target key muscles like the lats, traps, and lower back to help you build a well-rounded, resilient back. With an emphasis on correct form and posture, these exercises are designed to improve your stability, enhance your performance in other workouts, and alleviate any back discomfort caused by poor alignment. Whether you're looking to build muscle or improve posture, these workouts will help you achieve a stronger, healthier back.</p>
      </div>

      <div className="exerciseRow2">
      <div className='exerciseList' onClick={handleNavigateTricep}>
        <img src={tricepsDips} alt="" />
        <h3>Triceps Dips</h3>
        <p>15*3</p>
      </div>

      <div className='exerciseList' onClick={handleNavigateTricep}>
        <img src={tricepsDips} alt="" />
        <h3>Triceps Dips</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateTricep}>
        <img src={tricepsDips} alt="" />
        <h3>Triceps Dips</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateTricep}>
        <img src={tricepsDips} alt="" />
        <h3>Triceps Dips</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateTricep}>
        <img src={tricepsDips} alt="" />
        <h3>Triceps Dips</h3>
        <p>15*3</p>
      </div>      
      </div>
    </div>
  )
}

export default Backlists
