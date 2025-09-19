import SideNav from "./components/sideNav";
import Header from "./components/header";
import { SearchProvider } from "../context/searchContext";

export default function DashLayout({ children }) {
    return (
        <SearchProvider>
            <div className="h-screen flex bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
                <SideNav />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SearchProvider>
    );
  }