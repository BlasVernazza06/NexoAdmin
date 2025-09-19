import { Package, BarChart3 } from "lucide-react";

export default function ProductsData() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-[var(--color-muted)]  shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Package className="h-8 w-8 text-[var(--color-brand)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Total Productos</p>
                            <p className="text-xl font-bold text-nexo-text">1,234</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <BarChart3 className="h-8 w-8 text-[var(--color-success)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Valor Inventario</p>
                            <p className="text-xl font-bold text-nexo-text">$89,450</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Package className="h-8 w-8 text-[var(--color-warning)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Stock Bajo</p>
                            <p className="text-xl font-bold text-nexo-text">23</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border border-[var(--color-muted)] shadow-sm bg-white rounded-xl">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left">
                        <Package className="h-8 w-8 text-[var(--color-danger)] mb-2 lg:mb-0 lg:mr-4" />
                        <div>
                            <p className="text-sm font-medium text-[var(--color-text-muted)]">Agotados</p>
                            <p className="text-xl font-bold text-nexo-text">5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}