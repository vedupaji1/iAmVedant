import React from 'react';
import { FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const ProjectsImageShower = ({ projectsImageData, projectLink, isDesktopMode, setIsDesktopMode, componentKey }) => {

    const changeIsDesktopMode = (i) => {
        let tempData = isDesktopMode;
        tempData[componentKey] = i;

        setIsDesktopMode([...tempData]);
        // let iconNum = Math.pow(2, componentKey + 1) - 1;
        let subImageContainerNum = parseInt(componentKey / 3) + 2;
        if (i === 1 && document.getElementsByClassName("desktopIcon")[componentKey].classList.contains("stableStyleOnIcon") === false) {
            document.getElementsByClassName("desktopIcon")[componentKey].classList.replace("activeHoverOnIcon", "stableStyleOnIcon");
            document.getElementsByClassName("mobileIcon")[componentKey].classList.replace("stableStyleOnIcon", "activeHoverOnIcon");
            document.getElementsByClassName("projectDataDiv")[componentKey].classList.replace("mobileView", "desktopView");
            document.getElementsByClassName("projectImagesContainer")[componentKey].classList.replace("containerForMobileView", "containerForDesktopView");
            let imageNodes = document.querySelectorAll(`#projectsComponent > div:nth-child(${subImageContainerNum}) > div:nth-child(${componentKey % 3 + 1}) > div.projectImagesContainer > div > div.swiper-wrapper > div.swiper-slide > img`)
            for (let i = 0; i < imageNodes.length; i++) {
                imageNodes[i].classList.replace("projectImageMobile", "projectImageDesktop");
            }
        } else if (i === 0 && document.getElementsByClassName("mobileIcon")[componentKey].classList.contains("stableStyleOnIcon") === false) {
            document.getElementsByClassName("mobileIcon")[componentKey].classList.replace("activeHoverOnIcon", "stableStyleOnIcon");
            document.getElementsByClassName("desktopIcon")[componentKey].classList.replace("stableStyleOnIcon", "activeHoverOnIcon");
            document.getElementsByClassName("projectDataDiv")[componentKey].classList.replace("desktopView", "mobileView");
            document.getElementsByClassName("projectImagesContainer")[componentKey].classList.replace("containerForDesktopView", "containerForMobileView");
            let imageNodes = document.querySelectorAll(`#projectsComponent > div:nth-child(${subImageContainerNum}) > div:nth-child(${componentKey % 3 + 1}) > div.projectImagesContainer > div > div.swiper-wrapper > div.swiper-slide > img`)
            for (let i = 0; i < imageNodes.length; i++) {
                imageNodes[i].classList.replace("projectImageDesktop", "projectImageMobile");
            }
        }
    }
    return (
        <>
            <div className="projectDataDiv desktopView">
                <div className="projectImagesContainer containerForDesktopView">
                    <Swiper
                        loop={true}
                        modules={[Keyboard, Pagination]}
                        grabCursor={true}
                        keyboard={{ enabled: true }}
                        pagination={{ clickable: true }}
                        className='projectImageSlider'
                    >
                        {
                            projectsImageData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img className="imageContainer projectImageDesktop" src={item} alt="product images" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="showIconsAndViewOption">
                    <div className="changeProjectView">
                        <FaDesktop onClick={() => {
                            changeIsDesktopMode(1)
                        }} className="desktopIcon stableStyleOnIcon" />
                        <FaMobileAlt onClick={() => {
                            changeIsDesktopMode(0)
                        }} className="mobileIcon activeHoverOnIcon" />

                    </div>
                    <div className="viewCodeShowerDiv"><a href={projectLink}>View</a></div>
                </div>
            </div>
        </>
    )
}

export default ProjectsImageShower;