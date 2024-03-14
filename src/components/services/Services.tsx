import React from 'react'
import styles from "./Services.module.css"
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import { SlScreenSmartphone } from "react-icons/sl";
import { LuHelpCircle } from "react-icons/lu";

const Services = () => {
    return (
        <section>
            <div className={styles["services-wrapper"]}>
                <div className={styles["service-header"]}>
                    <h2>Our Services</h2>
                    <h1>We Provide Best Services For You</h1>
                    <p>
                        Welcome to Charter Bus Services, your premier choice for reliable and
                        luxurious transportation. With a commitment to exceptional service
                        and safety.
                    </p>
                </div>

                <div className={styles["service-list"]}>
                    <div className={styles["service-item"]}>
                        <AiOutlineSafetyCertificate size={40} color="#114232" className={styles["s-icon"]} />
                        <h3>Safety Guarantee</h3>
                        <p>
                            At Charter Bus Services, safety is our top priority. Our expert drivers
                            and meticulously maintained fleet ensure a worry-free travel experience.
                        </p>
                    </div>

                    <div className={styles["service-item"]}>
                        <MdOutlineDiscount size={40} color="#114232" className={styles["s-icon"]} />
                        <h3>Discount & Promo</h3>
                        <p>
                            Enjoy exclusive discounts and exciting promotions with Charter Bus
                            Services. Save on your next trip and experience luxury travel for less!
                        </p>
                    </div>

                    <div className={styles["service-item"]}>
                        <FaPeopleLine size={40} color="#114232" className={styles["s-icon"]} />
                        <h3>Professional Staff</h3>
                        <p>
                            Our professional staff at ABC Charter Bus Services is dedicated to ensuring
                            your journey is seamless and enjoyable. Experience excellence with us.
                        </p>
                    </div>

                    <div className={styles["service-item"]}>
                        <GrSchedules size={40} color="#114232" className={styles["s-icon"]} />
                        <h3>Schedule On Time</h3>
                        <p>
                            At Charter Bus Services, punctuality is our promise. Count on us for on-time
                            departures and arrivals, ensuring a smooth and efficient trip.
                        </p>
                    </div>

                    <div className={styles["service-item"]}>
                        <SlScreenSmartphone size={40} color="#114232" className={styles["s-icon"]} />
                        <h3>Online Booking</h3>
                        <p>
                            Convenience at your fingertips! Book your next adventure with ease through our user-friendly
                            online booking platform at Charter Bus Services.
                        </p>
                    </div>

                    <div className={styles["service-item"]}>
                        <LuHelpCircle size={40} color="#114232" className={styles["s-icon"]} />
                        <h3>24/7 Support</h3>
                        <p>
                            Have peace of mind knowing our dedicated team is available 24/7 for any assistance you need during
                            your journey with ABC Charter Bus Services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services