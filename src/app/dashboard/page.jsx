import { Calendar, Download } from "lucide-react";
import KpiCard from "./components/kpiCards";
import EarnsChart from "./components/earnsChart";
import RecentSale from "./components/recentSale";
import ActionsSec from "./components/actionsSec";

export default function HomeDashPage() {
    return (
        <div className="px-7 py-6">
            <header className="flex justify-between items-center pb-10">
                <div>
                    <p className="font-bold text-3xl">Dashboard</p>
                    <span className="text-sm text-[var(--color-text-muted)]">Resumen de tu negocio en tiempo real</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="size-4"/>
                        <span>Enero 2024</span>
                    </div>
                    <button
                        className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:bg-[var(--color-muted)]/1 border border-[var(--color-muted)] shadow-sm bg-white rounded-xl p-2"
                    >
                        <Download className="size-4"/>
                        Exportar
                    </button>
                </div>
            </header>

            <KpiCard />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <EarnsChart />

                <RecentSale />
            </div>

            <ActionsSec/>

        </div>
    );
}