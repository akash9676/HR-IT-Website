"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [headerActive, setHeaderActive] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setHeaderActive(true);
        } else {
            setHeaderActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full bg-white py-5 border-b z-10 transition-shadow fixed ${
                headerActive ? "shadow-lg" : ""
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-32 relative">
                <a
                    href="index.html"
                    className="text-2xl font-bold font-league-spartan"
                >
                    HR-IT Solutions
                </a>

                <button
                    className="text-4xl focus:outline-none lg:hidden z-30"
                    onClick={toggleNavbar}
                    aria-label="Toggle menu"
                >
                    {navbarOpen ? (
                        <X className="text-black " />
                    ) : (
                        <Menu className="text-black" />
                    )}
                </button>

                <nav
                    className={`fixed top-0 left-0 w-full bg-white transition-transform duration-300 transform ${
                        navbarOpen ? "translate-y-0" : "-translate-y-full"
                    } lg:static lg:w-auto lg:transform-none lg:transition-none z-20`}
                >
                    <ul className="flex flex-col justify-center items-center lg:flex-row lg:space-x-6 p-4 lg:p-0 mt-16 lg:mt-0">
                        <li>
                            <a
                                href="#"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                Services
                            </a>
                        </li>
                        {/* <li>
                            <a
                                href="projects.html"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                Projects
                            </a>
                        </li> */}
                        <li>
                            <a
                                href="#"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 lg:py-1 bg-gradient-to-l from-persian-rose to-safety-orange text-white font-bold px-6 rounded transition duration-300 "
                                onClick={toggleNavbar}
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
