import React from "react";
import BaseLayout from "../../components/BaseLayout";
import "./about.css"; // Import your CSS file for styling
import AboutVision from "./CompanyVision";
import TeamCarousel from "./MyTeam";
import raniImg from "./img/rani.jpeg";

// import companyLogo from "./company-logo.png"; // Import your company logo

const AboutPage: React.FC = () => {
  return (
    <BaseLayout title={"Home"}>
      <>
        <div className="about-container">
          {/* Company Logo */}

          <img
            src={require("../../assets/img/pro1.jpeg")}
            alt="Company Logo"
            className="company-logo"
          />

          {/* Company Details */}
          <div className="company-details">
            <h1>Welcome to</h1>
            <h2>Pro Consultant</h2>
            <p className="company-description">
              We are a team of passionate individuals who believe in the power
              of technology to transform businesses and enhance lives. Our
              mission is to deliver cutting-edge solutions that make a
              difference.
            </p>
          </div>
        </div>
        <AboutVision />
        <div className="founder-section">
          <h2>Founder</h2>
          <div className="founder-details">
            <div className="founder-image">
              <img src={raniImg} alt="Founder" className="founder-img" />
            </div>
            <div className="founder-text">
              <h3>Rani Tiwari</h3>
              <p>
                Rani Tiwari is the visionary leader behind Pro Consultant. With
                a passion for recruitment and a commitment to innovation, she
                has guided the company to its current success.
              </p>
            </div>
          </div>
        </div>
        <TeamCarousel />
      </>
    </BaseLayout>
  );
};

export default AboutPage;
