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
        <p>Strengthen your arms and improve muscle endurance with targeted exercises that also enhance your posture. Our guided arm workouts help you achieve proper form, ensuring maximum results while minimizing the risk of injury. Perfect for all fitness levels, each routine focuses on posture correction to promote better overall body alignment.</p>
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
