import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/khuong.iss/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "15vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkddp75qi/image/upload/v1728879497/avatar_ntyj6s.jpg"
              alt="Founder"
            />
            <Typography>Vo Chi Khuong</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a luxury website created by @vochikhuong. With the sole
              purpose of bringing customers the ultimate shopping experience
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com/@miu_kay" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/khuong.iss/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

            <a href="https://www.facebook.com/khuong.iss" target="blank">
              <FacebookIcon className="facebookSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
