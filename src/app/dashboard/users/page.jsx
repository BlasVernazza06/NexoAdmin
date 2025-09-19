"use client";

import { useMemo, useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, Shield, Eye, EyeOff, UserCheck } from "lucide-react";

const mockUsers = [
  { id: 1, name: "Elena Martínez", email: "elena@nexoadmin.com", role: "admin", department: "Administración", status: "activo", lastLogin: "2024-01-15 10:30", createdAt: "2023-06-15", avatar: "" },
  { id: 2, name: "Miguel Santos", email: "miguel@nexoadmin.com", role: "manager", department: "Ventas", status: "activo", lastLogin: "2024-01-15 09:15", createdAt: "2023-08-22", avatar: "" },
  { id: 3, name: "Laura Fernández", email: "laura@nexoadmin.com", role: "employee", department: "Almacén", status: "activo", lastLogin: "2024-01-14 16:45", createdAt: "2023-11-10", avatar: "" },
  { id: 4, name: "Roberto García", email: "roberto@nexoadmin.com", role: "employee", department: "Ventas", status: "inactivo", lastLogin: "2024-01-10 14:20", createdAt: "2023-09-05", avatar: "" }
];

const getInitials = (name) => name.split(" ").map(n => n[0]).join("").toUpperCase();

const getBadgeClassByRole = (role) => {
  switch (role) {
    case "admin":
      return "bg-[var(--color-danger)]/10 text-[var(--color-danger)]";
    case "manager":
      return "bg-[var(--color-brand)]/10 text-[var(--color-brand)]";
    case "employee":
      return "bg-[var(--color-success)]/10 text-[var(--color-success)]";
    default:
      return "bg-[var(--color-muted)] text-[var(--color-text)]";
  }
};

const getBadgeClassByStatus = (status) => {
  switch (status) {
    case "activo":
      return "bg-[var(--color-success)]/10 text-[var(--color-success)]";
    case "inactivo":
      return "bg-[var(--color-text-muted)]/10 text-[var(--color-text-muted)]";
    case "suspendido":
      return "bg-[var(--color-danger)]/10 text-[var(--color-danger)]";
    default:
      return "bg-[var(--color-muted)] text-[var(--color-text)]";
  }
};

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return mockUsers;
    return mockUsers.filter(u =>
      u.name.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.role.toLowerCase().includes(term) ||
      u.department.toLowerCase().includes(term)
    );
  }, [searchTerm]);

    return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Usuarios</h1>
          <p className="text-sm text-[var(--color-text-muted)]">Gestiona los usuarios del sistema</p>
        </div>
        <button type="button" className="py-1.5 px-4 cursor-pointer font-semibold rounded-xl bg-[var(--color-brand)] text-[var(--color-brand-contrast)] hover:opacity-90 flex items-center gap-2 shadow-sm">
          <Plus className="h-4 w-4" />
          Nuevo Usuario
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
          <div className="p-5">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-[var(--color-brand)]" />
              <div className="ml-4">
                <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Total Usuarios</p>
                <p className="text-2xl font-semibold text-[var(--color-text)]">47</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
          <div className="p-5">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-[var(--color-success)]" />
              <div className="ml-4">
                <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Usuarios Activos</p>
                <p className="text-2xl font-semibold text-[var(--color-text)]">42</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
          <div className="p-5">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-[var(--color-danger)]" />
              <div className="ml-4">
                <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Administradores</p>
                <p className="text-2xl font-semibold text-[var(--color-text)]">3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
          <div className="p-5">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-[var(--color-warning)]" />
              <div className="ml-4">
                <p className="text-xs tracking-wide text-[var(--color-text-muted)]">Nuevos (Este mes)</p>
                <p className="text-2xl font-semibold text-[var(--color-text)]">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="w-full h-10 rounded-xl border border-[var(--color-muted)] bg-white flex items-center px-3 text-[var(--color-text)]">
                <Search className="h-4 w-4 opacity-70 mr-2" />
                <input
                  type="text"
                  placeholder="Buscar usuarios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 outline-none text-sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button type="button" className="py-1.5 px-4 font-semibold rounded-xl border border-[var(--color-muted)] cursor-pointer text-[var(--color-text)] hover:opacity-90 flex items-center gap-2 shadow-sm">
                <Filter className="h-4 w-4" />
                Filtros
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm pb-2">
        <div className="px-6 pt-4">
          <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">Lista de Usuarios</div>
        </div>
        <div className="px-6 pt-4 pb-0 mb-2 overflow-x-auto thin-scroll">
          <table className="min-w-full table-auto text-sm">
            <thead className="text-left text-[var(--color-text-muted)]">
              <tr>
                <th className="px-4 py-2">Usuario</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Rol</th>
                <th className="px-4 py-2">Departamento</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Último Acceso</th>
                <th className="px-4 py-2">Fecha Creación</th>
                <th className="px-4 py-2 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-[var(--color-muted)] hover:bg-[var(--color-bg)]/60">
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center text-xs font-semibold">
                        {getInitials(user.name)}
                      </div>
                      <span className="font-medium text-[var(--color-text)]">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)]">{user.email}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getBadgeClassByRole(user.role)}`}>{
                      user.role === 'admin' ? 'Administrador' : user.role === 'manager' ? 'Gerente' : 'Empleado'
                    }</span>
                  </td>
                  <td className="px-4 py-2">{user.department}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getBadgeClassByStatus(user.status)}`}>{
                      user.status === 'activo' ? 'Activo' : user.status === 'inactivo' ? 'Inactivo' : 'Suspendido'
                    }</span>
                  </td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)] text-sm">{user.lastLogin}</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)] text-sm">{user.createdAt}</td>
                  <td className="px-4 py-2 text-right">
                    <div className="flex justify-end gap-2">
                      <button type="button" title="Ver detalles" className="p-2 rounded-md hover:bg-[var(--color-bg)]">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button type="button" title="Editar usuario" className="p-2 rounded-md hover:bg-[var(--color-bg)]">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button type="button" title="Suspender usuario" className="p-2 rounded-md text-[var(--color-warning)] hover:bg-[var(--color-bg)]">
                        <EyeOff className="h-4 w-4" />
                      </button>
                      <button type="button" title="Eliminar usuario" className="p-2 rounded-md text-[var(--color-danger)] hover:bg-[var(--color-bg)]">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-sm">
        <div className="px-6 pt-4">
          <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">
            <Shield className="h-5 w-5" />
            <span>Gestión de Permisos</span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-xl border-[var(--color-muted)]">
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Administrador</h4>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">Acceso completo al sistema</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• Gestionar usuarios</li>
                <li>• Configurar sistema</li>
                <li>• Ver todos los reportes</li>
                <li>• Gestionar productos y ventas</li>
              </ul>
            </div>
            <div className="p-4 border rounded-xl border-[var(--color-muted)]">
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Gerente</h4>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">Acceso a gestión operativa</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• Gestionar productos</li>
                <li>• Ver reportes de ventas</li>
                <li>• Gestionar clientes</li>
                <li>• Procesar ventas</li>
              </ul>
            </div>
            <div className="p-4 border rounded-xl border-[var(--color-muted)]">
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Empleado</h4>
              <p className="text-sm text-[var(--color-text-muted)] mb-3">Acceso básico operativo</p>
              <ul className="text-xs text-[var(--color-text-muted)] space-y-1">
                <li>• Ver productos</li>
                <li>• Procesar ventas</li>
                <li>• Gestionar clientes básico</li>
                <li>• Ver reportes limitados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}