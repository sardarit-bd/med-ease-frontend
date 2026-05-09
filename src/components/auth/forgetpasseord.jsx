"use client";

import { useVerifyEmailMutation } from "@/state/api/authApi";
import { setisforgot } from "@/state/slices/AuthSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "../../utils/Button";
export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [forgotSuccess, setForgotSuccess] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotPassword, { isLoading: forgotLoading }] =
    useVerifyEmailMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setForgotError("");
    try {
      await forgotPassword(data).unwrap();
      setForgotSuccess("Password reset link sent! Please check your email.");
      toast.success("Password reset link sent! Please check your email.");
    } catch (err) {
      const message = err?.data?.message;
      if (typeof message === "object") {
        const firstError = Object.values(message)?.[0]?.[0];
        setForgotError(
          firstError || "Failed to send reset link. Please try again.",
        );
      } else {
        setForgotError(
          message || "Failed to send reset link. Please try again.",
        );
      }
      toast.error(message || "Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl relative">
        <button
          onClick={() => dispatch(setisforgot(false))}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center text-(--brandColor,#3074B5)">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-500 text-center mt-1">
          Enter your email to receive a password reset link
        </p>

        {forgotSuccess ? (
          <div className="mt-6 text-center text-green-600 font-medium">
            {forgotSuccess}
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-(--brandBg,#61D0BF) outline-none"
            />
            {errors.email && (
              <p className="text-sm! text-red-500">{errors.email.message}</p>
            )}

            {forgotError && (
              <p className="text-sm! text-red-500">{forgotError}</p>
            )}

            <Button
              type="submit"
              disabled={forgotLoading}
              className="w-full bg-(--brandColor,#3074B5) text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
              onClick={() => {
                console.log("");
              }}
            >
              {forgotLoading && (
                <div className="w-5 h-5 rounded-full border-b-3 border-l-3 border-gray-50 animate-spin"></div>
              )}
              Send Reset Link
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
