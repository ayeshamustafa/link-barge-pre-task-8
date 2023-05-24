// const NonSocialLinks = () => {
//     return <p>Non Social Links</p>
// }

// export default NonSocialLinks;


import React from "react";
import { getLinksLinks } from "../utils/data";

const NonSocialLinks = () => {
  const nonSocialLinks = getLinksLinks();

  return (
    <div className="non-social-links flex justify-center">
      <div className="button-container">
        {nonSocialLinks.map((link, index) => (
          <a href={link.url} className="button" key={index}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NonSocialLinks;
