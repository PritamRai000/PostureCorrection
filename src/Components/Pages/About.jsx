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
      <p>
        Welcome to PostureCorrection, your trusted companion in improving body
        posture and enhancing workout efficiency. Our mission is to help you
        achieve your fitness goals by guiding you through posture-correcting
        exercises, ensuring that each move is safe and effective.
      </p>
      <br />
      <p>
        At PostureCorrection, we believe that proper posture is the foundation
        of any successful workout routine. By focusing on real-time feedback and
        personalized suggestions, we aim to help users avoid injury, maximize
        results, and build strength with confidence.
      </p>
      <br />
      <p>
        Whether you're new to fitness or an experienced enthusiast, our platform
        is designed to support you in every step of your journey to better
        posture and a healthier body. With easy-to-follow routines, expert tips,
        and continuous updates, we make posture correction accessible and
        enjoyable for everyone.
      </p>
      <br />
      <p>
        Welcome to PostureCorrection, your trusted companion in improving body
        posture and enhancing workout efficiency. Our mission is to help you
        achieve your fitness goals by guiding you through posture-correcting
        exercises, ensuring that each move is safe and effective.
      </p>
      <br />
      <p>
        At PostureCorrection, we believe that proper posture is the foundation
        of any successful workout routine. By focusing on real-time feedback and
        personalized suggestions, we aim to help users avoid injury, maximize
        results, and build strength with confidence.
      </p>
      <br />
      <p>
        Whether you're new to fitness or an experienced enthusiast, our platform
        is designed to support you in every step of your journey to better
        posture and a healthier body. With easy-to-follow routines, expert tips,
        and continuous updates, we make posture correction accessible and
        enjoyable for everyone.
      </p>
      <br /><p>
        Welcome to PostureCorrection, your trusted companion in improving body
        posture and enhancing workout efficiency. Our mission is to help you
        achieve your fitness goals by guiding you through posture-correcting
        exercises, ensuring that each move is safe and effective.
      </p>
      <br />
      <p>
        At PostureCorrection, we believe that proper posture is the foundation
        of any successful workout routine. By focusing on real-time feedback and
        personalized suggestions, we aim to help users avoid injury, maximize
        results, and build strength with confidence.
      </p>
      <br />
      <p>
        Whether you're new to fitness or an experienced enthusiast, our platform
        is designed to support you in every step of your journey to better
        posture and a healthier body. With easy-to-follow routines, expert tips,
        and continuous updates, we make posture correction accessible and
        enjoyable for everyone.
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
