"use client";

import React, { useState } from "react";
import ReportsHeader from "./components/ReportsHeader";
import ReportsSelectors from "./components/ReportsSelectors";
import KpiCards from "./components/KpiCards";
import ReportCharts from "./components/ReportCharts";
import ReportTables from "./components/ReportTables";

export default function Reports() {
    const [selectedPeriod, setSelectedPeriod] = useState("6m");
    const [selectedReport, setSelectedReport] = useState("sales");

    return (
        <div className="p-6 space-y-6">
            <ReportsHeader />
            <ReportsSelectors
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
                selectedReport={selectedReport}
                setSelectedReport={setSelectedReport}
            />
            <KpiCards />
            <ReportCharts />
            <ReportTables />
        </div>
    );
}