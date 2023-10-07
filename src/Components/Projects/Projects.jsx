import React, { useState, useEffect, useRef } from 'react';
import ProjectImageShower from "./ProjectsImageShower"
import { SiGithub } from 'react-icons/si';

import imgP1D1 from "../../../src/Images/project1/desktopView/img1.JPG";
import imgP1D2 from "../../../src/Images/project1/desktopView/img2.JPG";
import imgP1D3 from "../../../src/Images/project1/desktopView/img3.JPG";
import imgP1M1 from "../../../src/Images/project1/mobileView/img1.jpg";
import imgP1M2 from "../../../src/Images/project1/mobileView/img2.jpg";

import imgP2D1 from "../../../src/Images/project2/desktopView/img1.JPG";
import imgP2D2 from "../../../src/Images/project2/desktopView/img2.JPG";
import imgP2D3 from "../../../src/Images/project2/desktopView/img3.JPG";
import imgP2M1 from "../../../src/Images/project2/mobileView/img1.jpg";
import imgP2M2 from "../../../src/Images/project2/mobileView/img2.jpg";
import imgP2M3 from "../../../src/Images/project2/mobileView/img3.jpg";

import imgP3D1 from "../../../src/Images/project3/desktopView/img1.JPG";
import imgP3D2 from "../../../src/Images/project3/desktopView/img2.JPG";
import imgP3D3 from "../../../src/Images/project3/desktopView/img3.JPG";
import imgP3M1 from "../../../src/Images/project3/mobileView/img1.jpg";
import imgP3M2 from "../../../src/Images/project3/mobileView/img2.jpg";
import imgP3M3 from "../../../src/Images/project3/mobileView/img3.jpg";

import imgP4D1 from "../../../src/Images/project4/desktopView/img1.JPG";
import imgP4D2 from "../../../src/Images/project4/desktopView/img2.JPG";
import imgP4D3 from "../../../src/Images/project4/desktopView/img3.JPG";
import imgP4M1 from "../../../src/Images/project4/mobileView/img1.jpg";
import imgP4M2 from "../../../src/Images/project4/mobileView/img2.jpg";
import imgP4M3 from "../../../src/Images/project4/mobileView/img3.jpg";

import imgP5D1 from "../../../src/Images/project5/desktopView/img1.JPG";
import imgP5D2 from "../../../src/Images/project5/desktopView/img2.JPG";
import imgP5D3 from "../../../src/Images/project5/desktopView/img3.JPG";
import imgP5D4 from "../../../src/Images/project5/desktopView/img4.JPG";
import imgP5M1 from "../../../src/Images/project5/mobileView/img1.jpg";
import imgP5M2 from "../../../src/Images/project5/mobileView/img2.jpg";
import imgP5M3 from "../../../src/Images/project5/mobileView/img3.jpg";
import imgP5M4 from "../../../src/Images/project5/mobileView/img4.jpg";

const Projects = () => {

    const [isShowMore, setShowMore] = useState(false);

    const [isDesktopMode, setIsDesktopMode] = useState([1, 1, 1, 1, 1, 1]);
    let projectImages = useRef([[[imgP1M1, imgP1M2], [imgP1D1, imgP1D2, imgP1D3], "https://varttoday.herokuapp.com"],
    [[imgP2M1, imgP2M2, imgP2M3], [imgP2D1, imgP2D2, imgP2D3], "https://varteth.herokuapp.com"],
    [[imgP3M1, imgP3M2, imgP3M3], [imgP3D1, imgP3D2, imgP3D3], "https://varttextlab.herokuapp.com"],
    [[imgP4M1, imgP4M2, imgP4M3], [imgP4D1, imgP4D2, imgP4D3], "https://vartmywork.herokuapp.com"],
    [[imgP5M1, imgP5M2, imgP5M3, imgP5M4], [imgP5D1, imgP5D2, imgP5D3, imgP5D4], "https://vartvote.herokuapp.com"]]);

    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            let entry = entries[0];
            if (entry.isIntersecting) {
                document.getElementsByClassName("aboutMeHeader")[1].style.marginTop = "5rem";
                observer.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        observer.observe(document.getElementsByClassName("aboutMeHeader")[1]);

        let observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const projectShowerIns = entry.target;
                    projectShowerIns.style.transform = "translate(0rem)";
                    projectShowerIns.style.opacity = "1";
                    observer.disconnect();
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        const projectsShower = document.querySelectorAll('.subProjectComponentDiv');
        projectsShower.forEach(proData => {
            observer1.observe(proData);
        });
    })

    return (
        <>
            <div id="projectsComponent" className="mainProjectComponentDiv">
                <h1 className="aboutMeHeader">Personal Projects</h1>
                <div className="subProjectComponentDiv">
                    <ProjectImageShower projectsImageData={projectImages.current[0][isDesktopMode[0]]} projectLink={projectImages.current[0][2]} isDesktopMode={isDesktopMode} setIsDesktopMode={setIsDesktopMode} componentKey={0} />
                    <ProjectImageShower projectsImageData={projectImages.current[1][isDesktopMode[1]]} projectLink={projectImages.current[1][2]} isDesktopMode={isDesktopMode} setIsDesktopMode={setIsDesktopMode} componentKey={1} />
                    <ProjectImageShower projectsImageData={projectImages.current[2][isDesktopMode[2]]} projectLink={projectImages.current[2][2]} isDesktopMode={isDesktopMode} setIsDesktopMode={setIsDesktopMode} componentKey={2} />
                </div>
                <div className="subProjectComponentDiv">
                    <ProjectImageShower projectsImageData={projectImages.current[3][isDesktopMode[3]]} projectLink={projectImages.current[3][2]} isDesktopMode={isDesktopMode} setIsDesktopMode={setIsDesktopMode} componentKey={3} />
                    <ProjectImageShower projectsImageData={projectImages.current[4][isDesktopMode[4]]} projectLink={projectImages.current[4][2]} isDesktopMode={isDesktopMode} setIsDesktopMode={setIsDesktopMode} componentKey={4} />
                    <div className="forMoreContainer" onMouseOver={() => {
                        setShowMore(true)
                        document.getElementsByClassName("forMoreContainer")[0].classList.add("finalAnimation")
                    }} onMouseLeave={() => {
                        setShowMore(false)
                        document.getElementsByClassName("forMoreContainer")[0].classList.remove("finalAnimation")
                    }} >
                        {
                            isShowMore === false ? <div className="subMessage">For More</div> :
                                <a style={{ color: "white", textDecoration: "none" }} href="https://github.com/vedupaji1" target="_blank">
                                    <div className="subMessage">
                                        Visit <SiGithub style={{ color: "white", marginLeft: "1rem" }} />
                                    </div>
                                </a>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
