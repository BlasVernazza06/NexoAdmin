import { Package, BarChart3, Users } from "lucide-react";

export default function CustomersData() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Users className="h-8 w-8 text-[var(--color-brand)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Total Clientes</p>
                            <p className="text-xl font-bold text-nexo-text">1,234</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Users className="h-8 w-8 text-[var(--color-success)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Clientes Activos</p>
                            <p className="text-xl font-bold text-nexo-text">$89,450</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Users className="h-8 w-8 text-[var(--color-warning)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Clientes VIP</p>
                            <p className="text-xl font-bold text-nexo-text">23</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Users className="h-8 w-8 text-[var(--color-brand)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Nuevos (Este mes)</p>
                            <p className="text-xl font-bold text-nexo-text">5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}