import { TrendingUp, Users, Shield, Zap } from "lucide-react";

export default function Branding() {
    const features = [
        {
          icon: TrendingUp,
          title: "Analytics Avanzados",
          description: "Obtén insights profundos sobre tu negocio con reportes en tiempo real"
        },
        {
          icon: Users,
          title: "Gestión de Clientes",
          description: "Administra tu base de clientes de forma eficiente y centralizada"
        },
        {
          icon: Shield,
          title: "Seguridad Empresarial",
          description: "Protección de datos de nivel empresarial con cifrado end-to-end"
        },
        {
          icon: Zap,
          title: "Automatización",
          description: "Automatiza procesos repetitivos y mejora la productividad"
        }
    ];
    
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <header className="flex flex-col justify-center items-center text-center max-w-3xl gap-5">
                <p className="text-4xl font-bold">Todo lo que necesitas para hacer crecer tu negocio</p>
                <span className="text-md text-pretty max-w-xl text-[var(--color-text-muted)]">Desde la gestión de inventario hasta análisis avanzados, NexoAdmin tiene todas las herramientas que tu empresa necesita.</span>
            </header>
            <main className="max-w-3xl xl:max-w-6xl grid grid-cols-2 grid-rows-2 xl:flex pt-20 gap-8">
                {
                   features.map((item, index) => {
                        const Icon = item.icon
                        return(
                            <div 
                                key={index}
                                className="flex flex-col items-center border border-[var(--color-muted)] rounded-xl px-5 py-10 transform-transition duration-300 hover:scale-105 will-change-transform">
                                <div className="bg-[var(--color-brand)]/10 w-max p-2 rounded-xl">
                                    <Icon className="text-[var(--color-brand)]"/>
                                </div>
                                <div className="flex flex-col gap-2 text-center pt-5">
                                    <p className="text-xl font-bold">{item.title}</p>
                                    <span className="text-[var(--color-text-muted)]">{item.description}</span>
                                </div>
                            </div>
                        )
                   }) 
                }
            </main>
        </div>
    );
}