"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log({ name, email, password, confirm }); // Replace with API call
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--brandColor,#3074B5)] to-[var(--brandBg,#61D0BF)] p-4">
            <div className="w-full max-w-md bg-white backdrop-blur-md rounded-2xl shadow-xl p-8">
                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[var(--brandColor,#3074B5)]">
                        Create Your Med’Ease Account
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Join the platform to manage your healthcare easily
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brandBg,#61D0BF)]"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--brandColor,#3074B5)] peer-focus:bg-white peer-focus:px-1
                            peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[var(--brandColor,#3074B5)]  peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1">
                            Full Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brandBg,#61D0BF)]"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--brandColor,#3074B5)] peer-focus:bg-white peer-focus:px-1
                            peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[var(--brandColor,#3074B5)]  peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1">
                            Email
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brandBg,#61D0BF)]"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--brandColor,#3074B5)] peer-focus:bg-white peer-focus:px-1
                            peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[var(--brandColor,#3074B5)]  peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1">
                            Password
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="relative">
                        <input
                            type={showConfirm ? "text" : "password"}
                            id="confirm"
                            name="confirm"
                            required
                            placeholder=" "
                            className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brandBg,#61D0BF)]"
                        />
                        <label
                            htmlFor="confirm"
                            className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[var(--brandColor,#3074B5)] peer-focus:bg-white peer-focus:px-1
                            peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[var(--brandColor,#3074B5)]  peer-[&:not(:placeholder-shown)]:bg-white peer-[&:not(:placeholder-shown)]:px-1">
                            Confirm Password
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                            className="accent-[var(--brandColor,#3074B5)] mr-2"
                        />
                        <label htmlFor="terms">
                            I agree to the{" "}
                            <Link
                                href="/terms"
                                className="text-[var(--brandColor,#3074B5)] hover:underline"
                            >
                                Terms & Conditions
                            </Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold py-3 rounded-lg shadow-md transition-all cursor-pointer"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/auth/signin"
                        className="text-[var(--brandColor,#3074B5)] font-medium hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    );
}
