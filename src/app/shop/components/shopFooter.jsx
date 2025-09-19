import { Facebook, Instagram, Phone, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ShopFooter() {
    return (
        <div className="bg-[var(--color-surface)] border-t border-[var(--color-muted)] mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[var(--color-brand)] rounded-md flex items-center justify-center">
                                <span className="text-[var(--color-brand-contrast)] font-bold text-lg">
                                    N
                                </span>
                            </div>
                            <span className="text-xl font-bold text-[var(--color-text)]">
                                NexoShop
                            </span>
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                            Tu tienda de confianza para productos de calidad. Ofrecemos la mejor experiencia de compra online con envios rapidos y atencion personalizada.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href=""
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                            >
                                <Facebook/>
                            </a>
                            <a 
                                href=""
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                            >
                                <Twitter/>
                            </a>
                            <a 
                                href=""
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                            >
                                <Instagram/>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-[var(--color-text)] text-lg">Tienda</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Todos los Productos
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Categorias
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Ofertas Especiales
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Productos Nuevos
                            </Link>                           
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-[var(--color-text)] text-lg">Atencion al Cliente</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Mi Cuenta
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Mis Pedidos
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Centro de Ayuda
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Devoluciones
                            </Link>
                            <Link href={"/tienda/mi-cuenta"} className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm">
                                Información de Envíos
                            </Link>                            
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-[var(--color-text)] text-lg">Contacto</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <MapPin className="size-4 text-[var(--color-text-muted)] flex-shrink-0"/>
                                <span className="text-[var(--color-text-muted)] text-sm">
                                    Av. Principal 123, Ciudad, País
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="size-4 text-[var(--color-text-muted)] flex-shrink-0"/>
                                <span className="text-[var(--color-text-muted)] text-sm">
                                    +1 234 567 890
                                </span>
                            </div>
                            <div>
                                <Mail className="size-4 text-[var(--color-text-muted)] flex-shrink-0"/>
                                <span className="text-[var(--color-text-muted)] text-sm">contacto@nexoshop.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-[var(--color-muted)] space-y-4 md:space-y-0">
                    <p className="text-[var(--color-text-muted)] text-sm">
                        @ 2025 NexoShop. Todos los derechos reservados.
                    </p>
                    <nav className="flex space-x-6">
                        <Link
                            href={'/'}
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm"
                        >
                            Política de Privacidad
                        </Link>
                        <Link
                            href={'/'}
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm"
                        >
                            Términos de Uso
                        </Link>
                        <Link
                            href={'/'}
                            className="text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors text-sm"
                        >
                            Política de Cookies
                        </Link>
                    </nav>
                </div>
            </div>
            ShopFooter
        </div>
    );
}