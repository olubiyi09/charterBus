"use client"
import React, { useEffect, useState } from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { RiCloseLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Loader from '../loader/Loader';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { currentUser } = useSelector((state: any) => state.users)
    const { loading } = useSelector((state: any) => state.loaders)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    const handleLogout = async () => {
        try {
            // Add your logout logic here, such as clearing cookies or tokens
            // After successful logout, update the state
        } catch (error) {
            console.error("Logout error:", error);
        }
    };



    return (
        <>
            {loading && <Loader />}
            <nav className={styles.nav}>
                <div className={styles.header}>
                    <div className={styles["logo-wrapper"]}>
                        <div className={styles.logo}>
                            <Link href="/">
                                CharterBus
                            </Link>
                        </div>
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
                            {!loading && (
                                currentUser !== null ? (
                                    <li className={styles.register}>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                ) : (
                                    <li className={styles.register}>
                                        <Link href="/register" onClick={() => setIsOpen(!isOpen)}>
                                            Register
                                        </Link>
                                    </li>
                                )
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
