import AboutUs from "./components/Aboutus";
import Contact from "./components/Contact";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Services />
            <AboutUs />
            <Contact />
        </div>
    );
}
