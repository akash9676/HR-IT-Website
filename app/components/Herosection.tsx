import Image from "next/image";
import Herobanner from "../../public/images/hero-banner.png";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative max-sm:top-10 bg-white py-12 md:py-20"
        >
            <div className="container mx-auto px-4 lg:px-32">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 ">
                        <p className="text-gray-600 text-lg md:text-xl mb-2">
                            HR-IT Solutions
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Transforming Technology into{" "}
                            <span className="underline decoration-orange-400 underline-offset-4">
                                Success
                            </span>
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg mb-6 text-justify">
                            We empower businesses with innovative IT services
                            and solutions, helping them stay competitive and
                            efficient in a rapidly changing digital world. Our
                            team is dedicated to providing the best tools and
                            resources to ensure your business thrives.
                        </p>
                        <a
                            href="#"
                            className="inline-block px-8 py-3 bg-gradient-to-l from-persian-rose to-safety-orange text-white text-lg rounded-md"
                        >
                            Contact Us
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
