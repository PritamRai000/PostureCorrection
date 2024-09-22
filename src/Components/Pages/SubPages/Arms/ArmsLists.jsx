import React from 'react'
import '../SubPages.css'
import pushups from '../../../../Assets/pushups.gif'
import { useNavigate } from "react-router-dom";
import arm from "../../../../Assets/arm.jpg";
import { IoArrowBackCircleOutline } from "react-icons/io5";



const ArmsList = () => {

  const navigate = useNavigate();
  const navigateDiamond = useNavigate();
  const handleNavigateDiamond = () => {
    navigate('/diamond'); 
  };

  const navigateArm = useNavigate();
  const handleNavigateArm = () => {
    navigate('/exercise'); 
  };

  return (
    <div className='exercises'>
      <div className="exerciseRow1">
      <IoArrowBackCircleOutline className='backBtn' onClick={handleNavigateArm}/>
        <img src={arm} alt="" />
        <h2>Arm Exercises</h2>
        <p>Strengthen your arms and improve muscle endurance with targeted exercises that also enhance your posture. Our guided arm workouts help you achieve proper form, ensuring maximum results while minimizing the risk of injury. Perfect for all fitness levels, each routine focuses on posture correction to promote better overall body alignment.</p>
      </div>

    <div className='exerciseRow2' >
      <div className='exerciseList' onClick={handleNavigateDiamond}>
        <img src={pushups} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>15*3 (15 reps / 3 sets)</p>
      </div>

      <div className='exerciseList' onClick={handleNavigateDiamond}>
        <img src={pushups} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>15*3 (15 reps / 3 sets)</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateDiamond}>
        <img src={pushups} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>15*3 (15 reps / 3 sets)</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateDiamond}>
        <img src={pushups} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>15*3 (15 reps / 3 sets)</p>
      </div>
      <div className='exerciseList' onClick={handleNavigateDiamond}>
        <img src={pushups} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>15*3 (15 reps / 3 sets)</p>
      </div>      
    </div>
    </div>
  )
}

export default ArmsList
