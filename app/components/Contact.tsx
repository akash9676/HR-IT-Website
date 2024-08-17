"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [alertVisible, setAlertVisible] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm("service_f55wa7b", "template_ti4cwds", form.current, {
                    publicKey: "dKhXcazRkQMqmNH2S",
                })
                .then(
                    () => {
                        console.log("SUCCESS!");
                        setAlertVisible(true); // Show alert
                        if (form.current) {
                            form.current.reset(); // Reset the form values
                        }
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        }
    };

    return (
        <section id="contact" className="section py-10">
            <div className="container mx-auto px-4 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Lets Contact With Us
                </h2>

                <p className="text-gray-700 mb-8 text-center">
                    **Have a question or need assistance? Contact us today and
                    lets start solving your IT challenges together!**
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
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
                            type="text"
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

                    <div className="relative inline-flex group mt-4">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                        <button
                            type="submit"
                            className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {alertVisible && (
                    <AlertDialog
                        open={alertVisible}
                        onOpenChange={setAlertVisible}
                    >
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Message has been sent
                                </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogAction
                                    onClick={() => setAlertVisible(false)}
                                >
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </div>
        </section>
    );
};

export default Contact;
