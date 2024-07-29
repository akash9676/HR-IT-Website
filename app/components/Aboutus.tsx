"use client";
import React from "react";
import Image from "next/image";
import { Play, CheckCircle } from "lucide-react";
import aboutbanner from "../../public/images/about-banner.jpg";

const AboutUs = () => {
    return (
        <section id="about" className="py-16 ">
            <div className="container mx-auto px-4 lg:px-32">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Image Section */}
                    <div className="relative mb-12 lg:mb-0 lg:w-1/2">
                        <div className="relative w-full aspect-w-3 aspect-h-4">
                            <Image
                                src={aboutbanner}
                                alt="About Banner"
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold mb-6">
                                About Us
                            </h2>
                            <p className="text-gray-700 mb-8">
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

                            <h3 className="text-2xl font-semibold mb-4">
                                Who We Are
                            </h3>
                            <p className="text-gray-700 mb-8">
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

                            <h3 className="text-2xl font-semibold mb-4">
                                Our Success
                            </h3>
                            <ul className="list-disc pl-5 space-y-4 mb-8">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="text-green-500" />
                                    <p className="text-gray-700">
                                        Our Digital academy, on the plus side,
                                        has graduated 25+ students over the past
                                        6 months. By 2023, we will start to
                                        offer diploma courses that will create
                                        specialists and experts in the digital
                                        marketing profession.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="text-green-500" />
                                    <p className="text-gray-700">
                                        For the past three years, at GoPro
                                        Digital, we have designed and
                                        implemented SEO strategies that drive
                                        traffic, brand engagement, and, more
                                        importantly, business growth for many
                                        businesses.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="text-green-500" />
                                    <p className="text-gray-700">
                                        For the most part, through our
                                        commitment to our core values, we strive
                                        to deliver world-class digital marketing
                                        services to a wide range of clients and
                                        industries that produce outstanding
                                        results.
                                    </p>
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-700">
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
