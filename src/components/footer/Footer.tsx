import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles["footer-wrapper"]}>
                    <div className={styles["footer-sec1"]}>
                        <div className={styles.logo}>
                            <Link href="/">
                                CharterBus
                            </Link>
                        </div>

                        <p>
                            Keep away from people who try to belittle your ambitions Small
                            people always do that but the really great Friendly."
                        </p>

                        <div className={styles.social}>
                            <FaFacebookF size={30} color="#114232" className={styles.icon} />
                            <FaTwitter size={30} color="#114232" className={styles.icon} />
                            <FaInstagram size={30} color="#114232" className={styles.icon} />
                            <FaLinkedinIn size={30} color="#114232" className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles["footer-contact"]}>
                        <h2>Contact Info</h2>
                        <p>No 36 Tskatubo Street, Tbilisi Georgia</p>

                        <hr />
                        <p>+12345678905</p>
                        <hr />
                        <p>support@charterbus.com</p>
                    </div>

                    <div className={styles["working-hour"]}>
                        <h1>Business hours</h1>
                        <p>Our support available to help you 24 hours a day, seven days week</p>
                        <span>Monday-Saturday: ------- 8.00-18.00</span>
                        <span>Friday: ---------------- 09:00-21:00</span>
                        <span>Sunday: ---------------- 09:00-20:00</span>
                        <span>Calendar Events: ------- 24-Hour Shift</span>
                    </div>
                </div>
                <hr />

                <div className="flex justify-center items-center pt-8">
                    <p>&copy; {currentYear} All rights reserved. Designed By DevSeyi</p>
                </div>
            </div>
        </section>
    )
}

export default Footer