import { DollarSign, ShoppingCart, Users, Package, TrendingUp } from "lucide-react";

export default function KpiCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
                <div className="p-5">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <DollarSign className="h-8 w-8 text-[var(--color-success)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Ingresos Totales</p>
                            <p className="text-xl font-semibold text-[var(--color-text)]">$579,675</p>
                            <div className="flex items-center justify-center lg:justify-start text-xs text-[var(--color-success)]">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +15.2%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
                <div className="p-5">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <ShoppingCart className="h-8 w-8 text-[var(--color-brand)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Pedidos Totales</p>
                            <p className="text-xl font-semibold text-[var(--color-text)]">2,308</p>
                            <div className="flex items-center justify-center lg:justify-start text-xs text-[var(--color-success)]">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +8.7%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
                <div className="p-5">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Users className="h-8 w-8 text-[var(--color-warning)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Nuevos Clientes</p>
                            <p className="text-xl font-semibold text-[var(--color-text)]">1,921</p>
                            <div className="flex items-center justify-center lg:justify-start text-xs text-[var(--color-success)]">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +22.1%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
                <div className="p-5">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Package className="h-8 w-8 text-[var(--color-brand)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Ticket Promedio</p>
                            <p className="text-xl font-semibold text-[var(--color-text)]">$251.12</p>
                            <div className="flex items-center justify-center lg:justify-start text-xs text-[var(--color-success)]">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                +6.3%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}