"use client"
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import Link from 'next/link';
import { RiCloseLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import Loader from '../loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/loaderSlide';
import axios from 'axios';
import { toast } from 'sonner';
import { setCurrentUser } from '@/redux/usersSlice';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { currentUser } = useSelector((state: any) => state.users)
    const { loading } = useSelector((state: any) => state.loaders)
    const dispatch = useDispatch()
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    const handleLogout = async () => {
        try {
            dispatch(setLoading(true));
            await axios.post("/api/users/logout");
            toast.success("Logged out successfully");
            dispatch(setCurrentUser(null));
            window.location.reload();
            router.push("/");
        } catch (error: any) {
            console.error("Logout error:", error);
            toast.error(error.response?.data?.message || "Something went wrong");

        } finally {
            dispatch(setLoading(false));
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
                                <Link href="/ourbus" onClick={() => setIsOpen(!isOpen)}>
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
