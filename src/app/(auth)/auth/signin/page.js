"use client";

import SpinLoader from "@/components/shared/SpinLoader";
import { useAuth } from "@/hooks";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

    const router = useRouter();
    const [isLoading, setisLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login, loading, error } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await login(formData);
        if (result.success) {
            router.replace('/patient-dashboard/tableau')
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--brandColor,#3074B5)] to-[var(--brandBg,#61D0BF)] p-4">
            <div className="w-full max-w-md bg-white backdrop-blur-md rounded-2xl shadow-xl p-8">
                {/* Logo / Title */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[var(--brandColor,#3074B5)]">
                        Med’Ease Portal
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Connectez-vous pour accéder à votre compte
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
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
                            onChange={handleChange}
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

                    <div className="flex justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-[var(--brandColor,#3074B5)]" />
                            Remember me
                        </label>
                        <Link href="/forgot-password" className="text-[var(--brandColor,#3074B5)] hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold py-3 rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-3"
                    >
                        {isLoading && <SpinLoader />}
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have an account?{" "}
                    <Link href="/auth/signup" className="text-[var(--brandColor,#3074B5)] font-medium hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
}
