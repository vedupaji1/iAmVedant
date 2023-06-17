import React, { useEffect } from 'react'
import developerImg from "../../src/Images/developerImg.svg"
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
                                                <p className="detailHeading">NAME:</p> <p>Panchal Vedant</p>
                                            </div>
                                            <div className="subPersonalInfo">
                                                <p className="detailHeading">AGE:</p> <p>19</p>
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
                                            <div id="emailIdShower" className="subPersonalInfo">
                                                <p className="detailHeading">Email:</p> <p>vedant.ether@gmail.com</p>
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
                                         &nbsp;👋 I Am A Blockchain Developer And Exploring Web3 Technology. <br />                               
                                            👉 I Enjoys In Blockchain Development And I Likes To Create Robust Smart Contracts For EVM Based Chains, NEAR And Solana Blockchain. <br />   
                                            👉 I Have Good Hands On Blockchain Development, Dapp Development, Cryptographic Solutions And Protocols. <br />   
                                            👉 Skilled ReactJs Developer And Able To Create Robust Backend Using NodeJs. <br />   
                                            👉 Always Ready To Learn Useful Things To Build Useful Things. <br />                                                              
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