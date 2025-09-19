import ProductsData from "./components/productsData";
import SearchBar from "./components/searchBar";
import ProductsList from "./components/productsList";
import ProductAddButton from "./components/productAddButton";

const mockProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Electrónicos",
      price: 999.99,
      stock: 25,
      status: "activo",
      sku: "IP15P-128"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      category: "Electrónicos",
      price: 849.99,
      stock: 12,
      status: "activo",
      sku: "SGS24-256"
    },
    {
      id: 3,
      name: "MacBook Air M3",
      category: "Computadoras",
      price: 1299.99,
      stock: 8,
      status: "activo",
      sku: "MBA-M3-512"
    },
    {
      id: 4,
      name: "AirPods Pro",
      category: "Accesorios",
      price: 249.99,
      stock: 0,
      status: "agotado",
      sku: "APP-GEN3"
    }  
];


export default function ProductsPage() {
    return (
        <div className="px-7 py-6">
            <header className="flex justify-between items-center pb-10">
                <div>
                    <p className="font-bold text-3xl">Productos</p>
                    <span className="text-sm text-[var(--color-text-muted)]">Gestiona tu inventario de productos</span>
                </div>

                <ProductAddButton/>
            </header>

            <ProductsData/>

            <SearchBar data={mockProducts}/>

            <ProductsList/>
        </div>
    );
}
