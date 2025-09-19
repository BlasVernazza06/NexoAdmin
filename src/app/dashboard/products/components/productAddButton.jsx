'use client'
import { Plus, X } from "lucide-react";
import { useState, useRef } from "react";

export default function ProductAddButton() {
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({
        name: 'iPhone 15 Pro',
        sku: 'IP15P-128',
        category: '',
        status: 'activo',
        price: '999.99',
        stock: '25',
        description: ''
    })
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        console.log("Imagen seleccionada:", file);
        // Acá podés manejar la imagen (preview, subir a servidor, etc.)
        }
    };

    const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const CATEGORY_OPTIONS = [
        { value: 'electronicos', label: 'Electrónicos' },
        { value: 'computadoras', label: 'Computadoras' },
        { value: 'accesorios', label: 'Accesorios' },
        { value: 'hogar', label: 'Hogar' },
        { value: 'ropa', label: 'Ropa' },
    ]
    const STATUS_OPTIONS = [
        { value: 'activo', label: 'Activo' },
        { value: 'borrador', label: 'Borrador' },
        { value: 'inactivo', label: 'Inactivo' },
    ]
    const [openCategory, setOpenCategory] = useState(false)
    const [openStatus, setOpenStatus] = useState(false)
    const [highlightedCategory, setHighlightedCategory] = useState(CATEGORY_OPTIONS[0].value)
    const [highlightedStatus, setHighlightedStatus] = useState(STATUS_OPTIONS[0].value)
    const onSubmit = (e) => {
        e.preventDefault()
        // Aquí podrías enviar los datos
        setModal(false)
    }
    return (
        <div className="flex items-center gap-3">
            <button
                className="flex items-center gap-2 text-sm font-medium cursor-pointer text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand)]/88 shadow-sm rounded-xl px-3 py-2"
                onClick={() => setModal(!modal)}
            >
                <Plus className="size-4"/>
                Nuevo Producto
            </button>

            {modal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center">
                    <div className="absolute inset-0 bg-black/30" onClick={() => setModal(false)} />

                    <div className="relative mt-10 w-[min(700px,95vw)] rounded-2xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-xl">
                        <header className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-muted)]">
                            <p className="text-lg font-semibold text-[var(--color-text)]">Nuevo Producto</p>
                            <button aria-label="Cerrar" onClick={() => setModal(false)} className="p-2 rounded-md hover:bg-[var(--color-bg)]">
                                <X className="size-4 text-[var(--color-text-muted)]"/>
                            </button>
                        </header>

                        <form onSubmit={onSubmit} className="px-6 py-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm text-[var(--color-text)]">Nombre del Producto</label>
                                    <input name="name" value={form.name} onChange={onChange} className="h-10 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] px-3 text-sm text-[var(--color-text)] w-full" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm text-[var(--color-text)]">SKU</label>
                                    <input name="sku" value={form.sku} onChange={onChange} className="h-10 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] px-3 text-sm text-[var(--color-text)] w-full" />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm text-[var(--color-text)]">Categoría</label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="w-full h-10 px-3 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] text-sm text-[var(--color-text)] flex items-center justify-between"
                                            onClick={() => { setOpenCategory(!openCategory); setOpenStatus(false); setHighlightedCategory(CATEGORY_OPTIONS[0].value); }}
                                        >
                                            <span>{form.category ? CATEGORY_OPTIONS.find(o=>o.value===form.category)?.label : 'Seleccionar categoría'}</span>
                                            <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
                                        </button>
                                        {openCategory && (
                                            <ul className="absolute z-10 mt-2 w-full rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-md p-1">
                                                {CATEGORY_OPTIONS.map(opt => (
                                                    <li key={opt.value}>
                                                        <button
                                                            type="button"
                                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between border transition-colors duration-150 ${
                                                                form.category === opt.value
                                                                    ? 'bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)] font-semibold'
                                                                    : highlightedCategory === opt.value
                                                                        ? 'bg-[var(--color-accent)]/30 text-[var(--color-text)] border-[var(--color-accent)]'
                                                                        : 'text-[var(--color-text)] border-transparent hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]'
                                                            }`}
                                                            onMouseEnter={() => setHighlightedCategory(opt.value)}
                                                            onClick={() => { setForm(prev=>({...prev, category: opt.value})); setOpenCategory(false); }}
                                                        >
                                                            <span className="flex items-center gap-2">
                                                                {form.category === opt.value ? (
                                                                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                                                ) : highlightedCategory === opt.value ? (
                                                                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                                                ) : (
                                                                    <span className="inline-block w-2 h-2 rounded-full bg-transparent border border-[var(--color-muted)]" />
                                                                )}
                                                                {opt.label}
                                                            </span>
                                                            {form.category === opt.value && (
                                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                                            )}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm text-[var(--color-text)]">Estado</label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="w-full h-10 px-3 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] text-sm text-[var(--color-text)] flex items-center justify-between"
                                            onClick={() => { setOpenStatus(!openStatus); setOpenCategory(false); setHighlightedStatus(STATUS_OPTIONS[0].value); }}
                                        >
                                            <span>{STATUS_OPTIONS.find(o=>o.value===form.status)?.label}</span>
                                            <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
                                        </button>
                                        {openStatus && (
                                            <ul className="absolute z-10 mt-2 w-full rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-md p-1">
                                                {STATUS_OPTIONS.map(opt => (
                                                    <li key={opt.value}>
                                                        <button
                                                            type="button"
                                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between border transition-colors duration-150 ${
                                                                form.status === opt.value
                                                                    ? 'bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)] font-semibold'
                                                                    : highlightedStatus === opt.value
                                                                        ? 'bg-[var(--color-accent)]/30 text-[var(--color-text)] border-[var(--color-accent)]'
                                                                        : 'text-[var(--color-text)] border-transparent hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]'
                                                            }`}
                                                            onMouseEnter={() => setHighlightedStatus(opt.value)}
                                                            onClick={() => { setForm(prev=>({...prev, status: opt.value})); setOpenStatus(false); }}
                                                        >
                                                            <span className="flex items-center gap-2">
                                                                {form.status === opt.value ? (
                                                                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                                                ) : highlightedStatus === opt.value ? (
                                                                    <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                                                ) : (
                                                                    <span className="inline-block w-2 h-2 rounded-full bg-transparent border border-[var(--color-muted)]" />
                                                                )}
                                                                {opt.label}
                                                            </span>
                                                            {form.status === opt.value && (
                                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                                            )}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm text-[var(--color-text)]">Precio ($)</label>
                                    <input name="price" value={form.price} onChange={onChange} className="h-10 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] px-3 text-sm text-[var(--color-text)] w-full" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm text-[var(--color-text)]">Stock</label>
                                    <input name="stock" value={form.stock} onChange={onChange} className="h-10 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] px-3 text-sm text-[var(--color-text)] w-full" />
                                </div>
                            </div>

                            <div className="mt-4 space-y-1">
                                <label className="text-sm text-[var(--color-text)]">Descripción</label>
                                <textarea name="description" value={form.description} onChange={onChange} rows={4} className="w-full rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)]" placeholder="Descripción detallada del producto..." />
                            </div>

                            <div className="mt-4 space-y-2">
                                <label className="text-sm text-[var(--color-text)]">Imagen del Producto</label>

                                {/* Contenedor de la zona de drop */}
                                <div
                                    onClick={handleClick}
                                    className="cursor-pointer rounded-xl border border-dashed border-[var(--color-muted)] bg-[var(--color-bg)] p-6 text-center"
                                >
                                    <div className="mx-auto mb-2 h-9 w-9 rounded-full border border-[var(--color-muted)] grid place-items-center text-[var(--color-text-muted)]">
                                        ↥
                                    </div>
                                    <p className="text-sm text-[var(--color-text-muted)]">
                                        Arrastra una imagen aquí o haz clic para seleccionar
                                    </p>
                                    <button
                                        type="button"
                                        className="mt-3 cursor-pointer rounded-xl border border-[var(--color-muted)] px-3 py-2 text-sm"
                                    >
                                        Seleccionar Imagen
                                    </button>
                                </div>

                                {/* Input oculto */}
                                <input
                                    ref={inputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>

                            <div className="mt-6 flex justify-end gap-2 border-t border-[var(--color-muted)] pt-4">
                                <button type="button" onClick={() => setModal(false)} className="px-4 py-2 rounded-xl border border-[var(--color-muted)]">Cancelar</button>
                                <button type="submit" className="px-4 py-2 rounded-xl bg-[var(--color-brand)] text-[var(--color-brand-contrast)]">Crear Producto</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}