"use client";

import { useSelector } from "react-redux";
// import { setissignin, setissignup, setisforgot } from "../../state/slices/AuthSlice";
// import Fogot from "";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Forgetpasseord from "./forgetpasseord";
const AuthWraper = () => {
  const { issignin, issignup, isforgot } = useSelector((state) => state.Auth);
  console.log(isforgot);
  return (
    <div>
      {issignin ? (
        <SignIn />
      ) : issignup ? (
        <SignUp />
      ) : isforgot ? (
        <Forgetpasseord />
      ) : null}
    </div>
  );
};

export default AuthWraper;
