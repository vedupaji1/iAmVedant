import React, { useRef } from 'react';
import { Link } from 'react-scroll'

const Header = () => {
    let prevPageOffset = useRef(0);

    const showMenu = () => {
        if (document.getElementsByClassName("subNavDiv")[0].clientHeight > 77) {
            document.getElementsByClassName("subNavDiv")[0].style.height = "7.7rem";
            document.getElementById("menuIcon").classList.replace("fa-times", "fa-bars");
        } else {
            document.getElementsByClassName("subNavDiv")[0].style.height = document.getElementsByClassName("subNavDiv")[0].scrollHeight / 10 + "rem";
            document.getElementById("menuIcon").classList.replace("fa-bars", "fa-times");
        }
    }
    window.addEventListener("scroll", () => {  
        let curPageOffset = window.pageYOffset;
        if (curPageOffset > prevPageOffset.current) {
            document.getElementsByClassName("subNavDiv")[0].style.transform = "translate(-100vw)";
        } else {
            document.getElementsByClassName("subNavDiv")[0].style.transform = "translate(0)";
        }
        prevPageOffset.current = curPageOffset;
    })
    return (
        <>
            <div className="mainNavDiv">
                <div className="subNavDiv">
                    <div onClick={() => {
                        showMenu();
                    }} className="mainMenuHeader"><i id="menuIcon" className="fa fa-bars"></i></div>

                    <Link activeClass="activeComponent" to="homeComponent" spy={true} smooth={true} offset={0} duration={500} delay={100}><div className="menuLists">Home</div></Link>
                    <Link activeClass="activeComponent" to="aboutMeComponent" spy={true} smooth={true} offset={0} duration={500} delay={100}> <div className="menuLists">About</div></Link>
                    <Link activeClass="activeComponent" to="codingSkillsComponent" spy={true} smooth={true} offset={0} duration={500} delay={100}><div className="menuLists">Skills</div></Link>
                    <Link activeClass="activeComponent" to="projectsComponent" spy={true} smooth={true} offset={0} duration={500} delay={100}><div className="menuLists">Projects</div></Link>
                    <Link activeClass="activeComponent" to="contactMeComponent" spy={true} smooth={true} offset={0} duration={500} delay={100}><div className="menuLists">Contact</div></Link>
                </div>
            </div>
        </>
    )
}

//https://www.teahub.io/photos/full/344-3443648_technology-background-blockchain.jpg
// background: url(https://www.teahub.io/photos/full/344-3443648_technology-background-blockchain.jpg) bottom center no-repeat;
// background-position: center;
export default Header;
