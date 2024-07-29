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
                                GoPro Digital is a full-service digital
                                marketing agency founded back in 2019 that is
                                dedicated to providing industry-leading
                                marketing solutions to clients in Addis Ababa,
                                Ethiopia, and beyond. We take pride in equipping
                                digital marketers to become experts in their
                                field, providing them with the tools and
                                necessary resources to stay ahead of the curve
                                in an ever-evolving digital landscape. As an
                                agency that specializes in digital marketing, we
                                fully understand the importance of a
                                comprehensive approach to effectively promote
                                our clients businesses online.
                            </p>

                            <h3 className="text-2xl font-semibold mb-4 ">
                                Who We Are
                            </h3>
                            <p className="text-gray-700 mb-8 text-justify">
                                We offer a wide range of services, including
                                website design and development, search engine
                                optimization (SEO), pay-per-click (PPC)
                                advertising, social media management, content
                                marketing, and more. Each of the services we
                                have listed are designed to work in tandem,
                                creating a cohesive and effective digital
                                marketing strategy that will help your business
                                stand out from the competition.
                            </p>

                            <h3 className="text-2xl font-semibold mb-4 ">
                                Our Mission
                            </h3>
                            <p className="text-gray-700 text-justify">
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
