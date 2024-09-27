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
        <p>Building strong legs is essential for overall body strength, stability, and endurance. Our leg workout routines focus on key muscle groups including the quadriceps, hamstrings, glutes, and calves, ensuring balanced development and improved lower body mobility. Each exercise is designed with proper posture and form in mind, helping you avoid common mistakes that lead to injury. Whether your goal is to enhance athletic performance or simply improve day-to-day movement, these leg workouts will help you build strength, power, and stability from the ground up.</p>
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
