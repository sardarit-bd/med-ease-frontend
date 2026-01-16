const SpinLoader = () => {
    return (
        <div className="bg-sky-900/60 absolute inset-0 flex items-center justify-center">
            <div className="w-[40px] h-[40px] rounded-full border-b-3 border-l-3 border-gray-50 animate-spin">
            </div>
        </div>
    )
}


export default SpinLoader;