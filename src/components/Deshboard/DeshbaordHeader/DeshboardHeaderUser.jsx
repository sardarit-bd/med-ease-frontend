import { Home, LogOut, User } from "lucide-react";

const DeshboardHeaderUser = () => {
    return (
        <div className="relative group">
            <div className="w-[45px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white cursor-pointer h-[45px] rounded-full bg-red-900 flex items-center justify-center">
                <User className="text-white" />
            </div>

            <div className="hidden group-hover:block absolute top-12 right-0 group-hover:opacity-100 transition-all duration-200">
                <div className="w-2 h-3 bg-transparent w-full"></div>
                <div className="bg-white rounded-sm customboxshadow p-3 pb-5 h-fit w-[230px]">
                    <div className="flex items-center gap-2">
                        <div className="w-[40px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white cursor-pointer h-[40px] rounded-full bg-red-900 flex items-center justify-center">
                            <User className="text-white" />
                        </div>
                        <div className="">
                            <h5 className="text-lg font-semibold text-gray-600">Emon Hossen</h5>
                            <span className="bg-green-100 text-sm px-2 border border-green-300 rounded-xl">Patient</span>
                        </div>
                    </div>
                    <div className="mt-5">


                        <button

                            className={`flex items-center gap-3  py-3 text-sm font-medium cursor-pointer rounded-full transition-all duration-200 `}
                        >
                            <Home size={20} className="flex-shrink-0" />
                            <span className="truncate">Dashboard</span>
                        </button>

                        <button

                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium cursor-pointer rounded-full mt-2 transition-all w-full duration-200 ${true
                                ? "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            <LogOut size={20} className="flex-shrink-0" />
                            <span className="truncate">Logout</span>
                        </button>


                    </div>
                </div>
            </div>


        </div >
    )
}

export default DeshboardHeaderUser;