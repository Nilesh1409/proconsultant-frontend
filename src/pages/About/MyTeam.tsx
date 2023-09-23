import React from "react";
// @ts-ignore
import Slider from "react-slick";
import { Paper, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

// import "./TeamCarousel.css"; // Add custom CSS for styling

// Sample data for team members
const teamMembers = [
  { id: 2, name: "Vaibhavi Bangera", image: "" },
  { id: 3, name: "Priyanka", image: "" },
  {
    id: 1,
    name: "Pratibha Shukla",
    image:
      "https://media.licdn.com/dms/image/D4D03AQERQdzGSKq2SA/profile-displayphoto-shrink_400_400/0/1679046793128?e=1700697600&v=beta&t=qmilY7zWYyMlJGBqIz2ayw2JiI_aqDLVMRJGVbiypQU",
  },
  { id: 4, name: "Vaibhavi Bangera", image: "" },
  { id: 5, name: "Priyanka", image: "" },
  {
    id: 6,
    name: "Pratibha Shukla",
    image:
      "https://media.licdn.com/dms/image/D4D03AQERQdzGSKq2SA/profile-displayphoto-shrink_400_400/0/1679046793128?e=1700697600&v=beta&t=qmilY7zWYyMlJGBqIz2ayw2JiI_aqDLVMRJGVbiypQU",
  },
  // Add more team members as needed
];

const TeamCarousel = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const slidesToShow = isMobile ? 1 : 3;
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div className="team-carousel">
      <h2>Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id}>
            <Paper elevation={3} className="team-member-card">
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <img
                    src={
                      member.image
                        ? member.image
                        : require("../../assets/img/placeholderImg.png")
                    }
                    alt={member.name}
                    className="team-member-image"
                    style={{ height: "150px", borderRadius: "10px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{member.name}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
