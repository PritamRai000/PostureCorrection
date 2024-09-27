import React from "react";
import "../SubPages.css";
import squat1 from "../../../../Assets/squat1.gif";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../Home.css";


const Squats = () => {
  const navigate = useNavigate();
  const navigateLeg = useNavigate();
  const handleNavigateLeg = () => {
    navigate("/leglist");
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
    <div className="D">
      <div className="diamond">
        <IoArrowBackCircleOutline
          className="backBtn1"
          onClick={handleNavigateLeg}
        />
        <img src={squat1} alt="" />
        <div className="diamondText">
          <h1>Squats</h1>
          <h2>Instructions</h2>
          <p>
          To perform squats, begin by standing with your feet shoulder-width apart and your toes slightly pointed out. Engage your core muscles to maintain stability throughout the movement. Lower your body by bending your knees and pushing your hips back as if sitting in a chair, ensuring your chest remains up and your back stays straight. Aim to lower your thighs until they are parallel to the ground or as low as comfortable, pausing briefly at the lowest point to ensure your knees are aligned with your toes. Press through your heels to return to the starting position, keeping your core engaged and chest up. Start with 3 sets of 10-15 reps, adjusting as needed based on your fitness level.
          </p>
          <h2>Steps</h2>
          <p>
          -Stand:
Begin by standing with your feet shoulder-width apart, toes slightly pointed out. <br />

-Engage Your Core:
Tighten your core muscles to maintain stability throughout the movement. <br />

-Lower:
Bend your knees and push your hips back as if sitting in a chair. Keep your chest up and back straight. Lower until your thighs are parallel to the ground or as low as comfortable. <br />

-Push Up:
Press through your heels to return to the starting position, keeping your core engaged and chest up. <br />

-Reps:
Start with 3 sets of 10-15 reps, adjusting as needed based on your fitness level. <br />
          </p>
          <h2>Focus Area:</h2>
          <p>
          -Quadriceps: Primarily targets the front thigh muscles. <br />
-Hamstrings: Engages the muscles at the back of the thighs for balance. <br />
-Glutes: Strengthens the gluteal muscles for improved lower body power. <br />
-Core: Activates the abdominal muscles for stability and posture. <br />
-Lower Back: Promotes strength in the lower back for overall support. <br />
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

export default Squats;
