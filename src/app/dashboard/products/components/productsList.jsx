'use client'
import { useSearch } from "../../../context/searchContext";
import { useMemo } from "react";

const mockProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Electrónicos",
      price: 999.99,
      stock: 25,
      status: "activo",
      sku: "IP15P-128"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Electrónicos",
      price: 849.99,
      stock: 12,
      status: "activo",
      sku: "SGS24-256"
    },
    {
      id: 3,
      name: "MacBook Air M3",
      category: "Computadoras",
      price: 1299.99,
      stock: 8,
      status: "activo",
      sku: "MBA-M3-512"
    },
    {
      id: 4,
      name: "AirPods Pro",
      category: "Accesorios",
      price: 249.99,
      stock: 0,
      status: "agotado",
      sku: "APP-GEN3"
    }
];

const getStatusColor = (status) => {
    switch (status) {
      case 'activo':
        return 'text-[var(--color-success)] bg-[var(--color-success)]/10';
      case 'agotado':
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

const getStockColor = (stock) => {
    if (stock === 0) return 'text-[var(--color-danger)]';
    if (stock < 10) return 'text-[var(--color-warning)]';
    return 'text-[var(--color-text)]';
};

export default function ProductsList() {
    const { searchQuery } = useSearch()

    // Filtrar productos basado en la búsqueda
    const filteredProducts = useMemo(() => {
        if (!searchQuery.trim()) return mockProducts

        const normalizedQuery = searchQuery.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Elimina acentos

        return mockProducts.filter(product => {
            const normalizedName = product.name.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
            
            const normalizedCategory = product.category.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')

            const normalizedSku = product.sku.toLowerCase()

            return normalizedName.includes(normalizedQuery) ||
                   normalizedCategory.includes(normalizedQuery) ||
                   normalizedSku.includes(normalizedQuery)
        })
    }, [searchQuery]) // Removido mockProducts de las dependencias
    
    return (
        <div className="bg-[var(--color-surface)] shadow-sm mt-6 rounded-xl border border-[var(--color-muted)] overflow-hidden flex items-center justify-between transition duration-200 hover:shadow-lg">
          <div className="h-max w-full">
            <div className="flex items-center justify-between p-6">
                <span className="text-xl font-bold">Lista de Productos</span>
                {searchQuery && (
                    <span className="text-sm text-[var(--color-text-muted)]">
                        {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''} 
                        {searchQuery && ` para "${searchQuery}"`}
                    </span>
                )}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                    <thead className="text-left text-[var(--color-text-muted)]">
                        <tr>
                            <th className="px-6 py-3">Producto</th>
                            <th className="px-6 py-3">Categoría</th>
                            <th className="px-6 py-3">SKU</th>
                            <th className="px-6 py-3">Precio</th>
                            <th className="px-6 py-3">Stock</th>
                            <th className="px-6 py-3">Estado</th>
                            <th className="px-6 py-3 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <tr key={product.id} className="border-t border-[var(--color-muted)]">
                                <td className="px-6 py-4 font-medium">{product.name}</td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4 font-mono text-xs">{product.sku}</td>
                                <td className="px-6 py-4">${product.price}</td>
                                <td className={`px-6 py-4 ${getStockColor(product.stock)}`}>{product.stock}</td>
                                <td className="px-6 py-4">{getStatusBadge(product.status)}</td>
                                <td className="px-6 py-4 text-right">
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
                            <td colSpan="7" className="px-6 py-8 text-center text-[var(--color-text-muted)]">
                                {searchQuery 
                                    ? `No se encontraron productos que coincidan con "${searchQuery}"`
                                    : "No hay productos disponibles"
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