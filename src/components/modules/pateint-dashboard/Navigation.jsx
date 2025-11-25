import { User } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
    return (
        <div className="flex items-center justify-between max-w-7xl mx-auto py-2">
            <Image
                src="/logos/headLogo.png"
                alt="logo"
                width={100}
                height={100}
            />
            <User size={40} className="mr-2 border p-2 rounded-full text-white  bg-[#9b88ff]" />
        </div>
    )
}
