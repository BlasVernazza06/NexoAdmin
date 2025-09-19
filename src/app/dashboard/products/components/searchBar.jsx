'use client'

import { Funnel, Search } from "lucide-react";
import { useSearch } from "../../../context/searchContext";

export default function SearchBar({data}) {
    const { searchQuery, setSearchQuery, clearSearch } = useSearch()

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
      }
    
    const handleClearSearch = () => {
    clearSearch()
    }

    return (
        <div className="flex sm:flex-row gap-4 border border-[var(--color-muted)] shadow bg-white mt-6 p-7 rounded-xl">
            <div className="relative w-full">
                <Search aria-hidden className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--color-text-muted)]'/>
                <input 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Buscar productos..."
                    className="w-full pl-10 border border-[var(--color-muted)] rounded-xl p-2"    
                />
            </div>
            <button className="w-max flex items-center border border-[var(--color-muted)] rounded-xl shadow cursor-pointer p-2 gap-2 ">
                <Funnel className="size-5"/>
                Filtros
            </button>
        </div>
    );
}