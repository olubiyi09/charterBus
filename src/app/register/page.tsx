"use client"
import React, { useState } from 'react';
import "@/commonClass/style.css";
import { toast } from 'sonner';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from 'react-icons/ri';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setLoading } from '@/redux/loaderSlide';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [cpassword, setcpassword] = useState("")

    const { username, email, password } = formData;
    const router = useRouter();
    const dispatch = useDispatch()

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleCpChange = (e: any) => {
        setcpassword(e.target.value)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (username === "" || email === "" || password === "" || cpassword === "") {
            toast.error("All fields are required");
            return;
        }

        if (password.length < 7) {
            toast.error("Password character must be up to 7");
            return;
        }

        if (password !== cpassword) {
            toast.error("Passwords do not match");
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format");
            return;
        }

        // Here you can proceed with your form submission
        console.log("Form submitted:", formData);

        try {
            dispatch(setLoading(true))
            const response = await axios.post("/api/users/register", formData);
            toast.success(response.data.message)
            router.push("/login")
            setFormData({
                username: '',
                email: '',
                password: '',
            });
        } catch (error: any) {
            toast.error(error.response.data.message || "Something went wrong")
        } finally {
            dispatch(setLoading(false))
        }


    };

    return (
        <div>
            <div className="form">
                <div className='form-wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>

                        <div className='input-wrapper'>
                            <input
                                type="text"
                                id='username'
                                name='username'
                                placeholder='Username'
                                value={username}
                                onChange={handleChange}
                            />
                            <FaRegUser size={16} className="icon" />
                        </div>


                        <div className='input-wrapper'>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='Email'
                                value={email}
                                onChange={handleChange}
                            />
                            <MdOutlineEmail size={18} className="icon" />
                        </div>


                        <div className='input-wrapper'>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                placeholder='Password'
                                value={password}
                                onChange={handleChange}
                            />
                            <RiLockPasswordLine size={18} className="icon" />
                        </div>

                        <div className='input-wrapper'>
                            <input
                                type="password"
                                id='cpassword'
                                name='cpassword'
                                placeholder='Confirm Password'
                                value={cpassword}
                                onChange={handleCpChange}
                            />
                            <RiLockPasswordLine size={18} className="icon" />
                        </div>

                        <button type="submit">Submit</button>
                        <p className="p-2">Already have an Account? <Link href="/login"><span className="link-span">Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
