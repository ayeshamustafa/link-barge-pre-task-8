// const SocialLinks = () => {
//     return <p>Social Links</p>
// }

// export default SocialLinks;

import React from "react";
import { getSocialLinks } from "../utils/data";

const SocialLinks = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="social-links flex justify-center">
      <div className="button-container">
        {socialLinks.map((link, index) => (
          <a href={link.url} className="button" key={index}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
