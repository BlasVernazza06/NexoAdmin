'use client'
import { useState } from "react";
import { ArrowLeft, Badge, Minus, Plus, ShoppingBag, Tag, Trash2, Truck } from "lucide-react";
import Link from "next/link";
import { Toast } from "@radix-ui/react-toast";

const initialCartItems = [
    {
      id: 1,
      name: "Smartphone Pro Max 256GB",
      price: 899.99,
      originalPrice: 1199.99,
      quantity: 1,
      image: "/placeholder.svg",
      color: "Negro",
      storage: "256GB",
      inStock: true
    },
    {
      id: 2,
      name: "Auriculares Inalámbricos Premium",
      price: 179.99,
      originalPrice: 249.99,
      quantity: 2,
      image: "/placeholder.svg",
      color: "Blanco",
      inStock: true
    },
    {
      id: 3,
      name: "Smartwatch Fitness Pro",
      price: 299.99,
      originalPrice: null,
      quantity: 1,
      image: "/placeholder.svg",
      color: "Negro",
      size: "42mm",
      inStock: false
    }
];

export default function Cart() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [promoCode, setPromoCode] = useState("");
    const [appliedPromo, setAppliedPromo] = useState(null);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity === 0) {
          removeItem(id);
          return;
        }
        
        setCartItems(items =>
          items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
          )
        );
    };
    
    const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
    Toast.success("Producto eliminado del carrito");
    };

    const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "descuento10") {
        setAppliedPromo(promoCode);
        Toast.success("¡Código promocional aplicado!");
    } else {
        Toast.error("Código promocional inválido");
    }
    setPromoCode("");
    };
    
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = appliedPromo ? subtotal * 0.1 : 0;
    const shipping = subtotal > 100 ? 0 : 15.99;
    const tax = (subtotal - discount) * 0.08;
    const total = subtotal - discount + shipping + tax;


    if(cartItems.length === 0){
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-nexo-text-muted" />
                    </div>
                    <h2 className="text-2xl font-bold text-nexo-text mb-4">Tu carrito está vacío</h2>
                    <p className="text-nexo-text-muted mb-8">¡Descubre nuestros increíbles productos!</p>
                    <Link href={"/shop/Productos"}>
                        Continuar Comprando
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-col gap-5">
                <Link
                    href={'/shop/Productos'}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="size-4 mr-2"/>
                    Continuar Comprando
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-[var(--color-text)]">Carrito de Compras</h1>
                    <p className="text-[var(--color-text-muted)]">{cartItems.length} productos en tu carrito</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="p-6 bg-white rounded-xl border border-[var(--color-muted)]"
                            >
                                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                                    <div className="flex-shrink-0">
                                        <img 
                                            src={item.image}     
                                            alt={item.name}
                                            className="size-24 object-cover rounded-md"
                                        />
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-semibold text-[var(--color-text)] mb-1">{item.name}</h3>
                                                <div className="flex items-center space-x-4 text-sm text-[var(--color-text-muted)]">
                                                    {item.color && <span>Color: {item.color}</span>}
                                                    {item.storage && <span>Almacenamiento: {item.storage}</span>}
                                                    {item.size && <span>Tamaño: {item.size}</span>}
                                                </div>
                                                {
                                                    !item.inStock && (
                                                        <div className="bg-red-100 text-red-800 mt-2">Sin Stock</div>
                                                    )
                                                }
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 text-[var(--color-text-muted)] hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="size-4"/>
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg font-bold text-[var(--color-text)]">
                                                        ${item.price.toFixed(2)}
                                                    </span>
                                                    {
                                                        item.originalPrice && (
                                                            <span className="text-sm text-[var(--color-text-muted)] line-through">
                                                                ${item.originalPrice.toFixed(2)}
                                                            </span>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={!item.inStock}
                                                    className="p-1 rounded-sm border border-muted hover:bg-[var(--color-muted)] transition-colors disabled:opacity-50"
                                                >
                                                    <Minus className="size-4"/>
                                                </button>
                                                <span className="w-12 text-center font-medium text-[var(--color-text)]">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    disabled={!item.inStock}
                                                    className="p-1 rounded-sm border border-[var(--color-muted)] hover:bg-[var(--color-muted)] transition-colors disabled:opacity-50"
                                                >
                                                    <Plus className="size-4"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="space-y-6">
                    <div className="p-6  bg-white rounded-xl border border-[var(--color-muted)]">
                        <h3 className="font-semibold text-[var(--color-text)] mb-4 flex items-center">
                            <Tag className="size-4 mr-2"/>
                            Codigo Promocional
                        </h3>
                        <div className="space-y-3">
                            <div className="flex space-x-2">
                                <input  
                                    type="text"
                                    placeholder="Ingresa tu codigo"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-[var(--color-muted)] rounded-md bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)] text-sm"
                                />
                                <button onClick={applyPromoCode}>
                                    Aplicar
                                </button>
                            </div>
                            {
                                appliedPromo && (
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Codigo aplicado: {appliedPromo}</span>
                                        <button
                                            onClick={() => setAppliedPromo(null)}
                                            className="text-[var(--color-text-muted)] hover:text-red-500"
                                        >
                                            Remover
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-[var(--color-muted)]">
                        <h3 className="font-semibold text-[var(--color-text)] mb-4 flex items-center">
                            <Truck className="size-4 mr-2"/>
                            Informacion de Envio
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-[var(--color-text-muted)]">Envio estandar (3-5 dias)</span>
                                <span className="text-[var(--color-text)]">{shipping === 0 ? "GRATIS" : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            {
                                shipping > 0 && (
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                        ¡Envio gratis en compras mayores a $100!
                                    </p>
                                )
                            }
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-[var(--color-muted)]">
                        <h3 className="font-semibold text-[var(--color-text)] mb-4">Resumen del Pedido</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            {discount > 0 && (
                                <div className="flex justify-between text-green-600">
                                    <span>Descuento</span>
                                    <span>${discount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-[var(--color-text-muted)]">Envio</span>
                                <span className="text-[var(--color-text)]">
                                    {shipping === 0 ? "GRATIS" : `$${shipping.toFixed(2)}`}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[var(--color-text-muted)]">Impuestos</span>
                                <span className="text-[var(--color-text)]">${total.toFixed(2)}</span>
                            </div>

                            <div className="border-t border-[var(--color-muted)] pt-3">
                                <div className="flex justify-between font-semibold text-lg">
                                    <span className="text-[var(--color-text-muted)]">Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col justify-center space-y-3">
                            <button className="w-full text-white bg-[var(--color-brand)] rounded-xl p-2">
                                Proceder al Checkout
                            </button>
                            <Link
                                href={'/shop/Productos'}
                                className="w-full text-center bg-white rounded-xl border border-[var(--color-muted)] p-2"
                            >
                                Continuar Comprando
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}