"use client";

import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const AuthWraper = () => {
  const { issignin, issignup } = useSelector((state) => state.Auth);

  return <div>{issignin ? <SignIn /> : issignup ? <SignUp /> : null}</div>;
};

export default AuthWraper;
