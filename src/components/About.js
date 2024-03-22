import React from 'react';
import profileImage from '../assets/images/profile.png'; 

const AboutMe = () => {
  return (
    <section id="about-me" className="my-5 intro">
      <div className="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="Avatar" />
          </div>
          <p>
            Welcome to my Portfolio. As a junior software developer, I'm on an exciting journey of growth and learning in the world of technology. While I may be relatively new to the field, my enthusiasm and eagerness to expand my skills drive me to tackle challenges head-on and continuously improve.
            This portfolio showcases some of my early projects, reflecting my dedication to mastering JavaScript, CSS, HTML, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery and Bootstrap. I have a passion for creating clean, efficient code and each endeavor I've encountered has been a valuable learning opportunity that has shaped my approach to software development.
            I invite you to explore these projects and witness my commitment to growth and learning. Thank you for visiting, and I'm excited about the possibilities that lie ahead as I continue to evolve as a software developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
