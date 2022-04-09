import React, { useEffect } from 'react'
import developerImg from "../../src/Images/developerImg.jpg"
import blockchainImg from "../../src/Images/blockchainImg.jpg"

const AboutMe = () => {

    useEffect(() => {
        let observer2 = new IntersectionObserver((entries) => {
            let entry = entries[0];
            if (entry.isIntersecting) {
                document.getElementsByClassName("aboutMeDetails")[0].style.transform = "translate(0)";
                document.getElementsByClassName("aboutMeDetails")[0].style.opacity = "1";
                observer2.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        observer2.observe(document.getElementsByClassName("aboutMeDetails")[0]);

        let observer3 = new IntersectionObserver((entries) => {
            let entry1 = entries[0];
            if (entry1.isIntersecting) {
                document.getElementById("aboutSubDetails1").style.transform = "translate(0)";
                document.getElementById("aboutSubDetails1").style.opacity = "1";
                observer3.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        observer3.observe(document.querySelectorAll(".subAboutMeDetails")[0]);

        let observer4 = new IntersectionObserver((entries) => {
            let entry1 = entries[0];
            if (entry1.isIntersecting) {
                if (window.innerWidth <= 600) {
                    document.getElementById("aboutSubDetails2").style.transform = "translate(3vw)";
                } else {
                    document.getElementById("aboutSubDetails2").style.transform = "translate(7vw)";
                }
                document.getElementById("aboutSubDetails2").style.opacity = "1";
                observer4.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        observer4.observe(document.querySelectorAll(".subAboutMeDetails")[1]);
    })

    return (
        <>
            <div id="aboutMeComponent" className="mainAboutMeComponent">
                {/* <h1 className="aboutMeHeader">About Me</h1> */}
                <div className="aboutMeDetails">
                    <div className="aboutMeDetailsHeader">
                        <svg height="18" width="18"><circle cx="8" cy="10" r="8" fill="red" /></svg>
                        <svg style={{ marginLeft: "1rem" }} height="18" width="18"><circle cx="8" cy="10" r="8" fill="rgb(253, 203, 88)" /></svg>
                        <svg style={{ marginLeft: "1rem" }} height="18" width="18"><circle cx="8" cy="10" r="8" fill="rgb(120, 177, 89)" /></svg>

                        <h1 id="aboutMeDetailsHeaderSub">About Me</h1>
                    </div>
                    <div className="aboutMeDetailsData">
                        <div className="developerDataBackground">
                            <img src={blockchainImg} alt="" />
                        </div>
                        <div className="developerData">
                            <div className="developerImage">
                                <img src={developerImg} alt="developerImg" />
                            </div>
                            <div className="aboutMeDetailsData aboutMeDetailsDataAlternative">
                                <div id="aboutSubDetails1" className="subAboutMeDetails">
                                    <div className="aboutMeDetailsHeader">
                                        <svg height="18" width="18"><circle cx="8" cy="10" r="8" fill="red" /></svg>
                                        <svg style={{ marginLeft: "1rem" }} height="18" width="18"><circle cx="8" cy="10" r="8" fill="rgb(253, 203, 88)" /></svg>
                                        <svg style={{ marginLeft: "1rem" }} height="18" width="18"><circle cx="8" cy="10" r="8" fill="rgb(120, 177, 89)" /></svg>
                                    </div>
                                    <div className="aboutMeInfo aboutMePersonal">
                                        <div className="aboutMePersonalInfo">
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">NAME:</p> <p>Ram</p>
                                            </div>
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">AGE:</p> <p>18</p>
                                            </div>
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">RESIDENCE:</p> <p>India</p>
                                            </div>
                                        </div>

                                        <div className="aboutMePersonalInfo">
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">ADDRESS:</p> <p>Ahmedabad, Gujrat</p>
                                            </div>
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">Phone:</p> <p>9081249082</p>
                                            </div>
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">Email:</p> <p>ram@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="aboutSubDetails2" className="subAboutMeDetails">
                                    <div className="aboutMeDetailsHeader">
                                        <svg height="18" width="18"><circle cx="8" cy="10" r="8" fill="red" /></svg>
                                        <svg style={{ marginLeft: "1rem" }} height="18" width="18"><circle cx="8" cy="10" r="8" fill="rgb(253, 203, 88)" /></svg>
                                        <svg style={{ marginLeft: "1rem" }} height="18" width="18"><circle cx="8" cy="10" r="8" fill="rgb(120, 177, 89)" /></svg>
                                    </div>
                                    <div className="aboutMeInfo">
                                        <h1 style={{ paddingBottom: "2rem", fontSize: "'Inconsolata', monospace" }}>Hi,</h1>
                                        👋 I Am A Full Stack Web Developer And I Also Have Good Knowledge Of Blockchain Development. <br />
                                        According Me Design Of Any Application Should Simple, Attractive And Classic,
                                        Because This Type Of Designs Create Positive Impact On Users Mind And Because Of This
                                        I Likes To Create Attractive Designs And I Enjoys In Backend Development.
                                        <br />
                                        I Uses MERN Stack Web Development And For Blockchain Development I Uses Solidity, Hardhat And EtherJs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMe