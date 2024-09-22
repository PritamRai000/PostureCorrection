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
        <p>Strengthen your arms and improve muscle endurance with targeted exercises that also enhance your posture. Our guided arm workouts help you achieve proper form, ensuring maximum results while minimizing the risk of injury. Perfect for all fitness levels, each routine focuses on posture correction to promote better overall body alignment.</p>
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
