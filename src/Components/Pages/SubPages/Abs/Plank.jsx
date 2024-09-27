import React from "react";
import Plank1 from "../../../../Assets/Plank1.jpg";
import "../SubPages.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../Home.css";

const Plank = () => {
  const navigate = useNavigate();
  const navigateAbs = useNavigate();
  const handleNavigateAbs = () => {
    navigate("/abslist");
  };
  const navigatePrivacy = useNavigate();
  const handleNavigatePrivacy = () => {
    navigate('/PrivacyPolicy'); 
  };

  const navigateTerms = useNavigate();
  const handleNavigateTerms = () => {
    navigate('/TermsAndServices'); 
  };

  const [videoFile, setVideoFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 100 * 1024 * 1024; // 100 MB in bytes

    if (file && file.size > maxSize) {
      alert("File is too large! Maximum size allowed is 100 MB.");
    } else {
      setVideoFile(file);
    }
  };

  // Function to handle file upload
  const handleUpload = async (event) => {
    event.preventDefault();
    if (!videoFile) {
      alert("Please select a video file!");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      // Send the file to the server
      const response = await axios.post(
        "http://localhost:5000/upload-video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("Video uploaded successfully!");
      }
    } catch (error) {
      alert("Video upload failed! Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="p">
      <div className="plank">
        <IoArrowBackCircleOutline
          className="backBtn1"
          onClick={handleNavigateAbs}
        />
        <img src={Plank1} alt="" />

        <div className="plankText">
          <h1>Plank</h1>
          <h2>Instructions</h2>
          <p>
          To perform a plank, start by lying face down on the floor. Place your forearms on the ground, elbows directly beneath your shoulders, and hands clasped or flat on the floor. Extend your legs behind you, resting on your toes. Engage your core, glutes, and legs to maintain a straight line from your head to your heels. Avoid letting your hips sag or rise too high; your body should remain in a straight line. Hold this position for 45 seconds, focusing on your breathing and maintaining form. Rest for 30 seconds between sets and aim for 3 sets.
          </p>
          <h2>Steps</h2>
          <p>
          -Start Position:
Lie face down on the floor. <br/>

-Forearm Placement:
Place your forearms on the ground with elbows directly beneath your shoulders, and hands clasped or flat. <br/>

-Leg Extension:
Extend your legs behind you, resting on your toes. <br/>

-Engage Core:
Tighten your core, glutes, and leg muscles to maintain a straight line from head to heels. <br/>

-Check Alignment:
Ensure your body remains straight; avoid sagging hips or raising them too high. <br/>

-Hold the Position:
Maintain the plank for 45 seconds, focusing on controlled breathing. <br/>

-Rest:
Rest for 30 seconds between sets and aim for 3 sets. <br/>
          </p>
          <h2>Focus Area:</h2>
          <p>
          -Core: Primarily targets the abdominal muscles for stability and strength. <br/>
-Shoulders: Engages the shoulder muscles for support and stability. <br/>
-Glutes: Activates the gluteal muscles, contributing to overall body strength. <br/>
-Back: Strengthens the muscles of the lower back for improved posture. <br/>
-Legs: Engages the leg muscles for additional stability and support. <br/>
          </p>

          {/* <button className="btn">Get Report</button> */}
          <form onSubmit={handleUpload} className="uploadForm">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="upload-btn"
            />
            <button type="submit" className="upload-btn">
              Upload Video
            </button>
          </form>
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

export default Plank;
