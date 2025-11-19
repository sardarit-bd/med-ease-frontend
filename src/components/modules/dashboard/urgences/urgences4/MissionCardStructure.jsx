import { LuDownload } from "react-icons/lu";
import MissionSingleCard from "./MissionSingleCard";

export default function MissionCardStructure() {
    return (
        <div className="w-full bg-white shadow-md mb-10 overflow-hidden px-4">

            <div className="py-3 flex items-center justify-end">
                <button className="flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold w-fit cursor-pointer">
                    <LuDownload className="text-xl" />
                    <span>Exporter</span>
                </button>
            </div>

            <div className="py-6">
                <MissionSingleCard />
                <MissionSingleCard />
            </div>
        </div>
    );
}
