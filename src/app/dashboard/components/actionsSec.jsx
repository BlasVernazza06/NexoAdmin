import {  Users, TrendingUp, Download, ShoppingCartIcon } from "lucide-react";

export default function ActionsSec() {
    return (
        <div className="bg-[var(--color-surface)] lg:col-span-2 shadow-sm p-6 mt-6 flex flex-col rounded-xl border border-[var(--color-muted)] transition duration-200 hover:shadow-lg">
            <header>
                <p className="font-semibold text-xl">Acciones Rápidas</p>
            </header>
            <div className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button type="button" className="h-full flex flex-col items-center justify-center gap-2 bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-muted)] transition duration-200 hover:shadow-lg">
                        <ShoppingCartIcon className="size-5" />
                        <span className="text-sm">Nueva Venta</span>
                    </button>
                    <button type="button" className="h-full flex flex-col items-center justify-center gap-2 bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-muted)] transition duration-200 hover:shadow-lg">
                        <Users className="size-5" />
                        <span className="text-sm">Agregar Cliente</span>
                    </button>
                    <button type="button" className="h-full flex flex-col items-center justify-center gap-2 bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-muted)] transition duration-200 hover:shadow-lg">
                        <TrendingUp className="size-5 text-[var(--color-text)]" />
                        <span className="text-sm">Ver Reportes</span>
                    </button>
                    <button type="button" className="h-full flex flex-col items-center justify-center gap-2 bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-muted)] transition duration-200 hover:shadow-lg">
                        <Download className="size-5 text-[var(--color-text)]" />
                        <span className="text-sm">Exportar Datos</span>
                    </button>
                </div>
            </div>
        </div>
    );
}