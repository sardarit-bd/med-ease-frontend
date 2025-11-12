
export default function Banner() {
    return (
        <section className="px-4 md:px-8 py-20 pt-36 flex items-center justify-center min-h-[450px] bg-cover bg-no-repeat" style={{ backgroundImage: `url("philosophy/10352109.png")` }}>
            <div className="grid grid-cols-1 md:grid-cols-1 text-center items-center gap-10 max-w-7xl mx-auto ">
                <div>


                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-[#3074B5] mb-4 leading-snug">
                        Notre Philosophie
                    </h1>
                </div>
            </div>
        </section>
    )
}
