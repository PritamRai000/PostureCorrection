import React from "react";
import "../SubPages.css";
import dumbell from "../../../../Assets/dumbell.gif";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../../Home.css";

const LateralRaises = () => {
  const navigate = useNavigate();
  const navigateShoulder = useNavigate();
  const handleNavigateShoulder = () => {
    navigate("/shoulderlist");
  };
  const navigatePrivacy = useNavigate();
  const handleNavigatePrivacy = () => {
    navigate("/PrivacyPolicy");
  };

  const navigateTerms = useNavigate();
  const handleNavigateTerms = () => {
    navigate("/TermsAndServices");
  };
  return (
    <div className="D">
      <div className="diamond">
        <IoArrowBackCircleOutline
          className="backBtn1"
          onClick={handleNavigateShoulder}
        />

        <img src={dumbell} alt="" />
        <div className="diamondText">
          <h1>Dumbell Lateral Raises</h1>
          <h2>Instructions</h2>
          <p>
            To perform dumbbell lateral raises, stand with your feet
            shoulder-width apart, holding a dumbbell in each hand at your sides
            with your palms facing your body and elbows slightly bent. Engage
            your core to maintain stability, then slowly raise the dumbbells out
            to the sides until your arms are parallel to the floor or slightly
            below shoulder level, keeping the movement controlled and avoiding
            any swinging. Your palms should face downward at the top of the
            lift. Gradually lower the dumbbells back to the starting position,
            ensuring a smooth descent. Aim for 10-15 repetitions for 2-3 sets,
            resting for 30-60 seconds between sets. Start with lighter weights
            to focus on form, and always warm up before your workout to prevent
            injuries.
          </p>
          <h2>Steps</h2>
          <p>
            -Stand Up: Position yourself with feet shoulder-width apart, holding
            a dumbbell in each hand at your sides. <br />
            -Set Your Grip: Keep your palms facing your body with elbows
            slightly bent. <br />
            -Engage Your Core: Tighten your core muscles to maintain stability
            during the exercise. <br />
            -Raise the Dumbbells: Slowly lift the dumbbells out to the sides,
            keeping your elbows slightly bent. Raise them until your arms are
            parallel to the floor or just below shoulder level. <br />
            -Maintain Control: Ensure that the movement is controlled; avoid
            swinging the weights or using momentum. Keep your shoulders relaxed
            and away from your ears. <br />
            -Lower the Dumbbells: Gradually lower the dumbbells back to the
            starting position in a smooth motion. <br />
            -Complete the Set: Perform 10-15 repetitions for 2-3 sets, resting
            for 30-60 seconds between each set. <br />
          </p>
          <h2>Focus Area:</h2>
          <p>
            -Triceps: Primarily targets the triceps for strength and definition.{" "}
            <br />
            -Chest: Engages the inner pectoral muscles for overall development.{" "}
            <br />
            -Shoulders: Activates the deltoids for stability and strength.{" "}
            <br />
            -Core: Strengthens the abdominal muscles and improves stability.{" "}
            <br />
            -Wrist Stability: Develops wrist strength and stability for better
            performance in other exercises.
          </p>
          <button className="upload-btn">Coming Soon...</button>
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

export default LateralRaises;
