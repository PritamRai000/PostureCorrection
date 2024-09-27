import React from "react";
import "../SubPages.css";
import triceps from "../../../../Assets/tricep.gif";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../Home.css";



const Triceps = () => {
  const navigate = useNavigate();

  const navigateBack = useNavigate();
  const handleNavigateBack = () => {
    navigate("/backlist");
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
          onClick={handleNavigateBack}
        />

        <img src={triceps} alt="" />
        <div className="diamondText">
          <h1>Triceps Dips</h1>
          <h2>Instructions</h2>
          <p>
          To perform triceps dips, start by sitting on the edge of a sturdy bench or chair, placing your hands next to your hips with fingers pointing forward. Slide your buttocks off the edge, supporting your weight with your arms while keeping your legs extended in front of you. Engage your core and keep your shoulders down and back. Lower your body by bending your elbows, keeping them close to your sides, until your upper arms are parallel to the ground or slightly below. Pause for a moment at the bottom, then push through your palms to return to the starting position, fully extending your arms. Aim for 3 sets of 8-12 reps, adjusting as necessary based on your fitness level.
          </p>
          <h2>Steps</h2>
          <p>
          -Position Yourself:
Sit on the edge of a sturdy bench or chair, placing your hands next to your hips with fingers pointing forward. <br /> 

-Support Your Weight:
Slide your buttocks off the edge, supporting your weight with your arms while keeping your legs extended in front of you. <br />

-Engage Your Core:
Tighten your core and keep your shoulders down and back throughout the movement. <br />

-Lower Your Body:
Bend your elbows, lowering your body while keeping your elbows close to your sides until your upper arms are parallel to the ground or slightly below. <br />

-Pause:
Hold the position briefly at the bottom of the movement. <br />

-Push Up:
Press through your palms to return to the starting position, fully extending your arms. <br />

-Reps:
Aim for 3 sets of 8-12 reps, adjusting as necessary based on your fitness level. <br />
          </p>
          <h2>Focus Area:</h2>
          <p>
          -Triceps: Primarily targets the triceps for strength and definition. <br />
-Chest: Engages the pectoral muscles for additional upper body development. <br />
-Shoulders: Activates the deltoid muscles for stability and strength. <br />
-Core: Engages the abdominal muscles for stability during the movement. <br />
-Wrist Stability: Helps improve wrist strength and stability, beneficial for other upper body exercises. <br />
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

export default Triceps;
