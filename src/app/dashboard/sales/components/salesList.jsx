
import { Eye, Download } from "lucide-react";

const mockSales = [
    {
      id: "VNT-001",
      date: "2024-01-15",
      sale: "María González",
      products: ["iPhone 15 Pro", "AirPods Pro"],
      quantity: 2,
      subtotal: 1249.98,
      tax: 124.99,
      total: 1374.97,
      status: "completado",
      paymentMethod: "Tarjeta"
    },
    {
      id: "VNT-002", 
      date: "2024-01-15",
      sale: "Carlos Rodríguez",
      products: ["Samsung Galaxy S24"],
      quantity: 1,
      subtotal: 849.99,
      tax: 84.99,
      total: 934.98,
      status: "completado",
      paymentMethod: "Efectivo"
    },
    {
      id: "VNT-003",
      date: "2024-01-14",
      sale: "Ana López", 
      products: ["MacBook Air M3", "Magic Mouse"],
      quantity: 2,
      subtotal: 1399.98,
      tax: 139.99,
      total: 1539.97,
      status: "pendiente",
      paymentMethod: "Transferencia"
    },
    {
      id: "VNT-004",
      date: "2024-01-14",
      sale: "David Martín",
      products: ["AirPods Pro"],
      quantity: 1,
      subtotal: 249.99,
      tax: 24.99,
      total: 274.98,
      status: "cancelado",
      paymentMethod: "Tarjeta"
    }
];

const getStatusColor = (status) => {
    switch (status) {
      case 'completado':
        return 'text-[var(--color-success)] bg-[var(--color-success)]/10';
      case 'pendiente':
        return 'text-[var(--color-warning)] bg-[var(--color-warning)]/10';
      case 'cancelado':
        return 'text-[var(--color-danger)] bg-[var(--color-danger)]/10';
      default:
        return 'text-[var(--color-text-muted)] bg-[var(--color-muted)]';
    }
};

const getStatusBadge = (status) => (
    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(status)}`}>
        {status}
    </span>
);

export default function SalesList() {
    return (
        <div className="bg-[var(--color-surface)] shadow-sm mt-6 rounded-xl border border-[var(--color-muted)] overflow-hidden flex items-center justify-between transition duration-200 hover:shadow-lg">
          <div className="h-max w-full">
            <div className="flex items-center justify-between  p-6">
                <span className="text-xl font-bold">Lista de Ventas</span>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
                <thead className="text-left text-[var(--color-text-muted)]">
                    <tr>
                        <th className="px-6 py-3">ID Venta</th>
                        <th className="px-6 py-3">Fecha</th>
                        <th className="px-6 py-3">Cliente</th>
                        <th className="px-6 py-3">Productos</th>
                        <th className="px-6 py-3">Cantidad</th>
                        <th className="px-6 py-3">Subtotal</th>
                        <th className="px-6 py-3">Impuestos</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">Método Pago</th>
                        <th className="px-6 py-3">Estado</th>
                        <th className="px-6 py-3 text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {mockSales.map((sale) => (
                    <tr key={sale.id} className="border-t border-[var(--color-muted)] hover:bg-[var(--color-muted)] transition duration-200">
                        <td className="px-6 py-2 font-mono text-sm">{sale.id}</td>
                        <td className="px-6 py-2">{sale.date}</td>
                        <td className="px-6 py-2 font-medium">{sale.sale}</td>
                        <td className="px-6 py-2">
                            <div className="max-w-xs">
                                <div className="text-sm">
                                    {sale.products.slice(0, 2).join(", ")}
                                    {sale.products.length > 2 && ` +${sale.products.length - 2} más`}
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-2">{sale.quantity}</td>
                        <td className="px-6 py-2">${sale.subtotal.toFixed(2)}</td>
                        <td className="px-6 py-2">${sale.tax.toFixed(2)}</td>
                        <td className="px-6 py-2 font-medium">${sale.total.toFixed(2)}</td>
                        <td className="px-6 py-2">
                            <span className="px-2 py-1 rounded-full text-xs border border-[var(--color-muted)] text-[var(--color-text)]">
                                {sale.paymentMethod}
                            </span>
                        </td>
                        <td className="px-6 py-2">{getStatusBadge(sale.status)}</td>
                        <td className="px-6 py-2 text-right">
                            <div className="flex justify-end gap-2">
                                <button type="button" aria-label="Ver" className="p-2 rounded-md hover:bg-[var(--color-muted)]/40">
                                    <Eye className="h-4 w-4" />
                                </button>
                                <button type="button" aria-label="Descargar" className="p-2 rounded-md hover:bg-[var(--color-muted)]/40">
                                    <Download className="h-4 w-4" />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
          </div>
        </div>
    );
}