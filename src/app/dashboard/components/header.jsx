"use client"
import { useMemo, useRef, useState, useEffect } from 'react'
import { Search, Bell, LogOut, Settings, User as UserIcon } from "lucide-react"

const mockUser = {
  name: 'Juan Díaz',
  role: 'Administrador',
  avatar: '',
}

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

export default function Header() {
  const initials = useMemo(() => getInitials(mockUser.name), []);
  const [open, setOpen] = useState(false);
  const chipRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!chipRef.current) return;
      if (!chipRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-[var(--color-surface)] border-b border-[var(--color-muted)]">
      <div className="h-14 flex justify-between items-center px-4 gap-3">
        <div className="relative w-full max-w-md">
          <Search aria-hidden className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--color-text-muted)]'/>
          <input 
            type="search" 
            placeholder="Buscar productos, clientes, pedidos..."
            className="w-full pl-9 rounded-xl bg-[var(--color-bg)] placeholder:text-sm focus-visible:ring-1 px-3 py-2 outline-none focus:border-[var(--color-focus)]"
          />
        </div>

        <div className='flex gap-2'>
            <button type="button" title="Notificaciones" className="relative p-2 rounded-md hover:bg-[var(--color-bg)]">
            <Bell className="h-5 w-5 text-[var(--color-text)]" />
            <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-[var(--color-danger)] text-white text-[10px] leading-4 text-center">3</span>
            </button>

            <div ref={chipRef} className="relative">
            <button onClick={() => setOpen(!open)} className="h-9 px-2 rounded-full hover:bg-[var(--color-muted)]/50 cursor-pointer flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center text-xs font-semibold">
                {initials}
                </div>
                <div className="hidden sm:flex flex-col items-start leading-tight pr-2">
                <span className="text-[var(--color-text)] text-sm font-medium">{mockUser.name}</span>
                <span className="text-[10px] text-[var(--color-text-muted)] -mt-0.5">{mockUser.role}</span>
                </div>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-lg overflow-hidden">
                  <div className="px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)]">Mi Cuenta</div>
                    <button className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-[var(--color-bg)]">
                        <UserIcon className="h-4 w-4 text-[var(--color-text-muted)]" />
                        <span>Perfil</span>
                    </button>
                    <button className="w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-[var(--color-bg)]">
                        <Settings className="h-4 w-4 text-[var(--color-text-muted)]" />
                        <span>Configuración</span>
                    </button>
                    <div className="h-px bg-[var(--color-muted)]" />
                    <button className="w-full px-4 py-2 flex items-center gap-2 text-sm text-[var(--color-danger)] hover:bg-[var(--color-bg)]">
                        <LogOut className="h-4 w-4" />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            )}
            </div>
        </div>
      </div>
    </header>
  );
}
