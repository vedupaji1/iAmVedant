import React, { useEffect, useRef } from 'react';

const Dashboard = () => {
    let isShowTypingText = useRef(false);

    const sleepForTime = (time) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res();
            }, time)
        })
    }

    const showTypingText = async () => {
        if (isShowTypingText.current !== false) {
            let arr = ["Full Stack Developer", "Blockchain Developer"];
            let curInd = 0;
            let texDiv = document.getElementsByClassName("statusText")[0];
            await sleepForTime(3000);
            while (isShowTypingText.current !== false) {
                for (let i = 1; i <= arr[curInd].length; i++) {
                    if (isShowTypingText.current === false) {
                        break;
                    }
                    texDiv.innerText = arr[curInd].slice(0, i);
                    await sleepForTime(100);
                }
                if (isShowTypingText.current === false) {
                    break;
                }
                await sleepForTime(2000);
                for (let i = arr[curInd].length - 1; i >= 0; i--) {
                    if (isShowTypingText.current === false) {
                        break;
                    }
                    texDiv.innerText = arr[curInd].slice(0, i);
                    await sleepForTime(50);
                }
                if (isShowTypingText.current === false) {
                    break;
                }
                await sleepForTime(500);
                curInd++;
                curInd %= 2;
            }
        }
    }

    useEffect(() => {
        // When 'statusText' Class Div Will Come On Screen Or When Actually That Will Appear We Will Catch That And Perform Specific Operation For More Info Visit "https://medium.com/@ryanfinni/the-intersection-observer-api-practical-examples-7844dfa429e9".
        function callbackFunction(entries) {
            let entry = entries[0];
            if (entry.isIntersecting) {
                console.log("Start")
                isShowTypingText.current = true;
                showTypingText();
            } else {
                document.getElementsByClassName("statusText")[0].innerText = "";
                console.log("Stop")
                isShowTypingText.current = false;
            }
        }
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        let observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(document.getElementsByClassName("statusText")[0]);
    })

    return (
        <>
            <div id="homeComponent" className="dashboardMainDiv">
                <div className="mainTechImageCube" >
                    <div className="techImagesForCube" id="techImage1">
                        <img src="https://www.pngkit.com/png/detail/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg.png" alt="" />
                    </div>
                    <div className="techImagesForCube" id="techImage2">
                        <img src="https://reactjs.org/logo-og.png" alt="" />
                    </div>
                    <div className="techImagesForCube" id="techImage3">
                        <img src="https://icon-library.com/images/node-js-icon/node-js-icon-15.jpg" alt="" />
                    </div>
                    <div className="techImagesForCube" id="techImage4">
                        <img src="https://pbs.twimg.com/media/E0KH3AOX0AQPjKa.png" alt="" />
                    </div>
                    <div className="techImagesForCube" id="techImage5">
                        <img src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg" alt="" />
                    </div>
                    <div className="techImagesForCube" id="techImage6">
                        <img src="https://docs.moonbeam.network/images/index-pages/builders/build/eth-api/libraries/ethersjs.png" alt="" />
                    </div>

                </div>
                <div className="developerDetails">
                    <div className="developerName">
                        I Am <span style={{ color: "#61dafb" }}>Ram</span>
                    </div>
                    <div style={{ color: "rgb(151 153 209)" }} className="statusText"></div>
                </div>

            </div>
        </>
    )
}

export default Dashboard;
