"use client";

import { useRegisterMutation } from "@/state/api/authApi";
import { setissignin, setissignup } from "@/state/slices/AuthSlice";
import { signUpSchema } from "@/validations/authValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { userRole } = useSelector((state) => state.Auth);

  const [registeration, { isLoading, error, isSuccess }] =
    useRegisterMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (formData) => {
    try {
      const res = await registeration({ ...formData, role: userRole }).unwrap();

      if (isSuccess || res.status) {
        toast.success("Account created successfully! Please log in.");
        dispatch(setissignin());
        dispatch(setissignup());
      }
    } catch (err) {
      const backendErrors = err?.data?.message;

      if (backendErrors && typeof backendErrors === "object") {
        Object.keys(backendErrors).forEach((field) => {
          if (field === "role") {
            setError("root", {
              type: "server",
              message: backendErrors[field][0],
            });
          } else {
            setError(field, {
              type: "server",
              message: backendErrors[field][0],
            });
          }
        });
      } else {
        setError("root", {
          type: "server",
          message:
            err?.data?.message || "Registration failed. Please try again.",
        });
        toast.error(
          err?.data?.message || "Registration failed. Please try again.",
        );
      }
    }
  };

  return (
    <section className="">
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              {...register("name")}
              className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--brandBg,#61D0BF)"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-not-placeholder-shown:text-sm peer-focus:bg-white peer-focus:px-1
                            peer-not-placeholder-shown:-top-3  peer-not-placeholder-shown:text-(--brandColor,#3074B5)  peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1"
            >
              Full Name
            </label>
            {errors.name && (
              <p className="text-sm! w-full text-left text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              {...register("email")}
              className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--brandBg,#61D0BF)"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-(--brandColor,#3074B5) peer-focus:bg-white peer-focus:px-1
                            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-(--brandColor,#3074B5)  peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1"
            >
              Email
            </label>
            {errors.email && (
              <p className="text-sm! w-full text-left text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=" "
              {...register("password")}
              className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--brandBg,#61D0BF)"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-(--brandColor,#3074B5) peer-focus:bg-white peer-focus:px-1
                            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-(--brandColor,#3074B5)  peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-sm! w-full text-left text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              id="confirm"
              placeholder=" "
              {...register("confirm")}
              className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--brandBg,#61D0BF)"
            />
            <label
              htmlFor="confirm"
              className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-(--brandColor,#3074B5) peer-focus:bg-white peer-focus:px-1
                            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-(--brandColor,#3074B5)  peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1"
            >
              Confirm Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirm && (
              <p className="text-sm! w-full text-left text-red-500 mt-1">
                {errors.confirm.message}
              </p>
            )}
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id="terms"
              {...register("terms")}
              className="accent-(--brandColor,#3074B5) mr-2"
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-(--brandColor,#3074B5) hover:underline"
              >
                Terms & Conditions
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm! w-full text-left text-red-500 -mt-3">
              {errors.terms.message}
            </p>
          )}

          {errors.root && (
            <p className="text-sm! w-full text-left text-red-500">
              {errors.root.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-(--primary) to-(--secondary) text-white font-semibold py-3 rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-3"
          >
            {isLoading ? (
              <div className="w-5 h-5 rounded-full border-b-3 border-l-3 border-gray-50 animate-spin"></div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?
          <button
            onClick={() => {
              dispatch(setissignin(true));
            }}
            className="text-(--brandColor,#3074B5) font-medium hover:underline cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
