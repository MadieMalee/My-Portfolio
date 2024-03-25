import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

function Nav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    // <nav>
    //   <ul className="nav nav-tabs">
    //     <li className="nav-item">
    //       <Link to="/">About Me</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/portfolio">My Projects</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/contact">Contact Me</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/resume">My Resume</Link>
    //     </li>
    //   </ul>
    // </nav>
    <Tabs value={value} onChange={(_, v) => setValue(v)}>
      <Tab onClick={() => navigate("/")} label="About Me" />
      <Tab onClick={() => navigate("/portfolio")} label="My Projects" />
      <Tab onClick={() => navigate("/contact")} label="Contact Me" />
      <Tab onClick={() => navigate("/resume")} label="My Resume" />
    </Tabs>
  );
}

export default Nav;
