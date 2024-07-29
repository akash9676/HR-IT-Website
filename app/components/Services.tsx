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
            className="py-12 bg-gray-50 h-full flex flex-row justify-center items-center relative"
        >
            <div className="container mx-auto px-4 lg:px-32 ">
                <h2 className="text-4xl font-bold mb-6 text-center">
                    Services We Provided
                </h2>
                <p className="text-gray-700 mb-12 text-center">
                    We leverage a holistic approach to IT services, offering
                    everything from IT consulting to network and cloud
                    solutions, ensuring your business stands out in the digital
                    arena.
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
                                    Managed IT Services
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                We handle your IT, so you can handle your
                                business. Our managed IT services provide
                                continuous monitoring, maintenance, and support
                                to keep your systems running smoothly and
                                efficiently.
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
                                    Cloud Solutions
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Elevate your business with our cloud solutions.
                                We offer secure and scalable cloud services that
                                enable easy data access and collaboration from
                                anywhere, enhancing flexibility and
                                productivity.
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
                                    Cybersecurity
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Fortifying your digital fortress. Our
                                cybersecurity services protect your business
                                against cyber threats with advanced security
                                measures, ensuring your data and assets remain
                                safe and secure.
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
                                    IT Consulting
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Your strategic IT partner. Our IT consulting
                                services offer expert advice to help you make
                                informed decisions and align your technology
                                with your business objectives for optimal
                                performance.
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
                                    Software Development
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Innovate and streamline with custom software.
                                Our software development team creates tailored
                                applications to meet your specific business
                                needs, enhancing efficiency and driving growth.
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
                                    Network Solutions
                                </a>
                            </h3>
                            <p className="text-gray-600">
                                Seamless connectivity for your business. Our
                                network solutions ensure reliable and secure
                                communication, keeping your team connected and
                                your operations running smoothly.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Services;
