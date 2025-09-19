import Link from "next/link";

const categories = [
    { name: "Electrónicos", image: "/placeholder.svg", count: 156 },
    { name: "Computadoras", image: "/placeholder.svg", count: 89 },
    { name: "Hogar", image: "/placeholder.svg", count: 234 },
    { name: "Deportes", image: "/placeholder.svg", count: 167 },
    { name: "Moda", image: "/placeholder.svg", count: 298 },
    { name: "Audio", image: "/placeholder.svg", count: 78 }
];

export default function CategoriesSec() {
    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-nexo-text mb-4">
                    Explora por Categorías
                </h2>
                <p className="text-nexo-text-muted max-w-2xl mx-auto">
                    Encuentra exactamente lo que buscas en nuestras categorías organizadas
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        href={`/shop/categoria/${category.name.toLowerCase()}`}
                        className="group"
                    >
                        <div className="text-center p-4 shadow-md rounded-xl bg-white transition-all duration-200 group-hover:scale-105">
                            <div>
                                <div className="space-y-3">
                                    <div className="aspect-square bg-[var(--color-bg)] rounded-lg overflow-hidden">
                                        <img
                                            src={category.image}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-nexo-text group-hover:text-[var(--color-brand)] transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-xs text-nexo-text-muted">
                                        {category.count} productos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}