import React from 'react'
import '../SubPages.css'
import plank1 from '../../../../Assets/Plank1.jpg'
import { useNavigate } from "react-router-dom";
import abs from "../../../../Assets/abs.webp";
import { IoArrowBackCircleOutline } from "react-icons/io5";



const AbsList = () => {

  const navigate = useNavigate();
  const navigatePlank = useNavigate();
  const handleNavigatePlank = () => {
    navigate('/plank'); 
  };

  const navigateAbs = useNavigate();
  const handleNavigateAbs = () => {
    navigate('/exercise'); 
  };

  return (
    <div className='exercises'>
      <div className="exerciseRow1">
      <IoArrowBackCircleOutline className='backBtn' onClick={handleNavigateAbs}/>
        <img src={abs} alt="" />
        <h2>Abs Exercises</h2>
        <p>Strengthening your core through targeted abs exercises is essential for improving posture, enhancing stability, and supporting overall body strength. Our ab workouts focus on engaging all areas of the core, including the upper and lower abdominals, obliques, and deep stabilizing muscles. By emphasizing proper form and posture, these exercises help you build a strong, defined core while reducing the risk of injury during daily movements or workouts. Whether you're aiming to tone your midsection or boost core strength, these abs exercises will help you achieve a solid foundation for total-body fitness.</p>
      </div>

    <div className='exerciseRow2' >
      <div className='exerciseList' onClick={handleNavigatePlank}>
        <img src={plank1} alt="" />
        <h3>Plank</h3>
        <p>45s*3 (45 seconds / 3 sets)</p>
      </div>

      <div className='exerciseList' onClick={handleNavigatePlank}>
        <img src={plank1} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>45s*3 (45 seconds / 3 sets)</p>
      </div>
      <div className='exerciseList' onClick={handleNavigatePlank}>
        <img src={plank1} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>45s*3 (45 seconds / 3 sets)</p>
      </div>
      <div className='exerciseList' onClick={handleNavigatePlank}>
        <img src={plank1} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>45s*3 (45 seconds / 3 sets)</p>
      </div>
      <div className='exerciseList' onClick={handleNavigatePlank}>
        <img src={plank1} alt="" />
        <h3>Diamond Push-ups</h3>
        <p>45s*3 (45 seconds / 3 sets)</p>
      </div>      
    </div>
    </div>
  )
}

export default AbsList
