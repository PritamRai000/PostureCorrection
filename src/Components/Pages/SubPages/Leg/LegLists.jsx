import React from 'react'
import '../SubPages.css'
import squats from '../../../../Assets/squat.gif'
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import leg from '../../../../Assets/leg.jpg'


const LegLists = () => {

  const navigate = useNavigate();
  const navigateSquat = useNavigate();
  const handleNavigateSquat = () => {
    navigate('/squat'); 
  };
  const navigateLeg = useNavigate();
  const handleNavigateLeg = () => {
    navigate('/exercise'); 
  };
  return (
    <div className='exercises'>

      <div className="exerciseRow1">
        <IoArrowBackCircleOutline className='backBtn' onClick={handleNavigateLeg}/>
        <img src={leg} alt="" />
        <h2>Leg Exercises</h2>
        <p>Strengthen your arms and improve muscle endurance with targeted exercises that also enhance your posture. Our guided arm workouts help you achieve proper form, ensuring maximum results while minimizing the risk of injury. Perfect for all fitness levels, each routine focuses on posture correction to promote better overall body alignment.</p>
      </div>

      <div className="exerciseRow2">

      <div className='exerciseList' onClick={handleNavigateSquat}>
        <img src={squats} alt="" />
        <h3>Squats</h3>
        <p>15*3</p>
      </div>

      <div className='exerciseList' onClick={handleNavigateSquat}>
        <img src={squats} alt="" />
        <h3>Squats</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateSquat}>
        <img src={squats} alt="" />
        <h3>Squats</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateSquat}>
        <img src={squats} alt="" />
        <h3>Squats</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateSquat}>
        <img src={squats} alt="" />
        <h3>Squats</h3>
        <p>15*3</p>
      </div>      
      </div>
    </div>
  )
}

export default LegLists
