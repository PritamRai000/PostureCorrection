import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import arm from "../../Assets/arm.jpg";
import shoulder from "../../Assets/shoulder.jpg";
import chest from "../../Assets/chest.jpg";
import leg from "../../Assets/leg.jpg";
import back from "../../Assets/back.jpg";
import about from "../../Assets/about.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Home = () => {

  const navigate = useNavigate();
  const handleNavigateExercise = () => {
    navigate('/exercise'); 
  };

  const navigateAbout = useNavigate();
  const handleNavigateAbout = () => {
    navigate('/About'); 
  };

  const navigateTerms = useNavigate();
  const handleNavigateTerms = () => {
    navigate('/TermsAndServices'); 
  };

  const navigatePrivacy = useNavigate();
  const handleNavigatePrivacy = () => {
    navigate('/PrivacyPolicy'); 
  };

  const navigateArm = useNavigate();
  const handleNavigateArm = () => {
    navigate('/armlist'); 
  };

  const navigateShoulder = useNavigate();
  const handleNavigateShoulder = () => {
    navigate('/shoulderlist'); 
  };
  const navigateLeg = useNavigate();
  const handleNavigateLeg = () => {
    navigate('/leglist'); 
  };
  const navigateBack = useNavigate();
  const handleNavigateBack = () => {
    navigate('/backlist'); 
  };
  const navigateChest = useNavigate();
  const handleNavigateChest = () => {
    navigate('/chestlist'); 
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97504740-ef8d-46af-b489-142b551c982d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
      {/* hero section */}
      <div className="hero">
        <div className="heroText">
          <h1>Transform Your Home Workouts with Instant Posture Feedback</h1>
          <p>
            Elevate your exercise routine with cutting-edge technology that
            tracks your body’s movements and offers real-time posture advice.
            Perfect your technique and achieve your fitness goals faster
          </p>
          <button className="btn" onClick={handleNavigateExercise}>Start Journey</button>
        </div>
      </div>

      {/* program section */}
      <div className="programSection">
        <h1>Our Programs</h1>
        <h3>What We Offer ?</h3>
        <div className="programs">
          <div className="program" onClick={handleNavigateArm}>
            <img src={arm} alt="" />
            <div className="caption">
              <p>Arms Workout</p>
            </div>
          </div>
          <div className="program" onClick={handleNavigateShoulder}>
            <img src={shoulder} alt="" />
            <div className="caption">
              <p>Shoulder Workout</p>
            </div>
          </div>
          <div className="program" onClick={handleNavigateChest}>
            <img src={chest} alt="" />
            <div className="caption">
              <p>Chest Workout</p>
            </div>
          </div>
          <div className="program" onClick={handleNavigateLeg}>
            <img src={leg} alt="" />
            <div className="caption">
              <p>Leg Workout</p>
            </div>
          </div>
          <div className="program" onClick={handleNavigateBack}>
            <img src={back} alt="" />
            <div className="caption">
              <p>Back Workout</p>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="aboutSection">
        <h1>About PostureCorrection</h1>

        <div className="about">
          <div className="about-left">
            <img src={about} alt="" className="aboutImg" />
          </div>
          <div className="about-right">
            <h2>About Us</h2>
            <p>
              At PostureCorrection, we're dedicated to helping you achieve your
              fitness goals safely and effectively by focusing on proper
              posture. Our AI-driven platform provides real-time feedback to
              guide your movements, ensuring each exercise is performed with
              precision to maximize results and minimize injury. Join us on a
              journey to safer, smarter workouts, wherever you are.
            </p>
            <button className="btn" onClick={handleNavigateAbout}>Learn More</button>
          </div>
        </div>
      </div>

      {/*contact section*/}

      <div className="contactSection">
        <h1>Connect With Us</h1>
        <div className="contact">
          <div className="firstCol">
            <h3>Connect with us via</h3>
            <div className="email">
              <MdOutlineEmail className="emailIcon"/>
              <a href="https://mail.google.com/">bodyPosture122@gmail.com</a>
            </div>
            <div className="phone">
              <FaPhone className="phoneIcon"/>
              <p>9812345678</p>
            </div>
            <div className="insta">
              <FaInstagram className="instaIcon"/>
              <a href="https://www.instagram.com/">bodyPosture122</a>
            </div>
            <div className="whatsapp">
              <FaWhatsapp className="whatsappIcon"/>
              <a href="https://web.whatsapp.com/">981234567</a>
            </div>
            <div className="facebook">
              <FaFacebook className="facebookIcon"/>
              <a href="https://web.facebook.com/">Posture Correction</a>
            </div>
          </div>
          <div className="secondCol">
            <h3>Send Us Message</h3>
            <form onSubmit={onSubmit}>
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <label htmlFor="">E-mail</label>
              <input
                type="tel"
                name="email"
                placeholder="Enter your e-mail"
                required
              />
              <label htmlFor="">Write your messages here</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your messages"
                id=""
                required
              ></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>

      {/*footer section*/}
      <div className="footer">
        <p>Copyright © 2024. PostureCorrector</p>
        <ul>
          <li onClick={handleNavigateTerms}>Terms of Service</li>
          <li onClick={handleNavigatePrivacy}>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
