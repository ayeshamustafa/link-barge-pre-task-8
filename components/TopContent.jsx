// import { getCurrentUser } from "../utils/data";

// const { name, email } = getCurrentUser();

// const TopContent = () => {
//   return <div></div>;
// };

// export default TopContent;

import React from "react";
import Image from 'next/image';
import { getCurrentUser } from "../utils/data";

const TopContent = () => {
  const { name, email, bio, avatar } = getCurrentUser();

  return (
    <div className="top-content">
      <div className="user-card">
        <Image src={avatar} alt="User Avatar" width={145} height={145} />
        <h1 className="user-name">{name}</h1>
        <p className="user-email">{email}</p>
        <p className="user-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TopContent;