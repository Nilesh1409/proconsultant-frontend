import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const AboutPage: React.FC = () => {
  console.log("about page");
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to [Your App Name]! We are a team of passionate developers who
          are dedicated to delivering exceptional solutions to our users.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide you with the best possible experience while
          using our web application. We constantly strive to improve and
          innovate to meet your needs.
        </Typography>
        <Typography variant="body1" paragraph>
          Key Features:
          <ul>
            <li>Feature 1: Describe a standout feature of your app.</li>
            <li>Feature 2: Highlight another key functionality.</li>
            <li>Feature 3: Mention any additional features or services.</li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          Meet the Team:
          <ul>
            <li>
              John Doe - Founder & CEO: A visionary leader with a passion for
              technology and user experience.
            </li>
            <li>
              Jane Smith - Lead Developer: Our coding guru who brings your ideas
              to life.
            </li>
            <li>
              Sarah Johnson - UI/UX Designer: The creative genius behind our
              beautiful interface.
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          Contact Us:
          <br />
          Have questions or suggestions? We'd love to hear from you! You can
          reach us at [contact@email.com].
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
