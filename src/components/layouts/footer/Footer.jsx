import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <h3>Thank you for visiting this website!</h3>
      <p>
        Created by
        <a href="https://github.com/MateoMigone">
          <GitHubIcon
            sx={{ color: "white", marginLeft: "1.2rem", fontSize: "1.5rem" }}
          />{" "}
          MateoMigone
        </a>
      </p>
    </footer>
  );
};

export default Footer;
