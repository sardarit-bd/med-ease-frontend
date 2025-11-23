import Image from "next/image";

export default function StatCard({ title, value, subtitle, icon }) {
    return (
        <div className="p-5 bg-white rounded-md shadow-sm">
            <p className="text-sm text-[var(--textLight)]">{title}</p>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[var(--textDark)] mt-1">{value}</h2>
                <Image className="translate-y-[-8px]" src={icon} alt="icons" width={28} height={28} />
            </div>
            <p className="text-xs text-[var(--textLight)] mt-1">{subtitle}</p>
        </div>
    );
}
