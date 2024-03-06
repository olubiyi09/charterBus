import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div>
                <div className={styles["hero-content"]}>
                    <h1>We Are Best <span className={styles["h1-span"]}>Charter Bus</span> Service In The World</h1>
                    <p>
                        Experience the Ultimate Journey of Comfort, Luxury, and Unmatched Convenience with Our Premier Charter Bus Services!
                        Discover Unforgettable Travel Experiences Tailored Just for You!
                    </p>

                    <button className={styles["btn-left"]}>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default Hero