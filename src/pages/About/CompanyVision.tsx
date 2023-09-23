import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./companyVision.css"; // Import your custom CSS file

function AboutVision() {
  return (
    <section className="about-section">
      <Container>
        <Typography variant="h2" gutterBottom className="section-title">
          About Pro Consultant
        </Typography>

        <Card className="about-card">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Who We Are</Card.Title>
                  <Card.Text>
                    Pro Consultant, India's top recruitment firm, bridges talent
                    and career opportunities. Our market insights and
                    personalized service ensure the perfect match. Trust us for
                    efficient recruitment solutions and a brighter future.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    Our mission is simple yet impactful: to empower job seekers
                    with the skills, knowledge, and resources they need to
                    unlock their full potential. We believe that everyone
                    deserves a chance to succeed in their chosen field,
                    regardless of their background or circumstances.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} lg={12}>
              <Card className="feature-card">
                <Card.Body>
                  <Card.Title>What We Offer</Card.Title>
                  <Card.Text>
                    Free Training: We offer comprehensive and industry-relevant
                    training programs at absolutely no cost to you. Our training
                    modules are designed to equip you with the skills and
                    knowledge required to excel in your desired profession.
                    <br></br>
                    Job Placement Assistance: Pro Consultant is not just about
                    training; it's also about connecting you with the right job
                    opportunities. Our team works tirelessly to match your
                    skills with the perfect job fit, ensuring your career
                    aspirations become a reality.
                    <br />
                    Career Guidance: We provide personalized career counseling
                    and guidance, helping you chart a path towards long-term
                    success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          {/* <Card.Body>
            <Typography variant="h4" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to Pro Consultant, your trusted partner in the pursuit of
              meaningful employment and professional growth.
            </Typography>

            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is simple yet impactful: to empower job seekers with
              the skills, knowledge, and resources they need to unlock their
              full potential. We believe that everyone deserves a chance to
              succeed in their chosen field, regardless of their background or
              circumstances.
            </Typography>

            <Typography variant="h4" gutterBottom>
              What We Offer
            </Typography>
            <ListGroup>
              <ListGroup.Item>
                Free Training: We offer comprehensive and industry-relevant
                training programs at absolutely no cost to you. Our training
                modules are designed to equip you with the skills and knowledge
                required to excel in your desired profession.
              </ListGroup.Item>
              <ListGroup.Item>
                Job Placement Assistance: Pro Consultant is not just about
                training; it's also about connecting you with the right job
                opportunities. Our team works tirelessly to match your skills
                with the perfect job fit, ensuring your career aspirations
                become a reality.
              </ListGroup.Item>
              <ListGroup.Item>
                Career Guidance: We provide personalized career counseling and
                guidance, helping you chart a path towards long-term success.
              </ListGroup.Item>
            </ListGroup>
          </Card.Body> */}
        </Card>

        <Typography variant="h4" gutterBottom className="section-title">
          Why Choose Pro Consultant?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Expertise</Card.Title>
                <Card.Text>
                  Our team of experienced professionals and trainers are experts
                  in their respective fields, ensuring you receive top-notch
                  training and guidance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Community</Card.Title>
                <Card.Text>
                  We believe in the strength of community support. Join our
                  network of job seekers, trainers, and mentors who are here to
                  support and uplift one another.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Commitment to Excellence</Card.Title>
                <Card.Text>
                  We are committed to your success. Our success stories speak
                  for themselves, with countless individuals finding fulfilling
                  careers through Pro Consultant.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutVision;
