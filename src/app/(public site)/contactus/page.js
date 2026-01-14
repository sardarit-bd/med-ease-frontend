"use client";

import ContactFooter from "@/components/modules/about/ContactFooter";

export default function ContactPage() {
    return (
        <div className="h-fit bg-gray-50 px-4">
            <div className="mx-auto max-w-4xl pt-[120px] pb-[50px]">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Contact Us
                    </h1>
                    <p className="mt-3 text-gray-600">
                        Have a question or want to work together?
                        Fill out the form below and we’ll get back to you.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-sm bg-white customboxshadow">
                    <form className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Subject */}
                        <div className="md:col-span-2">
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="How can we help?"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Button */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[var(--brandColor,#3074B5)] to-[var(--brandBg,#61D0BF)] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform inline-flex cursor-pointer items-center gap-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ContactFooter />
        </div>
    );
}
