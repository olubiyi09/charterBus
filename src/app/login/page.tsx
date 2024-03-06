"use client"
import React, { useState } from 'react';
import "@/commonClass/style.css";
import { toast } from 'sonner';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from 'react-icons/ri';
import Link from 'next/link';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (email === "" || password === "") {
            toast.error("All fields are required");
            return;
        }

        if (password.length < 7) {
            toast.error("Password character must be up to 7");
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
    };

    return (
        <div>
            <div className="form">
                <div className='form-wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>

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

                        <button type="submit">Login</button>
                        <p className="p-2">Don't have an Account? <Link href="/register"><span className="link-span">Register</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
