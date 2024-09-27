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
        <p>Developing a strong chest is crucial for enhancing upper body strength, improving posture, and supporting overall functional fitness. Our chest workout routines are designed to target the pectoral muscles while also engaging the shoulders and triceps for a balanced, full-body approach. Each exercise emphasizes proper form to ensure muscle activation and prevent injury. Whether your goal is to build muscle, increase endurance, or correct posture, these chest workouts will help you achieve a powerful, well-defined upper body.</p>
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
