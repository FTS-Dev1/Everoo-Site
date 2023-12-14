import React from "react";
import PieChart from "../PieChart";

const BudgetCard = ({ budget, bill }) => {
    const chartData = {
        labels: ['Total Budget', 'Your Budget'],
        values: [bill, budget],
        colors: ['#5E9894', '#343B4B'],
    };
    return (
        <div className="flex  items-center bg-white rounded-lg shadow-custom w-64">
            <div className="py-2">
                <PieChart data={chartData} />
            </div>
            <div className="  px-1 py-2 text-left">
                <h3 className="text-green font-bold text-md">Gesamtbetrag des Budgets</h3>
                <p className="text-gray-600 font-medium text-sm">Gesamtbilanz: ${bill}.00</p>
            </div>

        </div>
    );
};

export default BudgetCard;
