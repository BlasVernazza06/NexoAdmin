import ShopHeader from "./components/shopHeader";
import ShopFooter from "./components/shopFooter";

export default function ShopLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
            <ShopHeader/>
            <main className="flex-1 pb-30">
                {children}
            </main>
            <ShopFooter/>
        </div>
    );
}