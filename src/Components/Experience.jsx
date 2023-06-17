import React, { useEffect } from "react";
import { MdWork } from "react-icons/md";
import { FaRust, FaGolang, FaPython, FaJava } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <div
        id="codingSkillsComponent"
        className="mainSkillsComponent experienceShowerMainComponent"
      >
        <h1 className="aboutMeHeader aboutCodingSkills">Experience</h1>
        <div className="experienceShowerSubComponent">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2022 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Blockchain Developer
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ color: "#ffc35" }}
              >
                Codezeros
              </h4>
              <p>
                Developing Smart Contracts, Interacting With Clients, Providing
                Consultancy, R&D For New Projects, Collaborating With Web And
                Mobile Team.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<SiFreelancer />}
            >
              <h3
                style={{ color: "black" }}
                className="vertical-timeline-element-title"
              >
                Freelance
              </h3>
              <p style={{ color: "black" }}>
                Smart Contract Development Based On Client Requirements,
                Consultancy For NFT Launch And Tokonomics.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
