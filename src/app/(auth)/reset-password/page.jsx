"use client";

import SpinLoader from "@/components/shared/SpinLoader";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export function ResetPassword() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            setError("Invalid or missing reset token");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${token}`,
                },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Password reset failed");
            }

            setSuccess("Password reset successful. You can now log in.");

            setTimeout(() => {
                router.replace("/auth/signin");
            }, 2000);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--brandColor,#3074B5)] to-[var(--brandBg,#61D0BF)] p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-2xl font-bold text-center text-[var(--brandColor,#3074B5)]">
                    Reset Password
                </h1>

                <p className="text-sm text-center text-gray-500 mt-2">
                    Enter your new password below
                </p>

                {success ? (
                    <p className="mt-6 text-center text-green-600 font-medium">
                        {success}
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="New Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--brandBg,#61D0BF)] outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2"
                        >
                            {loading && <SpinLoader />}
                            Reset Password
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default function ResetPasswordPage() {
    return <Suspense>
        <ResetPassword />
    </Suspense>
}
