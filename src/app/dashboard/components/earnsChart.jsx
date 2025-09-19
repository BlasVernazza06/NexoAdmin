import { TrendingUp } from "lucide-react";

export default function EarnsChart() {
    return (
        <div className="bg-[var(--color-surface)] lg:col-span-2 shadow-sm p-6 flex rounded-xl border border-[var(--color-muted)] transition duration-200 hover:shadow-lg">
            <div className="w-full">
                <header>
                    <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-[var(--color-brand)]" />
                        <p className="font-semibold text-xl">Ingresos por Mes</p>
                    </div>
                </header>
                <div className="flex h-full w-full items-center justify-center p-6">
                    <div className="h-max p-4 bg-gradient-to-br from-[var(--color-brand)]/5 to-[var(--color-accent)]/5 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-[var(--color-brand)]" />
                            </div>
                            <p className="text-nexo-text-muted">
                                Gráfico de ingresos aquí
                            </p>
                            <p className="text-sm text-nexo-text-muted mt-1">
                                Integración con biblioteca de gráficos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}