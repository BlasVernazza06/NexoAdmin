import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Hero(){
    return (
        <div className=" px-6 py-20">
            <div className="text-center max-w-4xl mb-8">
                <p className="text-5xl md:text-6xl font-bold text-[var(--color-text)] mb-6">Gestiona tu empresa con <span className="text-transparent bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text">inteligencia</span></p>
                <span className="text-xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
                    NexoAdmin es la plataforma integral que necesitas para administrar todos los aspectos de tu negocio desde una sola interfaz moderna y potente.
                </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                    href={'/register'}
                    className="flex items-center font-bold h-11 px-8 text-base gap-2 bg-[var(--color-brand)] p-2 rounded-xl cursor-pointer text-[var(--color-brand-contrast)] hover:bg-[var(--color-brand)] shadow-md">
                    Comenzar Prueba Gratuita <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link 
                    href={'/login'}
                    className="bg-[var(--color-surface)] font-bold h-11 px-8 text-base p-2 rounded-xl cursor-pointer border border-[var(--color-muted)] text-[var(--color-text)] hover:bg-[var(--color-muted)]/50 shadow-sm">
                    Iniciar Sesión
                </Link>
            </div>
            <div className="flex justify-center">
                <p className="text-sm text-[var(--color-text-muted)] mt-4">
                    30 días gratis • Sin tarjeta de crédito • Configuración en 5 minutos
                </p>
            </div>
        </div>
    );
}