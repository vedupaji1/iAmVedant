import React, { useEffect } from "react";
import { TbCurrencySolana } from "react-icons/tb";
import { TbBrandGolang } from "react-icons/tb";
import { FaRust, FaPython, FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiRocksdb,
  SiJavascript,
  SiCplusplus,
  SiSolidity,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiEthereum,
} from "react-icons/si";

const CodingSkills = () => {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          document.getElementsByClassName("aboutMeHeader")[0].style.marginTop =
            "5rem";
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );
    observer.observe(document.getElementsByClassName("aboutMeHeader")[0]);

    let observer2 = new IntersectionObserver(
      (entries) => {
        let entry = entries[0];
        if (entry.isIntersecting) {
          document.getElementsByClassName(
            "subSkillsComponent"
          )[0].style.transform = "translate(0)";
          observer2.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    observer2.observe(document.getElementsByClassName("subSkillsComponent")[0]);
  });
  return (
    <>
      <div id="codingSkillsComponent" className="mainSkillsComponent">
        <h1 className="aboutMeHeader aboutCodingSkills">Coding Skills</h1>
        <div className="subSkillsComponent">
          <div
            style={{ color: "black", backgroundColor: "white" }}
            className="skillIcons"
          >
            <FaRust />
          </div>
          <div
            style={{
              color: "#00a3cc",
              backgroundColor: "white",
              fontSize: "5.5rem",
            }}
            className="skillIcons"
          >
            <TbBrandGolang />
          </div>
          <div
            style={{ color: "#F0DB4F", backgroundColor: "#0c111b" }}
            className="skillIcons"
          >
            <SiJavascript />
          </div>
          <div
            style={{ color: "#0c111b", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiSolidity />
          </div>
          <div
            style={{ color: "#0c111b", backgroundColor: "white" }}
            className="skillIcons"
          >
            <FaPython />
          </div>
          <div
            style={{ color: "white", backgroundColor: "#e74c3c" }}
            className="skillIcons"
          >
            <FaJava />
          </div>
          <div
            style={{ color: "#0e87d4", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiCplusplus />
          </div>

          <div
            style={{ color: "#e34c26", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiHtml5 />
          </div>
          <div
            style={{ color: "#264de4", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiCss3 />
          </div>
          <div
            style={{ color: "#00d8ff", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiReact />
          </div>
          <div
            style={{ color: "#68A063", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiNodedotjs />
          </div>
          <div
            style={{ color: "#4DB33D", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiMongodb />
          </div>
          <div
            style={{ color: "#4DB33D", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiRocksdb />
          </div>
          <div
            style={{ color: "#0c111b", backgroundColor: "white" }}
            className="skillIcons"
          >
            <SiEthereum />
          </div>
          <div
            style={{ color: "#0c111b", backgroundColor: "white" }}
            className="skillIcons"
          >
            <TbCurrencySolana />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingSkills;
