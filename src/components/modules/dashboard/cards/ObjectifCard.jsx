"use client";
import { ClipboardCheck } from "lucide-react";

export default function ObjectifCard() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-md bg-[var(--light-blue)] text-[var(--primary)]">
                    <ClipboardCheck size={20} />
                </div>
                <h3 className="font-semibold text-gray-800 text-base md:text-lg">Objectif</h3>
            </div>

            {/* Body Text */}
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
}
