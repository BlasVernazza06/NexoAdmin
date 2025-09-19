import { ArrowRight } from "lucide-react";
import Features from "./components/features";

import Link from "next/link";
import CategoriesSec from "./components/categoriesSec";

export default function Shop() {
    return (
        <div className="space-y-16">
            <section className="relative bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Descubre productos increíbles
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            La mejor selección de productos con envío gratuito y garantía de calidad
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                className="px-5 py-3 bg-white text-[var(--color-brand)] rounded-xl"
                            >
                                <Link 
                                    href={'/shop/productos'}
                                    className="flex items-center font-bold"
                                >
                                    Explorar Productos
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </button>
                            <button
                                className="text-white rounded-xl px-5 py-3 border-white hover:bg-white/10"
                            >
                                <Link 
                                    href={'/shop/ofertas'}
                                >
                                    Ver Ofertas
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto">
                <Features/>
            </section>

            <section className="container mx-auto">
                <CategoriesSec/>
            </section>
        </div>
    );
}