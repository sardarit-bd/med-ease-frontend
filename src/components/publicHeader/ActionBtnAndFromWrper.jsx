'use client'

import useAuthStore from "../../../store/useAuthStore";
import AuthWraper from "../auth/AuthWraper";
import InscriptionForm from "./InscriptionForm";

const ActionBtnAndFromWrper = ({ children }) => {

    const { isopenActionForm, setisopenActionForm } = useAuthStore();


    return (
        <div>
            {
                children
            }


            {
                isopenActionForm && (
                    <div className="absolute inset-0 w-screen h-screen bg-[#00000000] flex items-center justify-center">

                        <InscriptionForm >
                            <AuthWraper />
                        </InscriptionForm>

                    </div>
                )
            }




        </div>
    )
}

export default ActionBtnAndFromWrper;