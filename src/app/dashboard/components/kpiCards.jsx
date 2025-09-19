import { 
    DollarSign, 
    ShoppingCart, 
    Users, 
    TrendingUp,
} from "lucide-react";

const kpiData = [
    {
      title: "Ingresos Totales",
      value: "$156,890",
      change: { value: 12.5, type: 'increase'},
      icon: DollarSign,
    },
    {
      title: "Ventas del Mes",
      value: "2,845",
      change: { value: 8.2, type: 'increase'},
      icon: ShoppingCart,
    },
    {
      title: "Clientes Activos",
      value: "1,249",
      change: { value: 15.3, type: 'increase'},
      icon: Users,
    },
    {
      title: "Ticket Promedio",
      value: "$89.50",
      change: { value: 3.1, type: 'decrease'},
      icon: TrendingUp,
    },
];

export default function KpiCard() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-6 mb-6">
            {kpiData.map((kpi, index) => (
                <div key={index} className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-muted)] flex items-center justify-between transition duration-200 shadow-sm hover:shadow-lg">
                    <div className="flex-1">
                        <p className="text-sm font-medium text-[var(--color-text-muted)]">{kpi.title}</p>
                        <div className="flex items-end gap-2 mt-2">
                            <h3 className="text-2xl font-bold text-[var(--color-text)]">{kpi.value}</h3>
                            {kpi.change && (
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                kpi.change.type === 'increase' 
                                ? "text-[var(--color-success)] bg-[var(--color-success)]/10" 
                                : "text-[var(--color-danger)] bg-[var(--color-danger)]/10"
                            }`}>
                                {kpi.change.type === 'increase' ? '+' : ''}{kpi.change.value}%
                            </span>
                            )}
                        </div>
                    </div>
                    <div className="p-3 bg-[var(--color-brand)]/10 rounded-lg">
                        <kpi.icon className="h-6 w-6 text-[var(--color-brand)]" />
                    </div>
                </div>
            ))}
        </div>
    );
}