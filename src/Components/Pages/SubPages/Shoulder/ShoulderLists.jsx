import React from 'react'
import '../SubPages.css'
import dumbell from '../../../../Assets/dumbell.gif'
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import shoulder from '../../../../Assets/shoulder.jpg'


const ShoulderLists = () => {

  const navigate = useNavigate();
  const navigateDumbell = useNavigate();
  const handleNavigateDumbell = () => {
    navigate('/dumbell'); 
  };
  const navigateShoulder = useNavigate();
  const handleNavigateShoulder = () => {
    navigate('/exercise'); 
  };

  return (
    <div className='exercises'>
      <div className="exerciseRow1">
        <IoArrowBackCircleOutline className='backBtn' onClick={handleNavigateShoulder}/>
        <img src={shoulder} alt="" />
        <h2>Shoulder Exercises</h2>
        <p>Strengthening your shoulders is key to improving posture, enhancing upper body stability, and preventing injuries during everyday activities or intense training. Our shoulder workout routines are designed to target all three heads of the deltoid muscle, ensuring balanced development and improving your range of motion. Each exercise is tailored to correct posture and optimize shoulder alignment, making sure you maintain proper form while building strength. Whether you’re a beginner or a seasoned athlete, these workouts will help you build stronger, more resilient shoulders.</p>
      </div>
      
      <div className="exerciseRow2">
      <div className='exerciseList' onClick={handleNavigateDumbell}>
        <img src={dumbell} alt="" />
        <h3>Dumbell Lateral Raises</h3>
        <p>15*3</p>
      </div>

      <div className='exerciseList' onClick={handleNavigateDumbell}>
        <img src={dumbell} alt="" />
        <h3>Dumbell Lateral Raises</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateDumbell}>
        <img src={dumbell} alt="" />
        <h3>Dumbell Lateral Raises</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateDumbell}>
        <img src={dumbell} alt="" />
        <h3>Dumbell Lateral Raises</h3>
        <p>15*3</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateDumbell}>
        <img src={dumbell} alt="" />
        <h3>Dumbell Lateral Raises</h3>
        <p>15*3</p>
      </div>      
      </div>

    </div>
  )
}

export default ShoulderLists
