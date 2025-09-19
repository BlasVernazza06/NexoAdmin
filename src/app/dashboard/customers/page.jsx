import { Calendar, Download, Plus } from "lucide-react";
import CustomersData from "./components/customersData";
import CustomersList from "./components/customersList";
import SearchBar from "../components/searchBar";



export default function CustomersPage() {
    return (
        <div className="px-7 py-6">
            <header className="flex justify-between items-center pb-10">
                <div>
                    <p className="font-bold text-3xl">Clientes</p>
                    <span className="text-sm text-[var(--color-text-muted)]">Gestiona tu base de clientes</span>
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

            <CustomersData/>

            <SearchBar/>

            <CustomersList/>
        </div>
    );
}
