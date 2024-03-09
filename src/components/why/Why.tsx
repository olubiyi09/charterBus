import React from 'react'
import styles from "./Why.module.css"
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { PiHandshakeLight } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";

const Why = () => {
    return (
        <section>
            <div className={styles.wrapper}>
                <div className={styles["left-image"]}>
                    <img src="./why.jpg" alt="image" />
                </div>
                <div className={styles["why-content"]}>
                    <div>
                        <h2>Why Choose Us</h2>
                        <h1>We Are Experts In Bus Charter Service Company Since 1997</h1>
                        <p>
                            Choose ABC Charter Bus Services for a hassle-free, comfortable,
                            and reliable journey. With our top-of-the-line vehicles and experienced drivers, we guarantee safety and peace of mind. Whether it's for weddings,
                            corporate events, or group outings, trust us for unmatched convenience and travel luxury.
                        </p>
                    </div>

                    <div className={styles.info}>
                        <div>
                            <span className='flex items-center mb-2'>
                                <BsBusFront size={60} color="#FCDC2A" />
                                <span className="ml-3 pt-4">
                                    <h3>25 +</h3>
                                    <p>Buses Ready</p>
                                </span>
                            </span>


                            <span className='flex items-center'>
                                <PiHandshakeLight size={60} color="#FCDC2A" />
                                <span className="ml-3 pt-4">
                                    <h3>2,530 +</h3>
                                    <p>Satisfied Customer</p>
                                </span>
                            </span>
                        </div>


                        <div>
                            <span className='flex items-center mb-2'>
                                <MdOutlineThumbUpAlt size={60} color="#FCDC2A" />
                                <span className="ml-3 pt-4">
                                    <h3>2917 +</h3>
                                    <p>Booking Done</p>
                                </span>
                            </span>


                            <span className='flex items-center'>
                                <SlPeople size={60} color="#FCDC2A" />
                                <span className="ml-3 pt-4">
                                    <h3>63 +</h3>
                                    <p>Team</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why