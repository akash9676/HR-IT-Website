import Image from "next/image";
import Herobanner from "../../public/images/herosection.png";

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
                            <span className="relative whitespace-nowrap text-[#5171ff]">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 418 42"
                                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#9dadf3]"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                                </svg>
                                <span className="relative font-extrabold">Success</span>
                            </span>
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg mb-6 text-justify">
                            We empower businesses with innovative IT services
                            and solutions, helping them stay competitive and
                            efficient in a rapidly changing digital world. Our
                            team is dedicated to providing the best tools and
                            resources to ensure your business thrives.
                        </p>
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
                    </div>
                    <div className="w-4/5">
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
