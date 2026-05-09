"use client";

import { useSelector } from "react-redux";
import useAuthStore from "../../../../store/useAuthStore";
import AuthWraper from "../../auth/AuthWraper";
import InscriptionForm from "./InscriptionForm";
const ActionBtnAndFromWrper = ({ children }) => {
  const { isopenActionForm, setisopenActionForm } = useAuthStore();
  const { issignin, issignup, isforgot } = useSelector((state) => state.Auth);

  return (
    <div>
      {children}

      {(issignin || issignup || isforgot) && (
        <div className="absolute inset-0 w-screen h-screen bg-[#00000000] flex items-center justify-center">
          <InscriptionForm>
            <AuthWraper />
          </InscriptionForm>
        </div>
      )}
    </div>
  );
};

export default ActionBtnAndFromWrper;
