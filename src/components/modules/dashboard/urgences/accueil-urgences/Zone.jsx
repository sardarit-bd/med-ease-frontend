export default function Zone({ title, children, className }) {
    return (
        <div className={`rounded-xl p-4 border shadow-sm ${className}`}>
            <h2 className="text-white font-semibold px-3 py-1 rounded-md inline-block mb-3 text-sm bg-black bg-opacity-30">
                {title}
            </h2>
            {children}
        </div>
    );
}
