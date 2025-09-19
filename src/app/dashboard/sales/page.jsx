
import { Plus } from "lucide-react";
import SearchBar from "@/app/dashboard/components/searchBar";
import SalesData from "./components/salesData";
import SalesList from "./components/salesList";

export default function Sales() {
    return (
        <div className="px-7 py-6">
            <header className="flex justify-between items-center pb-10">
                <div>
                    <p className="font-bold text-3xl">Ventas</p>
                    <span className="text-sm text-[var(--color-text-muted)]">Gestiona y analiza tus ventas</span>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center gap-2 text-sm font-medium cursor-pointer text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand)]/88 shadow-sm rounded-xl px-3 py-2"
                    >
                        <Plus className="size-4"/>
                        Nuevo Producto
                    </button>
                </div>
            </header>

            <SalesData/>

            <SearchBar/>

            <SalesList/>
        </div>
    );
}