import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
    {
        label: "Name",
        value: "Ashish Kumar Gupta",
    },
    
    {
        label: "Address",
        value: "India",
    },
    {
        label: "Email",
        value: "ashishkrgupta.7890@gmail.com",
    },
    {
        label: "Contact No",
        value: "7439469454",
    },
];

const jobSummary =
    "Hi, I'm Ashish, a passionate MERN (MongoDB, Express.js, React, Node.js) stack developer dedicated to crafting seamless and scalable web applications. With a strong foundation in full-stack development, I specialize in building robust backend systems with Node.js and Express, while creating dynamic and intuitive user interfaces using React. My expertise in MongoDB ensures efficient data management for high-performance applications";

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">
                            Personal Information
                        </h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};
export default About;
