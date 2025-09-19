"use client"

import { useEffect, useState, useRef } from "react";
import { 
    Settings,
    ChevronLeft,
    LogOutIcon,
    ShoppingBag
} from "lucide-react";
import NavLinks from "./nav-links";
import Link from "next/link";

const settingsItems = [
    {
        title: "Configuración",
        url: "/dashboard/settings",
        icon: Settings,
    },
];

export default function SideNav() {
    const [isDesktopOpen, setIsDesktopOpen] = useState(true);
    const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);
    const sidenavRef = useRef(null);
    const overlayRef = useRef(null);

    // Función para toggle del sidebar desde otros componentes
    useEffect(() => {
        // Si tienes un sistema global de toggle, puedes implementarlo aquí
        window.toggleSideNav = (isOpen) => {
            setIsResponsiveOpen(isOpen);
        };
        
        return () => {
            delete window.toggleSideNav;
        };
    }, []);

    // Toggle del sidebar desktop
    const toggleDesktopSidebar = () => {
        setIsDesktopOpen(!isDesktopOpen);
    };

    // Cerrar responsive nav al hacer clic en enlaces
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            setIsResponsiveOpen(false);
        }
    };

    // Cerrar con ESC
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isResponsiveOpen && window.innerWidth < 768) {
                setIsResponsiveOpen(false);
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isResponsiveOpen]);

    // Manejar clicks en el overlay
    const handleOverlayClick = () => {
        setIsResponsiveOpen(false);
    };
    
    return (
        <>
            {/* Overlay para móvil */}
            {isResponsiveOpen && (
                <div 
                    ref={overlayRef}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={handleOverlayClick}
                />
            )}
            
            {/* Sidebar */}
            <aside 
                ref={sidenavRef}
                className={`
                    fixed md:static inset-y-0 left-0 z-50
                    h-screen bg-[var(--color-surface)] border-r border-[var(--color-muted)] 
                    flex flex-col transition-all duration-300 ease-in-out
                    ${isDesktopOpen ? 'w-64' : 'w-16'} 
                    ${isResponsiveOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >
                {/* Header del sidebar */}
                <div className="h-14 flex items-center justify-between px-4 border-b border-[var(--color-muted)]">
                    <header className={`transition-opacity duration-200 ${isDesktopOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-lg font-semibold whitespace-nowrap">NexoAdmin</p>
                        <span className="text-[var(--color-text-muted)]">v1.0</span>
                    </header>
                    
                    <button 
                        onClick={toggleDesktopSidebar}
                        className={`
                            p-1.5 rounded-lg cursor-pointer hover:bg-[var(--color-muted)]/40 group
                            transition-transform duration-300 hidden md:flex
                            ${isDesktopOpen ? 'rotate-0' : 'rotate-180 -translate-x-25'}
                        `}
                    >
                        <ChevronLeft className="size-5 text-[var(--color-text-muted)] group-hover:text-black"/>
                    </button>

                    {/* Botón cerrar para móvil */}
                    <button 
                        onClick={() => setIsResponsiveOpen(false)}
                        className="p-1.5 rounded-lg cursor-pointer hover:bg-[var(--color-muted)]/40 group md:hidden"
                    >
                        <ChevronLeft className="size-5 text-[var(--color-text-muted)] group-hover:text-black"/>
                    </button>
                </div>

                {/* Navigation Links */}
                <div onClick={handleLinkClick} className="flex-1">
                    <NavLinks isCollapsed={!isDesktopOpen} />
                </div>

                {/* Sistema section - Al fondo */}
                <div className="p-2 flex flex-col gap-2">
                    {/* Botón Ir a la Tienda */}
                    <div className="mb-4">
                        <button
                            className={`
                                w-full rounded-lg font-medium text-sm transition-all duration-300
                                bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand)]/80
                                text-white hover:shadow-lg hover:shadow-[var(--color-brand)]/25
                                hover:scale-[1.02] active:scale-[0.98]
                                border border-[var(--color-brand)]/20
                                ${!isDesktopOpen ? 'flex justify-center items-center' : 'py-2.5'}
                            `}
                            title="Ir a la Tienda"
                        >
                            <Link 
                                className={`flex items-center ${!isDesktopOpen ? 'justify-center' : 'justify-center gap-2'}`}
                                href={'/shop'}    
                            >
                                <ShoppingBag className="size-4" />
                                <span className={`transition-all duration-200 ${isDesktopOpen ? 'opacity-100' : 'opacity-0 max-w-0 overflow-hidden'}`}>
                                    Ir a la Tienda
                                </span>
                            </Link>
                        </button>
                    </div>

                    <p className={`px-3 pb-4 text-[var(--color-text-muted)] text-sm font-bold transition-opacity duration-200 ${isDesktopOpen ? 'opacity-100' : 'opacity-0'}`}>
                        SISTEMA
                    </p>
                    {settingsItems.map((item) => (
                        <a 
                            key={item.url} 
                            href={item.url} 
                            className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] gap-3 px-3 py-2 rounded-lg hover:bg-[var(--color-muted)]/40 group"
                            title={!isDesktopOpen ? item.title : undefined}
                        >
                            <item.icon className="size-4 flex-shrink-0"/>
                            <span className={`text-sm transition-opacity duration-200 whitespace-nowrap ${isDesktopOpen ? 'opacity-100' : 'opacity-0'}`}>
                                {item.title}
                            </span>
                        </a>
                    ))}
                    
                    <div className="w-full">
                        <button
                            className="flex items-center cursor-pointer space-x-3 px-3 py-2 rounded-lg transition-all duration-200 text-[var(--color-danger)] hover:bg-[var(--color-danger)]/30 w-full text-left group"
                            title={!isDesktopOpen ? "Cerrar Sesión" : undefined}
                        >
                            <LogOutIcon className="size-5 flex-shrink-0"/>
                            <span className={`font-medium text-sm transition-opacity duration-200 whitespace-nowrap ${isDesktopOpen ? 'opacity-100' : 'opacity-0'}`}>
                                Cerrar Sesion
                            </span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}