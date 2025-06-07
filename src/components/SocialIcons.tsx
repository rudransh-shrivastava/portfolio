import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    {
      id: 1,
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
      text: "LinkedIn",
    },
    { id: 2, icon: <FaGithub />, link: "https://github.com", text: "GitHub" },
    {
      id: 3,
      icon: <FaTwitter />,
      link: "https://twitter.com",
      text: "Twitter",
    },
  ];

  return (
    <div className="flex items-center gap-2 my-1">
      {icons.map(({ id, icon, link, text }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-3xl transition-transform transform hover:scale-150 hover:text-gray-200"
        >
          <div className="group">
            {icon}
            <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-white text-mainBlack text-xs px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              {text}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
