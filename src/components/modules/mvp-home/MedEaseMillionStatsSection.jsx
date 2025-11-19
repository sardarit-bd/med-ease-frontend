"use client";

import { HelpCircle } from "lucide-react";

export default function MedEaseMillionStatsSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row items-center md:items-start justify-between gap-5">

                    {/* LEFT TITLE */}
                    <div>
                        <h2 className="text-[24px] lg:text-[30px] font-semibold text-[#202020] whitespace-nowrap">
                            Med’ease c’est …
                        </h2>
                    </div>

                    <div className="flex items-center gap-5 w-full justify-end">
                        {/* STAT 1 */}
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <p className="text-[32px] font-bold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-transparent bg-clip-text">
                                + 2 Millions
                            </p>
                            <p className="text-[#7B7B7B] text-xs flex items-center gap-1">
                                de patients <HelpCircle size={14} className="text-[#A0A0A0]" />
                            </p>
                        </div>

                        {/* STAT 2 */}
                        <div className="flex flex-col items-center lg:items-start  gap-2">
                            <p className="text-[32px] font-bold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-transparent bg-clip-text">
                                + 10 000
                            </p>
                            <p className="text-[#7B7B7B] text-xs flex items-center gap-1">
                                professionnels <HelpCircle size={14} className="text-[#A0A0A0]" />
                            </p>
                        </div>

                        {/* STAT 3 */}
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <p className="text-[32px] font-bold bg-gradient-to-r from-[#1E67B5] to-[#57D0BF] text-transparent bg-clip-text">
                                + 50 employés
                            </p>
                            <p className="text-[#7B7B7B] text-xs flex items-center gap-1">
                                à votre service <HelpCircle size={14} className="text-[#A0A0A0]" />
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
