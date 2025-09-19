'use client'

import { 
    LayoutDashboard, 
    Package, 
    Users, 
    ShoppingCart, 
    BarChart3, 
    UserCheck,
} from "lucide-react";

import { usePathname } from "next/navigation";

const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Productos",
      url: "/dashboard/products",
      icon: Package,
    },
    {
      title: "Clientes",
      url: "/dashboard/customers",
      icon: Users,
    },
    {
      title: "Ventas",
      url: "/dashboard/sales",
      icon: ShoppingCart,
    },
    {
      title: "Reportes",
      url: "/dashboard/reports",
      icon: BarChart3,
    },
    {
      title: "Usuarios",
      url: "/dashboard/users",
      icon: UserCheck,
    },
];

export default function NavLinks({ isCollapsed = false }) {
    const pathname = usePathname();
    
    return (
        <nav className="py-6 px-2 space-y-2">
            <p className={`px-3 pb-4 text-[var(--color-text-muted)] text-sm font-bold transition-opacity duration-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                PRINCIPAL
            </p>
            {menuItems.map((item) => (
                <a 
                    key={item.url} 
                    href={item.url} 
                    className={`flex items-center gap-3 px-3 py-2 text-sm rounded-xl group transition-all duration-200
                        ${pathname === item.url 
                            ? `bg-[var(--color-brand)]/20 text-[var(--color-brand)] border-r-2 border-[var(--color-brand)] font-medium` 
                            : `text-[var(--color-text-muted)] hover:bg-[var(--color-muted)]/50 hover:text-black`
                        }
                    `}
                    title={isCollapsed ? item.title : undefined}
                >
                    <item.icon className="size-4 flex-shrink-0"/>
                    <span className={`transition-opacity duration-200 whitespace-nowrap ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                        {item.title}
                    </span>
                </a>
            ))}
        </nav>
    );
}