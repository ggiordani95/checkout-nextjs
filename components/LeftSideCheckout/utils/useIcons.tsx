import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import { TSocial } from "../types";

const socials: TSocial[] = [
  {
    name: "Linkedin",
    icon: (
      <FaLinkedin
        size={22}
        className={
          "hover:scale-125 transition-all duration-200 hover:text-white"
        }
      />
    ),
    url: "https://www.linkedin.com/in/gustavo-giordani/",
  },
  {
    name: "Github",
    icon: (
      <FaGithub
        size={22}
        className={
          "hover:scale-125 transition-all duration-200 hover:text-white "
        }
      />
    ),
    url: "https://github.com/ggiordani95",
  },
];

function useSocials() {
  return { socials };
}

export default useSocials;
