import React from "react";
import PieChart from "../PieChart";

const BudgetCard = () => {
    const chartData = {
        labels: ['Total Budget', 'Your Budget'],
        values: [30, 50],
        colors: ['#FF6384', '#36A2EB', '#FFCE56'],
    };
    return (
        <div className="flex  items-center bg-white rounded-lg shadow-custom w-64">
            <div className="py-2">
                <PieChart data={chartData} />
            </div>
            <div className="  px-1 py-2 text-left">
                <h3 className="text-green font-bold text-md">Budget Total</h3>
                <p className="text-gray-600 font-medium text-sm">Total Balance: $3250.00</p>
            </div>

        </div>
    );
};

export default BudgetCard;
