import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "../Resume/Resume.js";
import "../Resume/Resume.css"

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "React JS", ratingPercentage: 30 },
    { skill: "React Native", ratingPercentage: 30 },
    { skill: "Express JS", ratingPercentage: 50 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 20 },
    { skill: "Core Java", ratingPercentage: 20 },
    { skill: "HTML", ratingPercentage: 50 },
    { skill: "CSS", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: "Self-Taught: Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase and practice all my learnings at one place.",
      subHeading: "Skills Used: React JS, HTML, CSS, Bootsrap",
    },
    {
        title: "App Development for Australian Psychology Society",
        duration: { fromDate: "2021", toDate: "2021" },
        description:
          "This is a group project involved developing an iOS-Android Compatible One-stop App for the students at RMIT. In this project, I worked with different disciplinaries experts  to prepare a project management proposal. This involved using Microsoft Project software for schedule and network diagram, Microsoft Excel for project budget; and writing up priority matrix, planning out Work Breakdown Structure and change management plan as well as risk evaluation.",
        subHeading:
          "Skills Used: SQL Database, Orange Software (Data Visualisation)",
      },
    {
        title: "SQL Database for a Shop",
        duration: { fromDate: "2020", toDate: "2020" },
        description:
          "As a requirement from the client, I developed a data modelling using Entity Relationship Diagram and Relational Model. Based on this, I designed 3 business SQL queries: (1) triggering script in measuring employees’ performance; (2) inventory management to help client make timely orders; (3) function script in monitoring sales performance.Data Analytics was also performed on the clients’ datasets using Orange software, this involves data cleaning, data sampling and prediction models (e.g. KNN, SVM, Random Forest, Linear Regression). ",
        subHeading:
          "Skills Used: SQL Database, Orange Software (Data Visualisation)",
      },
    {
        title: "Data Analytics on San Franscisco-based home rental website's datasets",
        duration: { fromDate: "2020", toDate: "2020" },
        description:
          "I was required to use both R Studio and Microsoft Excel to perform data analytics on a San Francisco-based home rental website’s datasets. Specifically, regression analysis was performed in order to investigate the correlation of Airbnb aspects (i.e. location, property types, ratings) with its price. Based on the performed quantitative analysis, a few recommendations were provided for investors who are interested in Airbnb investments.",
        subHeading:
          "Technologies Used: Microsoft Excel (Linear Regression Analysis, Multiple Regression Analysi); R Studio",
      },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Royal Melbourne Institute of Technology"}
        subHeading={"Master of Business Information Technology"}
        fromDate={"2019"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"University of Melbourne"}
        subHeading={"Bachelor of Environments, Real Estate Development and Valuation"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Trinity College"}
        subHeading={"Foundation in Commerce, Accounting and Economics"}
        fromDate={"2015"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Reputationaire"}
          subHeading={"Business Analyst Intern"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
           - Currently working as a Business Analyst and also being CEO's assistant.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Contributed to the Minimal Viable product of Reputationaire, in a project where it can assess people's online social activities especially in the tech socials such as GitHub.
          </span>
          <br />
          <span className="resume-description-text">
            - Supported the operation of the Start-up through the completion of adminstrative, market research, marketing task within an agile environment.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develop and improve a more efficient onboarding process and created a strategic plan to improve social media presence of Reputationaire. 
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, I love to teach people what I know simply because I believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's lofi charts is at times the best stress reliever that I can get my hands on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="No internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
