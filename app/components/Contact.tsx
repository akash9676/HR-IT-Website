/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Contact: React.FC = () => {
    // State management for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            name,
            email,
            subject,
            phone,
            message,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setAlertVisible(true);
                // Manually reset each form field
                setName("");
                setEmail("");
                setSubject("");
                setPhone("");
                setMessage("");
            } else {
                console.error("Error sending message:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <section id="contact" className="section py-10">
            <div className="container mx-auto px-4 md:px-16 lg:px-32">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Let's Contact Us
                </h2>

                <p className="text-gray-700 mb-8 text-center">
                    **Have a question or need assistance? Contact us today and
                    let's start solving your IT challenges together!**
                </p>

                <form
                    onSubmit={handleSubmit}
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="email"
                            name="email_address"
                            aria-label="email"
                            placeholder="Email address*"
                            required
                            className="input-field p-3 border rounded-lg w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <input
                            type="text"
                            name="subject"
                            aria-label="subject"
                            placeholder="Subject"
                            className="input-field p-3 border rounded-lg w-full"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <input
                            type="text"
                            name="phone"
                            aria-label="phone"
                            placeholder="Phone number"
                            className="input-field p-3 border rounded-lg w-full"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <textarea
                        name="message"
                        aria-label="message"
                        placeholder="Your message...*"
                        required
                        className="input-field p-3 border rounded-lg w-full mt-6"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                                Terms of Service
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
                            className="relative inline-flex items-center justify-center px-6 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
                                    Message Sent
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
