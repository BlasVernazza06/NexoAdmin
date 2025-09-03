export default function AuthCard({ children }) {
    return (
        <div className="bg-[var(--color-surface)] rounded-xl px-8 py-7 shadow-lg">
            {children}
        </div>
    );
}