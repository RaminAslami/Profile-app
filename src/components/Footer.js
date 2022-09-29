import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul class="social-icons">
        <li>
          <a href="#">
            <FaGithub></FaGithub>
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter></FaTwitter>
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook></FaFacebook>
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram></FaInstagram>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
