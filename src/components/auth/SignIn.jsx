"use client";

import { useLoginMutation } from "@/state/api/authApi";
import {
  setisforgot,
  setissignin,
  setissignup,
} from "@/state/slices/AuthSlice";
import { signInSchema } from "@/validations/authValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { issignup } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [login, { isLoading: loading, error, isSuccess }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (formData) => {
    try {
      const result = await login(formData).unwrap();
      console.log(result?.data?.user?.role);
      if (isSuccess || result.status) {
        if (result?.data?.user?.role === "patient") {
          router.replace("/dashboard/patient/tableau");
          dispatch(setissignup(false));
          dispatch(setissignin(false));
        } else {
          router.replace("");
        }
        dispatch(issignup());
      }
    } catch (err) {
      const backendErrors = err?.data?.errors;

      if (backendErrors) {
        Object.keys(backendErrors).forEach((field) => {
          setError(field, {
            type: "server",
            message: backendErrors[field][0],
          });
        });
      } else {
        setError("root", {
          type: "server",
          message: err?.data?.message || "Login failed",
        });
      }
    }
  };

  return (
    <>
      <section className="">
        <div className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                {...register("email")}
                className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--brandBg,#61D0BF) text-black"
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
                className="peer w-full px-4 pt-3 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--brandBg,#61D0BF) text-black"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-2.5 text-gray-500 text-base transition-all
                            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-(--brandColor,#3074B5) peer-focus:bg-white peer-focus:px-1
                            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-(--brandColor,#3074B5) peer-not-placeholder-shown:bg-white"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => {
                  console.log("clicked");
                  setShowPassword(!showPassword);
                }}
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-(--primary) to-(--secondary) text-white font-semibold py-3 rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-5 h-5 rounded-full border-b-3 border-l-3 border-gray-50 animate-spin"></div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?
            <button
              onClick={() => {
                dispatch(setissignup(true));
              }}
              className="text-(--brandColor,#3074B5) font-medium hover:underline cursor-pointer"
            >
              Sign up
            </button>
          </p>
          <div className="flex justify-center mt-2 text-sm text-gray-600">
            <button
              type="button"
              onClick={() => {
                dispatch(setisforgot(true));
              }}
              className="text-(--brandColor,#3074B5) hover:underline cursor-pointer"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
