"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="section py-16 bg-gray-100">
            <div className="container mx-auto px-4 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Lets Contact With Us
                </h2>

                <p className="text-gray-700 mb-8 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                            type="number"
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

                    <button
                        type="submit"
                        className="btn btn-primary mt-6 bg-gradient-to-l from-persian-rose to-safety-orange text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                <div className=" p-6 rounded-lg ">
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
                                    support@goprodigital.net
                                </a>
                                <br />
                                <a
                                    href="mailto:support@goprodigital.net"
                                    className="text-blue-600"
                                >
                                    support@goprodigital.net
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
                                    27 Division
                                    <br />
                                    Addis Ababa, Ethiopia
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
                                    +123 456 7890
                                </a>
                                <br />
                                <a
                                    href="tel:+2414524526"
                                    className="text-blue-600"
                                >
                                    +241 452 4526
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
