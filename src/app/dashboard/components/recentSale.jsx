import { ArrowUpRight } from "lucide-react";

const recentSales = [
    { id: "1", customer: "María González", amount: "$234.50", status: "Completada", date: "2024-01-15" },
    { id: "2", customer: "Carlos Ruiz", amount: "$89.90", status: "Pendiente", date: "2024-01-15" },
    { id: "3", customer: "Ana Martínez", amount: "$456.78", status: "Completada", date: "2024-01-14" },
    { id: "4", customer: "Luis Pérez", amount: "$123.45", status: "Completada", date: "2024-01-14" },
    { id: "5", customer: "Carmen López", amount: "$678.90", status: "Procesando", date: "2024-01-13" },
];

const getStatusColor = (status) => {
    switch (status) {
      case 'Completada':
        return 'text-[var(--color-success)] bg-[var(--color-success)]/10';
      case 'Pendiente':
        return 'text-[var(--color-warning)] bg-[var(--color-warning)]/10';
      case 'Procesando':
        return 'text-[var(--color-info)] bg-[var(--color-info)]/10';
      default:
        return 'text-[var(--color-text-muted)] bg-[var(--color-muted)]';
    }
};

export default function RecentSale() {
    return (
        <div className="bg-[var(--color-surface)] shadow-sm  rounded-xl border border-[var(--color-muted)] flex items-center justify-between transition duration-200 hover:shadow-lg">
          <div className="h-max w-full">
            <div className="flex items-center justify-between  p-6">
                <span className="text-xl font-semibold">Ventas Recientes</span>
                <button className="flex items-center gap-3 text-sm">
                    <ArrowUpRight className="h-4 w-4" />
                    Ver todas
                </button>
            </div>
            <div className="p-0">
              <div className="space-y-0">
                {recentSales.map((sale, index) => (
                  <div
                    key={sale.id}
                    className="flex w-full items-center justify-between p-4 hover:bg-muted/30 transition-colors border-b border-[var(--color-muted)]/30 last:border-b-0"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-nexo-text text-sm">
                        {sale.customer}
                      </p>
                      <p className="text-xs text-nexo-text-muted">
                        {sale.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-nexo-text text-sm">
                        {sale.amount}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(sale.status)}`}>
                        {sale.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    );
}