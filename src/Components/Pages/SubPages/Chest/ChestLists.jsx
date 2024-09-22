import React from 'react'
import '../SubPages.css'
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import kneePushups from '../../../../Assets/kneePushups.gif'
import chest from '../../../../Assets/chest.jpg'



const ChestLists = () => {

  const navigate = useNavigate();
  const navigateKnee = useNavigate();
  const handleNavigateKnee = () => {
    navigate('/knee'); 
  };
  const navigateChest = useNavigate();
  const handleNavigateChest = () => {
    navigate('/exercise'); 
  };

  return (
    <div className='exercises'>
      <div className="exerciseRow1">
        <IoArrowBackCircleOutline className='backBtn' onClick={handleNavigateChest}/>
        <img src={chest} alt="" />
        <h2>Chest Exercises</h2>
        <p>Strengthen your arms and improve muscle endurance with targeted exercises that also enhance your posture. Our guided arm workouts help you achieve proper form, ensuring maximum results while minimizing the risk of injury. Perfect for all fitness levels, each routine focuses on posture correction to promote better overall body alignment.</p>
      </div>

      <div className="exerciseRow2">
      <div className='exerciseList' onClick={handleNavigateKnee}>
        <img src={kneePushups} alt="" />
        <h3>Knee Push-Ups</h3>
        <p>15*3</p>
      </div>

      <div className='exerciseList' onClick={handleNavigateKnee}>
        <img src={kneePushups} alt="" />
        <h3>Knee Push-Ups</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateKnee}>
        <img src={kneePushups} alt="" />
        <h3>Knee Push-Ups</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateKnee}>
        <img src={kneePushups} alt="" />
        <h3>Knee Push-Ups</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateKnee}>
        <img src={kneePushups} alt="" />
        <h3>Knee Push-Ups</h3>
        <p>15*3</p>
      </div>      
      </div>
    </div>
  )
}

export default ChestLists
