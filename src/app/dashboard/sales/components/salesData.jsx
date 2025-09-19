import { Package, BarChart3, Users } from "lucide-react";

export default function SalesData() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-[var(--color-brand)] mb-2" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Ventas Hoy</p>
                            <p className="text-xl font-bold text-nexo-text">$4,124.90</p>
                        </div>
                    </div>
                </div>
            </div>
                     
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-[var(--color-success)] mb-2" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Pedidos Hoy</p>
                            <p className="text-xl font-bold text-nexo-text">28</p>
                        </div>
                    </div>
                </div>
            </div>
                     
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-[var(--color-warning)] mb-2" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Ticket Promedio</p>
                            <p className="text-xl font-bold text-nexo-text">$147.32</p>
                        </div>
                    </div>
                </div>
            </div>
                     
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Users className="h-8 w-8 text-[var(--color-brand)] mb-2" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Este Mes</p>
                            <p className="text-xl font-bold text-nexo-text">$89,450</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}