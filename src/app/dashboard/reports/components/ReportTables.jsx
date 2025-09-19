// Tablas HTML nativas

const topProducts = [
  { name: "iPhone 15 Pro", sales: 45, revenue: 44955, growth: 12 },
  { name: "Samsung Galaxy S24", sales: 38, revenue: 32299, growth: 8 },
  { name: "MacBook Air M3", sales: 22, revenue: 28599, growth: 15 },
  { name: "AirPods Pro", sales: 67, revenue: 16749, growth: 5 },
  { name: "iPad Pro", sales: 18, revenue: 17982, growth: -3 }
];

const salesByMonth = [
  { month: "Enero", sales: 89450, orders: 342, customers: 287 },
  { month: "Febrero", sales: 95623, orders: 389, customers: 312 },
  { month: "Marzo", sales: 78234, orders: 298, customers: 245 },
  { month: "Abril", sales: 105789, orders: 425, customers: 356 },
  { month: "Mayo", sales: 112456, orders: 467, customers: 398 },
  { month: "Junio", sales: 98123, orders: 387, customers: 323 }
];

export default function ReportTables() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm overflow-x-auto pb-2 thin-scroll">
                <div className="px-6 pt-4">
                    <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">Top Productos</div>
                </div>
                <div className="px-6 pt-4 pb-0">
                    <table className="min-w-full table-auto text-sm">
                        <thead className="text-left text-[var(--color-text-muted)]">
                            <tr>
                                <th className="px-4 py-2">Producto</th>
                                <th className="px-4 py-2 text-right">Ventas</th>
                                <th className="px-4 py-2 text-right">Ingresos</th>
                                <th className="px-4 py-2 text-right">Crecimiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topProducts.map((product) => (
                                <tr key={product.name} className="border-t border-[var(--color-muted)]">
                                    <td className="px-4 py-2 font-medium">{product.name}</td>
                                    <td className="px-4 py-2 text-right">{product.sales}</td>
                                    <td className="px-4 py-2 text-right">${product.revenue.toLocaleString('es-ES')}</td>
                                    <td className="px-4 py-2 text-right">
                                        <span className={product.growth >= 0 ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}>
                                            {product.growth >= 0 ? "+" : ""}{product.growth}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm overflow-x-auto pb-2 thin-scroll">
                <div className="px-6 pt-4">
                    <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">Resumen Mensual</div>
                </div>
                <div className="px-6 pt-4 pb-0">
                    <table className="min-w-full table-auto text-sm">
                        <thead className="text-left text-[var(--color-text-muted)]">
                            <tr>
                                <th className="px-4 py-2">Mes</th>
                                <th className="px-4 py-2 text-right">Ventas</th>
                                <th className="px-4 py-2 text-right">Pedidos</th>
                                <th className="px-4 py-2 text-right">Clientes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesByMonth.map((month) => (
                                <tr key={month.month} className="border-t border-[var(--color-muted)]">
                                    <td className="px-4 py-2 font-medium">{month.month}</td>
                                    <td className="px-4 py-2 text-right">${month.sales.toLocaleString('es-ES')}</td>
                                    <td className="px-4 py-2 text-right">{month.orders}</td>
                                    <td className="px-4 py-2 text-right">{month.customers}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


