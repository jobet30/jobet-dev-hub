import React from "react";
import profileImage from "../images/profile-image.jpg";

const ProfileImage = () => {
  return (
    <div className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white overflow-hidden transform hover:scale-105 transition-all duration-500">
      <img
        src={profileImage}
        alt="Jobet Casquejo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
