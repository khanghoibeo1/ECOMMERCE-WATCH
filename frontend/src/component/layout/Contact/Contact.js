import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <p>
        Brand story "Based on the spirit of iron and steel, the will to be
        resilient and The immortal loyalty of Swiss Guards in the early
        sixteenth century, logo of Luxury Shopping shows the brand's identity
        and mission In the 21st century. ”
      </p>
      <a className="mailBtn" href="mailto:khuongchet2003@gmail.com">
        <Button>Contact: khuongchet2003@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
