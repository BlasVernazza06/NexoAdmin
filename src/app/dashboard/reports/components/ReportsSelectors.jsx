"use client";

import { useState } from "react";

const PERIOD_OPTIONS = [
    { value: '7d', label: 'Últimos 7 días' },
    { value: '1m', label: 'Último mes' },
    { value: '3m', label: 'Últimos 3 meses' },
    { value: '6m', label: 'Últimos 6 meses' },
    { value: '1y', label: 'Último año' }
];

const REPORT_OPTIONS = [
    { value: 'sales', label: 'Ventas' },
    { value: 'products', label: 'Productos' },
    { value: 'customers', label: 'Clientes' },
    { value: 'inventory', label: 'Inventario' }
];

export default function ReportsSelectors({ selectedPeriod, setSelectedPeriod, selectedReport, setSelectedReport }) {
    const [openPeriod, setOpenPeriod] = useState(false);
    const [openReport, setOpenReport] = useState(false);
    const [highlightedPeriod, setHighlightedPeriod] = useState(PERIOD_OPTIONS[0].value);
    const [highlightedReport, setHighlightedReport] = useState(REPORT_OPTIONS[0].value);

    const getLabel = (value, options) => options.find(o => o.value === value)?.label || '';

    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="space-y-2 flex flex-col">
                        <label className="text-sm font-medium text-[var(--color-text)]">Período</label>
                        <div className="relative inline-block w-44">
                            <button
                                type="button"
                                className="w-full h-9 px-3 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] text-sm text-[var(--color-text)] flex items-center justify-between"
                                onClick={() => { setOpenPeriod(!openPeriod); setOpenReport(false); setHighlightedPeriod(PERIOD_OPTIONS[0].value); }}
                            >
                                <span>{getLabel(selectedPeriod, PERIOD_OPTIONS)}</span>
                                <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
                            </button>
                            {openPeriod && (
                                <ul className="absolute z-10 mt-2 w-56 rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-md p-1">
                                    {PERIOD_OPTIONS.map((opt) => (
                                        <li key={opt.value}>
                                            <button
                                                type="button"
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between border transition-colors duration-150 ${
                                                    selectedPeriod === opt.value
                                                        ? 'bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)] font-semibold'
                                                        : highlightedPeriod === opt.value
                                                            ? 'bg-[var(--color-accent)]/30 text-[var(--color-text)] border-[var(--color-accent)]'
                                                            : 'text-[var(--color-text)] border-transparent hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]'
                                                }`}
                                                onMouseEnter={() => setHighlightedPeriod(opt.value)}
                                                onClick={() => { setSelectedPeriod(opt.value); setOpenPeriod(false); }}
                                           >
                                                <span className="flex items-center gap-2">
                                                    {selectedPeriod === opt.value ? (
                                                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                                    ) : highlightedPeriod === opt.value ? (
                                                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                                    ) : (
                                                        <span className="inline-block w-2 h-2 rounded-full bg-transparent border border-[var(--color-muted)]" />
                                                    )}
                                                    {opt.label}
                                                </span>
                                                {selectedPeriod === opt.value && (
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2 flex flex-col">
                        <label className="text-sm font-medium text-[var(--color-text)]">Tipo de Reporte</label>
                        <div className="relative inline-block w-44">
                            <button
                                type="button"
                                className="w-full h-9 px-3 rounded-xl border border-[var(--color-muted)] bg-[var(--color-bg)] text-sm text-[var(--color-text)] flex items-center justify-between"
                                onClick={() => { setOpenReport(!openReport); setOpenPeriod(false); setHighlightedReport(REPORT_OPTIONS[0].value); }}
                            >
                                <span>{getLabel(selectedReport, REPORT_OPTIONS)}</span>
                                <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd"/></svg>
                            </button>
                            {openReport && (
                                <ul className="absolute z-10 mt-2 w-56 rounded-xl border border-[var(--color-muted)] bg-[var(--color-surface)] shadow-md p-1">
                                    {REPORT_OPTIONS.map((opt) => (
                                        <li key={opt.value}>
                                            <button
                                                type="button"
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between border transition-colors duration-150 ${
                                                    selectedReport === opt.value
                                                        ? 'bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)] font-semibold'
                                                        : highlightedReport === opt.value
                                                            ? 'bg-[var(--color-accent)]/30 text-[var(--color-text)] border-[var(--color-accent)]'
                                                            : 'text-[var(--color-text)] border-transparent hover:bg-[var(--color-accent)]/20 hover:border-[var(--color-accent)]'
                                                }`}
                                                onMouseEnter={() => setHighlightedReport(opt.value)}
                                                onClick={() => { setSelectedReport(opt.value); setOpenReport(false); }}
                                            >
                                                <span className="flex items-center gap-2">
                                                    {selectedReport === opt.value ? (
                                                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-success)]" />
                                                    ) : highlightedReport === opt.value ? (
                                                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                                    ) : (
                                                        <span className="inline-block w-2 h-2 rounded-full bg-transparent border border-[var(--color-muted)]" />
                                                    )}
                                                    {opt.label}
                                                </span>
                                                {selectedReport === opt.value && (
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


