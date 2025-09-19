import { Download, Filter } from "lucide-react";

export default function ReportsHeader() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-[var(--color-text)]">Reportes</h1>
                <p className="text-sm text-[var(--color-text-muted)]">Analiza el rendimiento de tu negocio</p>
            </div>
            <div className="flex gap-2">
                <button type="button" className="py-1.5 px-4 font-semibold rounded-xl border border-[var(--color-muted)] text-[var(--color-text)] bg-[var(--color-bg)] hover:opacity-90 flex items-center gap-2 shadow-sm">
                    <Filter className="h-4 w-4" />
                    Filtros
                </button>
                <button type="button" className="py-1.5 px-4 font-semibold rounded-xl bg-[var(--color-brand)] text-[var(--color-brand-contrast)] hover:opacity-90 flex items-center gap-2 shadow-sm">
                    <Download className="h-4 w-4" />
                    Exportar
                </button>
            </div>
        </div>
    );
}


