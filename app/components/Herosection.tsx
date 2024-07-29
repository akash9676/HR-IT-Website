import Image from "next/image";
import Herobanner from "../../public/images/hero-banner.png";

const HeroSection = () => {
    return (
        <section id="home" className="relative bg-white py-12 md:py-24">
            <div className="container mx-auto px-4 lg:px-32">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
                        <p className="text-gray-600 text-lg md:text-xl mb-2">
                            GoPro Digital Marketing Agency
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            For An Improved Business Experience!
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg mb-6">
                            We take pride in equipping digital marketers to
                            become experts in their field, providing them with
                            the tools and necessary resources to stay ahead of
                            the curve in an ever-evolving digital landscape.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg rounded-md"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <figure className="w-full">
                            <Image
                                src={Herobanner}
                                width={720}
                                height={673}
                                alt="hero banner"
                                className="w-full"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
