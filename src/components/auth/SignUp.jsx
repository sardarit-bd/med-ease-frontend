"use client";

import { useAuth } from "@/hooks";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuthStore from "../../../store/useAuthStore";
import SpinLoader from "../shared/SpinLoader";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { register } = useAuth()
    const router = useRouter();
    const { setisopenActionForm, issignin, setissignin, issignup, setissignup, isforgot, setisforgot, isLoading, setisLoading } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const termsAccepted = form.terms.checked;

        if (!termsAccepted) {
            toast.error('You must agree to the Terms & Conditions to register.');
            return;
        }

        if (password !== confirm) {
            toast.error('Passwords do not match. Please try again.');
            return;
        }

        setisLoading(true);
        const res = await register({ name, email, password });
        setisLoading(false);
        setisopenActionForm(false);
        if (res.success) {
            router.replace('/auth/signin')
            toast.success('Account created successfully! Please log in.');
        } else {
            toast.error(res.message || 'Registration failed. Please try again.');
            console.log(res.error);
        }
    };



    if (isLoading) {
        return <SpinLoader />;
    }


    return (
        <section className="">
            <div className="p-8">

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
                            name="terms"
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
                    <button
                        onClick={() => { setissignin(true), setissignup(false) }}
                        className="text-[var(--brandColor,#3074B5)] font-medium hover:underline cursor-pointer"
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </section>
    )
}

export default SignUp;