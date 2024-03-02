"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { RiCloseLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.header}>
                <div className={styles["logo-wrapper"]}>
                    <div className={styles.logo}>CharterBus</div>
                    <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                        {isOpen ? <RiCloseLine size={34} /> : <RiMenu3Line size={34} />}
                    </div>
                </div>
                <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                    <ul>
                        <li>
                            <Link href="/">
                                Home<span></span><span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                About<span></span><span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Services<span></span><span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Our Bus<span></span><span></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Contact<span></span><span></span>
                            </Link>
                        </li>
                        <li className={styles.register}>
                            <Link href="/">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
