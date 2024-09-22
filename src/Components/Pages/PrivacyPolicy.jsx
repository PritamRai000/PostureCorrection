import React from 'react'
import '../../index.css'
import { useNavigate } from "react-router-dom";


const PrivacyPolicy = () => {

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
    <div className="terms">
      <h1>Privacy Policy</h1>
      <div className='termContent'>

      <h2>Introduction</h2>
      <p>
        Welcome to [Your Website Name] (“the Website”). These Terms and Services
        (“Terms”) govern your use of our website, mobile app, and services. By
        accessing or using our platform, you agree to comply with these terms in
        full. If you do not agree with any part of these terms, you must not use
        the website or services.
      </p>
      <h2>Services Overview</h2>
      <p>
        [Your Website Name] provides a digital platform aimed at helping users
        improve their body posture during workouts through exercise routines,
        posture suggestions, and real-time feedback. Our services include, but
        are not limited to: Personalized workout routines. Posture correction
        suggestions. Progress tracking and feedback.
      </p>
      <h2>Not a Substitute for Professional Guidance</h2>
      <p>
        The suggestions and guidance provided by [Your Website Name] are
        intended for informational purposes only. We are not medical
        professionals, and our services do not constitute medical advice or
        diagnosis. Always consult a healthcare provider before starting any
        exercise program, especially if you have any pre-existing medical
        conditions or concerns.
      </p>
      <h2>User Responsibilities</h2>
      <p>
        As a user, you are responsible for: Ensuring that you are physically fit
        and capable of performing exercises. Following the posture suggestions
        provided by the platform responsibly. Seeking professional advice in
        case of any discomfort, injury, or uncertainty during workouts. You
        agree to use the platform at your own risk and assume all responsibility
        for any injury or harm caused by improper exercise practices or misuse
        of the platform.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        [Your Website Name] and its team will not be held liable for: Any
        injuries, accidents, or health issues that arise from using the
        services. Inaccuracies in the posture correction suggestions or workout
        recommendations. Interruptions or disruptions in services due to
        technical or other reasons. We disclaim all liability for any damage or
        loss arising directly or indirectly from your use of the Website and
        related services.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content, including but not limited to text, graphics, logos, videos,
        and software, is the intellectual property of [Your Website Name]. You
        may not use, modify, distribute, or reproduce any materials from the
        Website without our written consent.
      </p>
      <h2>Privacy and Data Collection</h2>
      <p>
        By using our services, you agree to our Privacy Policy, which governs
        how we collect, store, and use your personal information. We take user
        privacy seriously and ensure that all personal data is handled
        responsibly.
      </p>
      <h2>Modifications to Services</h2>
      <p>
        [Your Website Name] reserves the right to update, modify, or discontinue
        any aspect of our services at any time, with or without notice. This
        includes adding new features or restricting access to parts of the
        platform.
      </p>
      <h2>Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to the platform
        at any time for any reason, including violation of these Terms.
      </p>
      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of [Your Country]. Any disputes arising under these Terms shall be
        subject to the exclusive jurisdiction of the courts in [Your Country].
      </p>
      <h2>Contact Information</h2>
      <p>
        For questions or concerns regarding these Terms and Services, please
        contact us at: Email: [Your Contact Email] Address: [Your Company
        Address]
      </p>
      </div>

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
  )
}

export default PrivacyPolicy
