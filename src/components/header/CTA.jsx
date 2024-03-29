import React from "react";
import CV from "../../assets/Rajan_Pandey_Resume_2024.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Hire Me
      </a>
    </div>
  );
};

export default CTA;
