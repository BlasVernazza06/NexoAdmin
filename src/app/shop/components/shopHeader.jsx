import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const NavLinks = [
    {
        title: "Inicio",
        href: "/shop",
    },
    {
        title: "Productos",
        href: "/productos",
    },
    {
        title: "Categorias",
        href: "/categories",
    },
    {
        title: "Ofertas",
        href: "/productos",
    },
    {
        title: "Contacto",
        href: "/productos",
    }
]

export default function ShopHeader() {
    return (
        <header className="flex flex-col py-4 bg-[var(--color-surface)] border-b border-[var(--color-muted)] shadow-sm sticky top-0 z-50">
            <div className="container mx-auto">
                <div className="flex items-center justify-between border-b border-[var(--color-muted)]/100 pb-2">
                    <div className="flex items-center gap-1">
                        <div className="rounded-lg bg-[var(--color-brand)] px-2 py-1 h-max">
                            <span className="text-white font-bold text-xl">N</span>
                        </div>

                        <span className="font-bold text-xl">NexoShop</span>
                    </div>

                    <div>

                    </div>

                    <div className="flex items-center gap-3">
                        <Link 
                            className="flex justify-center items-center hover:bg-[var(--color-muted)] p-2 rounded-lg cursor-pointer"
                            href={'/shop/Cart'}
                        >
                            <ShoppingCart className="size-5"/>
                        </Link>

                        <div className="flex gap-2 hover:bg-[var(--color-muted)] p-2 rounded-lg cursor-pointer">
                            <User/>
                            <span>Inicia Sesion</span>
                        </div>
                    </div>
                </div>

                <nav className="flex gap-7 mt-3">
                    {
                        NavLinks.map((nav, index) => (
                            <Link
                                key={index}
                                href={nav.href}
                                className="text-md hover:text-[var(--color-brand)]"
                            >
                                <span>{nav.title}</span>
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </header>
    );
}