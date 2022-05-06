import React, { useEffect, useState } from 'react'
import { SiGithub, SiLinkedin, SiInstagram, SiTwitter } from 'react-icons/si';
import Loading from "./Loading";
const ContactMe = () => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            let entry = entries[0];
            if (entry.isIntersecting) {
                document.getElementsByClassName("aboutMeHeader")[2].style.marginTop = "5rem";
                observer.disconnect();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        observer.observe(document.getElementsByClassName("aboutMeHeader")[2]);
    })

    const sendMessage = async () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (document.getElementsByClassName("userInputTaker")[0].value.trim() === "" ||
            document.getElementsByClassName("userInputTaker")[1].value.trim() === "" ||
            document.getElementsByClassName("userInputTaker")[2].value.trim() === "" ||
            document.getElementById("userMessageTaker").value.trim() === ""
        ) {
            document.getElementsByClassName("contactMeHeader")[0].innerText = "Empty Fields";
            document.getElementsByClassName("contactMeHeader")[0].style.color = "rgb(255 84 84)";
        } else {
            if (document.getElementsByClassName("userInputTaker")[1].value.trim().match(validRegex)) {
                alert('Message Is Sending');
                setIsLoading(true);
                let mailData = {
                    senderName: document.getElementsByClassName("userInputTaker")[0].value.trim(),
                    senderMailId: document.getElementsByClassName("userInputTaker")[1].value.trim(),
                    mailSubject: document.getElementsByClassName("userInputTaker")[2].value.trim(),
                    realMessage: document.getElementById("userMessageTaker").value
                }
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(mailData)
                };
                let sendMessage = await fetch('/sendMail', requestOptions)
                let data = await sendMessage.json()
                setIsLoading(false);
                console.log(data)
                if (data.isDone === true) {
                    document.getElementsByClassName("contactMeHeader")[0].innerText = "Message Sent";
                    document.getElementsByClassName("contactMeHeader")[0].style.color = "#9cff9c";
                    window.location.reload();
                } else {
                    document.getElementsByClassName("contactMeHeader")[0].innerText = data.message;
                    document.getElementsByClassName("contactMeHeader")[0].style.color = "rgb(255 84 84)";
                }
            } else {
                document.getElementsByClassName("contactMeHeader")[0].innerText = "Invalid Email Address";
                document.getElementsByClassName("contactMeHeader")[0].style.color = "rgb(255 84 84)";
            }
        }
    }

    const changeTextAreHeight = () => {
        document.getElementById("userMessageTaker").style.height = "auto";
        document.getElementById("userMessageTaker").style.height = document.getElementById("userMessageTaker").scrollHeight / 10 + "rem";
    }
    return (
        <>
            <div id="contactMeComponent" className="mainContactMeDiv">
                <h1 className="aboutMeHeader aboutCodingSkills">Contact Me</h1>
                <div className="subContactMeDiv">
                    <h1 className="contactMeHeader">Let's Talk</h1>
                    <input type="text" placeholder="Your Name" name="usernameInp" id="usernameInp" className="userInputTaker" />
                    <input type="email" placeholder="Your Email ID" name="emailIDInp" id="emailIDInp" className="userInputTaker" />
                    <input type="text" placeholder="Subject" name="subjectInp" id="subjectInp" className="userInputTaker" />
                    <textarea placeholder="Message" onChange={() => {
                        // eslint-disable-next-line no-unused-expressions
                        document.getElementById("userMessageTaker").scrollHeight > 120 ?
                            changeTextAreHeight() : null
                    }} name="userMessageTaker" id="userMessageTaker"></textarea>
                    <button className="imageUploadSubmit" onClick={() => sendMessage()}>Submit</button>
                </div>

                <footer>
                    <div className="footerMainDiv">
                        <a href="https://github.com/vedupaji1" target="_blank">
                            <div style={{ backgroundColor: "black" }} className="socialMediaIconShower"><SiGithub style={{ color: "white" }} /></div>
                        </a>
                        <a href="https://www.linkedin.com/in/panchalvedant" target="_blank">
                            <div style={{ backgroundColor: "#4267B2" }} className="socialMediaIconShower"><SiLinkedin style={{ color: "white" }} /></div>
                        </a>
                        <a href="https://twitter.com/vartcodes" target="_blank">
                            <div style={{ backgroundColor: "#1DA1F2" }} className="socialMediaIconShower"><SiTwitter style={{ color: "rgb(255, 255, 255)" }} /></div>
                        </a>
                        <a href="https://www.instagram.com/iamvedant1/" target="_blank">
                            <div style={{ backgroundColor: "#cd486b" }} className="socialMediaIconShower"><SiInstagram style={{ color: "rgb(255, 255, 255)" }} /></div>
                        </a>
                    </div >
                    <div className="siteRightsDetails">

                        By, Vedant
                    </div>
                </footer >
            </div >
            {
                isLoading === true ? <Loading /> : <></>
            }
        </>
    )
}

export default ContactMe