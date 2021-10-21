import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService"
import "./Profile.css"

export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100019503108964">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/veiyie/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/vei-yie-8b3286137/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/bunnyvy">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I am <span className="highlighted-text">Vei Yie</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Lifelong Learner",
                    3000,
                    "Self-Taught Developer",
                    3000,
                    "Learning MERN Stack",
                    3000,
                    "Learning UX/UI Prototyping Figma",
                    3000,
                    "Master in Business IT Graduate",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Stand for living a life with purpose, adapted from the Japanese
                philosophy of Ikigai. Constantly learning in the realm of
                technology motivates me in getting up every morning and brings
                fulfilment in my life.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" 
            onClick={() => ScrollService.scrollHandler.scrollToHaveAChat()}
            > Have a Chat </button>
            
          </div>
        </div>
        <div className="profile-picture">
          <div class="fish">
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
          </div>
          <div class="fish">
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
            <div class="koiCoil"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
