import { Truck, Shield, Headphones, ShoppingBag } from "lucide-react";

const dataFeatures = [
    {
        icon: Truck,
        title:'Envio Gratuito',
        description: 'En pedidos superiores a $50',
        bgColor: 'bg-[var(--color-brand)]/10',
        iconColor: 'text-[var(--color-brand)]'
    },
    {
        icon: Shield,
        title:'Garantia Total',
        description: '30 dias de garantia completa',
        bgColor: 'bg-[var(--color-success)]/10',
        iconColor: 'text-[var(--color-success)]'
    },
    {
        icon: Headphones,
        title:'Soporte 24/7',
        description: 'Atencion personalizada siempre',
        bgColor: 'bg-[var(--color-warning)]/10',
        iconColor: 'text-[var(--color-warning)]'
    },
    {
        icon: ShoppingBag,
        title:'Compra Segura',
        description: 'Pago 100% seguro y protegido',
        bgColor: 'bg-[var(--color-info)]/10',
        iconColor: 'text-[var(--color-info)]'
    },
]

export default function Features() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {
                dataFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div 
                            className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            key={index}
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <div className={`p-3 ${feature.bgColor} rounded-full`}>
                                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}