const Email = () => {
    return (
        <section className="mx-auto mt-28 w-full max-w-6xl px-6 sm:px-10 lg:px-8">
            <div className="flex justify-end">
                <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="mb-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center font-orbitron text-base text-white/90">
                        Send a Letter
                    </div>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <textarea
                            rows="4"
                            placeholder="Write your message"
                            className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <button
                            type="button"
                            className="w-full rounded-2xl bg-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/30"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Email
