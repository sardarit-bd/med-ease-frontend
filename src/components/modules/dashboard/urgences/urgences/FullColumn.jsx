import { BsAwardFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa6";
import { GiBrickWall } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { PiBedFill } from "react-icons/pi";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import ColumnHeader from "./ColumnHeader";
import PatientCard from "./PatientCard";

export default function FullColumn({ color }) {
    return (
        <div className={`flex-1 rounded-t-lg pb-4`} style={{ background: color }}>
            <ColumnHeader
                senior="Claire-Marie"
                interne="Freya"
                as="Jeanne"
                brancardier="Henry"
            />

            {/* Icons Row */}
            <div className="flex gap-2 px-3 py-3 text-white text-lg flex-wrap border-b">
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><GoHomeFill />:</span>
                    <span> 3</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><FaBed />:</span>
                    <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><PiBedFill />:</span>
                    <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><RiArrowRightDoubleFill />:</span>
                    <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><GiBrickWall />:</span>
                    <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><FaHeadSideVirus />:</span>
                    <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="flex items-center"><BsAwardFill />:</span>
                    <span>3</span>
                </div>
            </div>

            {/* Patients summary */}
            <div className="px-3 py-2 text-white text-sm mb-4 border-b-7">
                <p>Patients : 8</p>
                <p>Charge de travail : 80%</p>
            </div>

            {/* Patient Cards */}
            <div className="px-3">
                <PatientCard color={color} />
                <PatientCard color={color} />
                <PatientCard color={color} />
                <PatientCard color={color} />
            </div>
        </div>
    );
}
