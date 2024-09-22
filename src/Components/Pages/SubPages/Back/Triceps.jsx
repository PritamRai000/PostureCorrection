import React from "react";
import "../SubPages.css";
import triceps from "../../../../Assets/tricep.gif";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Triceps = () => {
  const navigate = useNavigate();

  const navigateBack = useNavigate();
  const handleNavigateBack = () => {
    navigate("/backlist");
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
            To perform diamond push-ups, start in a plank position with your
            hands placed close together beneath your chest, forming a diamond
            shape with your thumbs and index fingers touching. Your feet should
            be about hip-width apart, and your body should form a straight line
            from your head to your heels. Engage your core and keep your body
            stable as you lower yourself by bending your elbows, keeping them
            close to your body. Lower until your chest nearly touches your
            hands. Push through your palms to extend your arms and return to the
            starting position. Inhale as you lower yourself and exhale as you
            push back up. Repeat for the desired number of repetitions.
          </p>
          <h2>Steps</h2>
          <p>
            Start: Begin in a pushup position, hands under your chest forming a
            diamond with thumbs and index fingers. Keep your body straight, core
            tight.
            <br />
            Lower: Bend elbows, lowering your chest towards the diamond shape.
            Keep elbows close to your body.
            <br />
            Push: Push back up to the start position, keeping your core engaged.
            <br />
            Reps: Start with 3 sets of 8-12 reps, adjusting as needed.
          </p>
          <h2>Focus Area:</h2>
          <p>
            -Triceps (back of the arms) <br />
            -Pectoral muscles (chest) <br />
            -Deltoids (shoulders) <br />
            -Core muscles (to maintain stability)
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
    </div>
  );
};

export default Triceps;
