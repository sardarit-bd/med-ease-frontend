import FullColumn from "./FullColumn";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MainLayoutforthisDashboard() {
    return (
        <div className="flex w-full">

            {/* LEFT */}
            <LeftSidebar />

            {/* CENTER 6 COLUMNS */}
            <div className="flex flex-1 gap-2 px-2">

                <FullColumn color="#EB5757" />
                <FullColumn color="#F2994A" />
                <FullColumn color="#F2C94C" />
                <FullColumn color="#6FCF97" />
                <FullColumn color="#27AE60" />
                <FullColumn color="#2D9CDB" />

            </div>

            {/* RIGHT */}
            <RightSidebar />

        </div>
    );
}
