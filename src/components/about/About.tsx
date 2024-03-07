import React from 'react'
import styles from "./About.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { GoThumbsup } from "react-icons/go";

const checkIcon = <FaCircleCheck size={18} className={styles["check-icon"]} />;

const About = () => {

    return (
        <section className="">
            <div className={styles["about-wrapper"]}>
                <div className={styles["left-section"]}>
                    <h2>About Charter Bus</h2>
                    <h1>More Than 25 Years of Providing Bus Charter
                        Service
                    </h1>
                    <p>At Charter Bus, we are dedicated to providing exceptional travel experiences
                        for our valued customers. With a commitment to safety, comfort, and reliability.
                        Our team of experienced professionals ensures that
                        every trip is seamless, enjoyable, and memorable, making us your trusted partner for all your
                        charter bus needs.
                    </p>

                    <div className={styles["list"]}>
                        <ul>
                            <li>{checkIcon} Brilient Client Service</li>
                            <li>{checkIcon} 24/7 Support</li>
                            <li>{checkIcon} Free Consultation</li>
                        </ul>

                        <ul>
                            <li>{checkIcon} User Experience</li>
                            <li>{checkIcon} Quick Tips and Advice</li>
                            <li>{checkIcon} Comfortable Trip</li>
                        </ul>
                    </div>

                    <button>Travel with Us</button>
                </div>
                <div className={styles["right-section"]}>
                    <img src="./about1.jpg" alt="Image" />
                    <span className={styles.img}><img src="./about2.jpg" alt="Image" /></span>

                    <div className={styles.experience}>
                        <span className={styles["ex-icon"]}>
                            <LiaAwardSolid size={73} />
                            <span className={styles["thumb-icon"]}><GoThumbsup size={26} /></span>
                        </span>
                        <div>
                            <h3>25 <span>+</span></h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About