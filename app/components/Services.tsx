import {
    MessageCircle,
    Monitor,
    Lightbulb,
    Smartphone,
    Archive,
    Wrench,
} from "lucide-react";

const Services = () => {
    return (
        <section
            id="service"
            aria-label="service"
            className="py-12 bg-gray-50 h-full lg:h-svh  flex flex-row justify-center items-center relative"
        >
            <div className="container mx-auto px-4 lg:px-32 ">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Services We Provided
                </h2>
                <p className="text-gray-700 mb-12 ">
                    As an agency that specializes in digital marketing, we fully
                    understand the importance of a comprehensive approach to
                    effectively promote our clients businesses online. Thats why
                    we offer a wide range of services, including website design
                    and development, search engine optimization (SEO),
                    pay-per-click (PPC) advertising, social media management,
                    content marketing, and more.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <li>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center items-center w-16 h-16 bg-[#13c4a1] text-white rounded-full mb-4 mx-auto">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    SEO Optimization
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit tatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center items-center w-16 h-16 bg-[#6610f2] text-white rounded-full mb-4 mx-auto">
                                <Monitor className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Digital Marketing
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit tatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center items-center w-16 h-16 bg-[#ffb700] text-white rounded-full mb-4 mx-auto">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Market Research
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit tatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center items-center w-16 h-16 bg-[#fc3549] text-white rounded-full mb-4 mx-auto">
                                <Smartphone className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Advertising
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit tatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center items-center w-16 h-16 bg-[#00d280] text-white rounded-full mb-4 mx-auto">
                                <Archive className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Website Design and Development
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit tatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center items-center w-16 h-16 bg-[#ff612f] text-white rounded-full mb-4 mx-auto">
                                <Wrench className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Pay-Per-Click (PPC)
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit tatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Services;
