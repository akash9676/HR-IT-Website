"use client";
import React from "react";
import Image from "next/image";
import { Play, CheckCircle } from "lucide-react";
import aboutbanner from "../../public/images/about-banner.jpg";

const AboutUs = () => {
    return (
        <section id="about" className="py-16 flex justify-center items-center ">
            <div className="container mx-auto px-4 md:px-14 lg:px-24">
                <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-8">
                    {/* Image Section */}

                    <Image
                        src={aboutbanner}
                        alt="About Banner"
                        className="object-cover lg:w-1/3 lg:h-1/3"
                        loading="lazy"
                    />

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-5">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold mb-6">
                                About Us
                            </h2>
                            <p className="text-gray-700 mb-8 text-justify">
                                HR-IT Solutions is a team of passionate IT
                                professionals committed to delivering top-notch
                                technology services to businesses of all sizes.
                                We understand the challenges that come with
                                managing IT in a fast-paced, ever-changing
                                environment, and we strive to provide innovative
                                solutions that are both practical and efficient.
                                Our expertise spans across various IT domains,
                                including managed services, cloud solutions,
                                cybersecurity, and more. We take pride in our
                                customer-centric approach, working closely with
                                each client to tailor our services to their
                                specific needs and objectives. At HR-IT
                                Solutions, were not just your IT provider; were
                                your strategic partner in achieving digital
                                excellence.
                            </p>

                            <h3 className="text-2xl font-semibold mb-4 ">
                                Who We Are
                            </h3>
                            <p className="text-gray-700 mb-8 text-justify">
                                HR-IT Solutions is a dynamic team of IT experts
                                dedicated to making technology work for your
                                business. We specialize in providing
                                comprehensive IT services that are tailored to
                                meet the unique needs of each client. Our goal
                                is to simplify complex technology, allowing you
                                to focus on what you do best—running your
                                business.
                            </p>

                            <h3 className="text-2xl font-semibold mb-4 ">
                                Our Mission
                            </h3>
                            <p className="text-gray-700 text-justify">
                                Our mission is to empower businesses with
                                cutting-edge technology solutions that enhance
                                efficiency, security, and growth. We believe in
                                the power of technology to drive innovation and
                                success, and were passionate about helping our
                                clients leverage it to their advantage. At HR-IT
                                Solutions, were here to support your digital
                                journey every step of the way, ensuring that
                                your IT infrastructure is robust, secure, and
                                ready for the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
