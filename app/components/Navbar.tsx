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
                <div className="flex flex-row gap-2">
                    <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                    >
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <a
                        href="index.html"
                        className="text-2xl font-bold font-league-spartan"
                    >
                        HR-IT Solutions
                    </a>
                </div>

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
                                href="#home"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#service"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                About Us
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
                                href="#about"
                                className="block py-2 lg:py-0 text-eerie-black"
                                onClick={toggleNavbar}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            {/* <a
                                href="#contact"
                                className="block py-2 lg:py-1 bg-gradient-to-l from-persian-rose to-safety-orange text-white font-bold px-6 rounded transition duration-300 "
                                onClick={toggleNavbar}
                            >
                                Contact Us
                            </a> */}
                            <div className="relative inline-flex  group">
                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                                <a
                                    href="#"
                                    title="Get quote now"
                                    className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button"
                                >
                                    Contact Now
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
