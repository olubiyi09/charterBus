import React from 'react'
import styles from "./Team.module.css"

const Team = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                <h1>Meet Our Experts</h1>
                <div className={styles.team}>
                    <span className={styles.member}>
                        <img src="./ss.jpeg" alt="Seyi" />
                        <h3>Okediya Oluwaseyi</h3>
                        <p>Agency Owner</p>
                    </span>
                    <span className={styles.member}>
                        <img src="./e.jpeg" alt="Emma" />
                        <h3>Olusanya Emmanuel</h3>
                        <p>Agency Owner</p>
                    </span>
                    <span className={styles.member}>
                        <img src="./p.jpeg" alt="Peter" />
                        <h3>Ogundare Peter</h3>
                        <p>Agency Owner</p>
                    </span>
                    <span className={styles.member}></span>
                </div>
            </div>
        </section>
    )
}

export default Team