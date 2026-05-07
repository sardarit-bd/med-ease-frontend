"use client";

import useAuthStore from "../../../store/useAuthStore";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthWraper = ({ isauthformopen, setisauthformopen }) => {
  const { issignin, setissignin } = useAuthStore();

  return <div>{issignin ? <SignIn /> : <SignUp />}</div>;
};

export default AuthWraper;
