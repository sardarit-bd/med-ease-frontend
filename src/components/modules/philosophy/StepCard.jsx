"use client";

export default function StepCard({ id, titleFirstLine, titleSecondLine, content, bgColor }) {
    return (
        <div className="mx-auto my-8 flex gap-8 items-start">
            {/* Large background number */}
            <div className="text-[70px] md:text-[90px] opacity-50 font- bg-transparent text-outline-brand leading-none select-none">
                {String(id).padStart(2, "0")}
            </div>

            {/* Content Section */}
            <div className="w-full">
                {/* Title (two lines) */}
                <p
                    className={`rounded-bl-none rounded-lg inline-block px-3 py-1 text-gray-700 text-xl md:text-2xl font-semibold`}
                    style={{ backgroundColor: bgColor }}
                >
                    {titleFirstLine}
                </p>
                <br />
                <p
                    className={`rounded-tl-none rounded-lg inline-block px-3 py-1 text-gray-700 text-xl md:text-2xl font-semibold mt-[-5px]`}
                    style={{ backgroundColor: bgColor }}
                >
                    {titleSecondLine}
                </p>

                {/* Description Block */}
                <div className="w-full">
                    <div className="h-[50px] rounded-lg w-[88%] float-right" style={{ backgroundColor: bgColor }}></div>
                    <br />
                    <div className={`p-4 rounded-lg mt-[-5px]`} style={{ backgroundColor: bgColor }}>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
