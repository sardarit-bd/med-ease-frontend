"use client";

import useAuthStore from "../../../../store/useAuthStore";



export default function InscriptionForm({ children }) {

    const { isopenActionForm, setisopenActionForm, issignin } = useAuthStore();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3074B5] to-[#61D0BF]">
                        {issignin ? "Se Connecter" : "Inscription"}
                    </h2>
                    <button onClick={() => { setisopenActionForm(false) }} className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer">
                        ✕
                    </button>
                </div>

                {
                    children
                }

            </div>
        </div>
    );
}
