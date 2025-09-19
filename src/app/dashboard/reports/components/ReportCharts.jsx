import { BarChart3, PieChart } from "lucide-react";

export default function ReportCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
                <div className="px-6 pt-4">
                    <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">
                        <BarChart3 className="h-5 w-5" />
                        <span>Ventas por Mes</span>
                    </div>
                </div>
                <div className="p-6">
                    <div className="h-64 flex items-center justify-center bg-[var(--color-bg)]/50 rounded-xl">
                        <div className="text-center">
                            <BarChart3 className="h-12 w-12 text-[var(--color-text-muted)] mx-auto mb-2" />
                            <p className="text-[var(--color-text-muted)]">Gráfico de barras - Ventas mensuales</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
                <div className="px-6 pt-4">
                    <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">
                        <PieChart className="h-5 w-5" />
                        <span>Productos Más Vendidos</span>
                    </div>
                </div>
                <div className="p-6">
                    <div className="h-64 flex items-center justify-center bg-[var(--color-bg)]/50 rounded-xl">
                        <div className="text-center">
                            <PieChart className="h-12 w-12 text-[var(--color-text-muted)] mx-auto mb-2" />
                            <p className="text-[var(--color-text-muted)]">Gráfico circular - Distribución de productos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


