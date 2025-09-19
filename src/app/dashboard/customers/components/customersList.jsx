'use client'

import { Mail, MapPin, Phone } from "lucide-react";
import { useSearch } from "../../../context/searchContext";
import { useMemo } from "react";

const mockCustomers = [
    {
      id: 1,
      name: "María González",
      email: "maria@email.com",
      phone: "+1 234-567-8901",
      location: "Madrid, España",
      totalOrders: 12,
      totalSpent: 2850.50,
      lastOrder: "2024-01-15",
      status: "activo",
      avatar: ""
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      email: "carlos@email.com", 
      phone: "+1 234-567-8902",
      location: "Barcelona, España",
      totalOrders: 8,
      totalSpent: 1420.75,
      lastOrder: "2024-01-10",
      status: "activo",
      avatar: ""
    },
    {
      id: 3,
      name: "Ana López",
      email: "ana@email.com",
      phone: "+1 234-567-8903",
      location: "Valencia, España",
      totalOrders: 15,
      totalSpent: 3200.00,
      lastOrder: "2024-01-08",
      status: "vip",
      avatar: ""
    },
    {
      id: 4,
      name: "David Martín",
      email: "david@email.com",
      phone: "+1 234-567-8904", 
      location: "Sevilla, España",
      totalOrders: 2,
      totalSpent: 350.25,
      lastOrder: "2023-12-20",
      status: "inactivo",
      avatar: ""
    }
];

const getStatusColor = (status) => {
    switch (status) {
      case 'activo':
        return 'text-[var(--color-success)] bg-[var(--color-success)]/10';
      case 'vip':
        return 'text-[var(--color-info)] bg-[var(--color-info)]/10';
      case 'inactivo':
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

const formatCurrency = (value) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }).format(value);

const formatDate = (value) =>
    new Date(value).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });

const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

export default function CustomersList() {
    const { searchQuery } = useSearch()

    // Filtrar clientes basado en la búsqueda
    const filteredCustomers = useMemo(() => {
        if (!searchQuery.trim()) return mockCustomers

        const normalizedQuery = searchQuery.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Elimina acentos

        return mockCustomers.filter(customer => {
            const normalizedName = customer.name.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            
            const normalizedEmail = customer.email.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')

            const normalizedLocation = customer.location.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')

            return normalizedName.includes(normalizedQuery) ||
                   normalizedEmail.includes(normalizedQuery) ||
                   normalizedLocation.includes(normalizedQuery)
        })
    }, [searchQuery])

    return (
        <div className="bg-[var(--color-surface)] shadow-sm mt-6 rounded-xl border border-[var(--color-muted)] overflow-hidden flex items-center justify-between transition duration-200 hover:shadow-lg">
          <div className="h-max w-full">
            <div className="flex items-center justify-between p-6">
                <span className="text-xl font-bold">Lista de Clientes</span>
                {searchQuery && (
                    <span className="text-sm text-[var(--color-text-muted)]">
                        {filteredCustomers.length} resultado{filteredCustomers.length !== 1 ? 's' : ''} 
                        {searchQuery && ` para "${searchQuery}"`}
                    </span>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                    <thead className="text-left text-[var(--color-text-muted)]">
                        <tr>
                            <th className="px-6 py-3">Cliente</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Teléfono</th>
                            <th className="px-6 py-3">Ubicación</th>
                            <th className="px-6 py-3">Pedidos</th>
                            <th className="px-6 py-3">Gastado</th>
                            <th className="px-6 py-3">Último pedido</th>
                            <th className="px-6 py-3">Estado</th>
                            <th className="px-6 py-3 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                            <tr key={customer.id} className="border-t border-[var(--color-muted)] hover:bg-[var(--color-muted)] transition duration-200">
                                <td className="px-6 py-2 font-medium">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center">
                                            <span className="text-[var(--color-brand)] text-sm">
                                                {getInitials(customer.name)}
                                            </span>
                                        </div>
                                        <span>{customer.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-2">
                                    <div className="flex items-center gap-1">
                                        <Mail className="size-3"/>
                                        {customer.email}
                                    </div>
                                </td>
                                <td className="px-6 py-2">
                                    <div className="flex items-center gap-2">
                                        <Phone className="size-4"/>
                                        {customer.phone}
                                    </div>
                                </td>
                                <td className="px-6 py-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="size-4"/>
                                        {customer.location}
                                    </div>
                                </td>
                                <td className="px-6 py-2">{customer.totalOrders}</td>
                                <td className="px-6 py-2">{formatCurrency(customer.totalSpent)}</td>
                                <td className="px-6 py-2">{formatDate(customer.lastOrder)}</td>
                                <td className="px-6 py-2">{getStatusBadge(customer.status)}</td>
                                <td className="px-6 py-2 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button type="button" aria-label="Editar" className="p-2 rounded-md hover:bg-[var(--color-muted)]/40">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                                                <path d="M12 20h9"/>
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                            </svg>
                                        </button>
                                        <button type="button" aria-label="Eliminar" className="p-2 rounded-md text-[var(--color-danger)] hover:bg-[var(--color-muted)]/40">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                                                <polyline points="3 6 5 6 21 6"/>
                                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                                                <path d="M10 11v6"/>
                                                <path d="M14 11v6"/>
                                                <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9" className="px-6 py-8 text-center text-[var(--color-text-muted)]">
                                {searchQuery 
                                    ? `No se encontraron clientes que coincidan con "${searchQuery}"`
                                    : "No hay clientes disponibles"
                                }
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    );
}