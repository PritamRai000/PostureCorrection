import React from "react";
import "../../index.css";
import './Home.css'
import { useNavigate } from "react-router-dom";


const About = () => {

  const navigate = useNavigate();
  const navigateTerms = useNavigate();
  const handleNavigateTerms = () => {
    navigate('/TermsAndServices'); 
  };

  const navigatePrivacy = useNavigate();
  const handleNavigatePrivacy = () => {
    navigate('/PrivacyPolicy'); 
  };

  return (
    <div className="aboutPage">
      <h2>About Us</h2>
      <p>With the growing popularity of fitness and wellness, home workouts have become a preferred option for many individuals. The flexibility, convenience, and cost-effectiveness of exercising at home have attracted a wide range of users, from beginners to seasoned fitness enthusiasts. However, a significant challenge faced by those who choose to work out at home is the lack of professional supervision, particularly in ensuring correct posture. Maintaining proper body posture during exercise is crucial for preventing injuries, improving form, and ensuring the full effectiveness of workout routines. Incorrect posture can result in muscle imbalances, joint strains, and even long-term health complications, which may deter individuals from achieving their fitness goals.

<br /><br />To address this challenge, we developed "PostureCorrection," a web-based application designed to assist users in improving their posture during exercises. By using real-time posture analysis, the app detects incorrect movements and provides instant feedback and corrective suggestions. Users can perform their workouts safely and effectively from the comfort of their homes without needing constant supervision from fitness trainers. The app leverages camera input to track the user’s movements and analyze their posture through sophisticated algorithms.

<br /><br />The "PostureCorrection" app is built using modern web technologies. React serves as the frontend framework, offering a seamless and user-friendly interface, while the backend ensures accurate posture detection and data management. Our team of three collaborated to bring together these components to create a powerful, accessible solution that helps users maintain good form and avoid injuries during home workouts.

<br /><br />This introduction outlines the key objectives, the relevance of posture correction in home workouts, and the technology-driven approach that we have implemented to solve this critical issue.</p>
<p>In recent years, home workouts have gained immense popularity, driven by convenience, cost-effectiveness, and the flexibility they offer. However, one of the major challenges faced by individuals exercising at home is maintaining correct posture, which is crucial for avoiding injuries and maximizing the effectiveness of workouts. Incorrect posture can lead to strains, muscle imbalances, and long-term health issues. To address this concern, we developed "PostureCorrection," a web-based application designed to assist users in maintaining proper body posture during their workouts. By utilizing real-time camera input, our application tracks user movements, providing instant feedback and corrective suggestions to ensure exercises are performed safely and effectively. The platform integrates modern technologies, with React as the frontend framework and a sophisticated backend for posture analysis and data handling. This introduction provides an overview of the project's objectives, significance, and the problem it seeks to solve.

</p>
      <footer>
      <div className="footer">
        <p>Copyright © 2024. PostureCorrector</p>
        <ul>
          <li onClick={handleNavigateTerms}>Terms of Service</li>
          <li onClick={handleNavigatePrivacy}>Privacy Policy</li>
        </ul>
      </div>
      </footer>
    </div>
    
  );
};

export default About;
