export default function CTASec() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="flex flex-col items-center justify-center max-w-2xl">
                <header className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</p>
                    <span className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">Únete a miles de empresas que ya están utilizando NexoAdmin para optimizar sus operaciones y aumentar sus ventas.</span>
                </header>
                <button className="text-lg mt-10 bg-[var(--color-muted)] text-[var(--color-brand)] hover:bg-white/90 font-bold cursor-pointer rounded-xl px-8 py-3">
                    Empezar Ahora
                </button>
            </div>
        </div>
    );
}