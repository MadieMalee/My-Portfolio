import React from "react";
import reelRecsImage from "../assets/images/ReelRecs.png";
import weatherDashImage from "../assets/images/WeatherApp.png";
import noteTakerImage from "../assets/images/NoteTaker.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="NoteTaker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that allows users to be able to write and save notes so that they can organize their thoughts and keep track of tasks they need to complete. They can add new
                notes, delete notes and save natoes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://madiemalee.github.io/Weather-Dashboard/  ">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherApp"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A Website that allows users see the the current and future 5 day forecast for any city you search. The user can see the temperature, humidity levels and
                wind speed.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://victorsamuel-dev.github.io/ReelRecs/">
                {" "}
                <img
                  src={reelRecsImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="ReelRecs"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>ReelRecs</h4>
              <p>
              Website that displays the most popular movies for the top genres with ratings and allows you to search for any movie with a result of the movie description and a linked movie trailer.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;