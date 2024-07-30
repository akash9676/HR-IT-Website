"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="section py-10">
            <div className="container mx-auto px-4 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Lets Contact With Us
                </h2>

                <p className="text-gray-700 mb-8 text-center">
                    **Have a question or need assistance? Contact us today and
                    lets start solving your IT challenges together!**
                </p>

                <form
                    action=""
                    className="bg-white p-6 rounded-lg shadow-lg mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            aria-label="name"
                            placeholder="Your name*"
                            required
                            className="input-field p-3 border rounded-lg w-full"
                        />

                        <input
                            type="email"
                            name="email_address"
                            aria-label="email"
                            placeholder="Email address*"
                            required
                            className="input-field p-3 border rounded-lg w-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <input
                            type="text"
                            name="subject"
                            aria-label="subject"
                            placeholder="Subject"
                            className="input-field p-3 border rounded-lg w-full"
                        />

                        <input
                            type="text"
                            name="phone"
                            aria-label="phone"
                            placeholder="Phone number"
                            className="input-field p-3 border rounded-lg w-full"
                        />
                    </div>

                    <textarea
                        name="message"
                        aria-label="message"
                        placeholder="Your message...*"
                        required
                        className="input-field p-3 border rounded-lg w-full mt-6"
                    ></textarea>

                    <div className="flex items-center mt-6">
                        <input
                            type="checkbox"
                            name="terms_and_policy"
                            id="terms"
                            required
                            className="mr-2"
                        />
                        <label htmlFor="terms" className="text-gray-700">
                            Accept{" "}
                            <a href="#" className="text-blue-600">
                                Terms of Services
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-600">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <div className="relative inline-flex group mt-4">
                        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <a
                            href="#contact"
                            title="Get quote now"
                            className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button"
                        >
                            Send Message
                        </a>
                    </div>
                </form>

                {/* <div className=" p-6 rounded-lg ">
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-6">
                        <div className="contact-card bg-white p-4 px-10 lg:px-14 rounded-lg flex items-center space-x-4 min-w-96">
                            <div className="p-3 rounded-full bg-teal-500 text-white">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Mail Here
                                </h3>
                                <a
                                    href="mailto:support@goprodigital.net"
                                    className="text-blue-600"
                                >
                                    support@hritsolutions.com
                                </a>
                                <br />
                                <a
                                    href="mailto:support@goprodigital.net"
                                    className="text-blue-600"
                                >
                                    info@hritsolutions.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-card bg-white p-4 px-10 lg:px-14 rounded-lg flex items-center space-x-4 min-w-96">
                            <div className="p-3 rounded-full bg-indigo-600 text-white">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Visit Here
                                </h3>
                                <address className="text-gray-700">
                                    1234 Elm Street
                                    <br />
                                    Springfield, IL 62704, USA
                                </address>
                            </div>
                        </div>

                        <div className="contact-card bg-white p-4 px-10 lg:px-14 rounded-lg flex items-center space-x-4 min-w-96">
                            <div className="p-3 rounded-full bg-red-600 text-white">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Call Here
                                </h3>
                                <a
                                    href="tel:+1234567890"
                                    className="text-blue-600"
                                >
                                    +(555) 123-4567
                                </a>
                                <br />
                                <a
                                    href="tel:+2414524526"
                                    className="text-blue-600"
                                >
                                    +(555) 987-6543
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Contact;
