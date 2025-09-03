export default function FooterHome() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <div>
                    <p className="font-bold text-lg">NexoAdmin</p>
                    <span className="text-[var(--color-text-muted)]">Sistema de administración empresarial</span>
                </div>
            </div>

            <div>
                <span className="text-[var(--color-text-muted)]">© 2024 NexoAdmin. Todos los derechos reservados.</span>
            </div>
        </div>
    );
}