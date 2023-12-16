import React from "react";
import PieChart from "../PieChart";

const BudgetCard = ({ budget, bill }) => {
    const chartData = {
        labels: ['Gesamtetat', 'Dein Büdget'],
        values: [bill, budget],
        colors: ['#5E9894', '#343B4B'],
    };
    return (
        <div className="flex bg-white rounded-lg shadow-custom w-80">
            <div className="py-2">
                <PieChart data={chartData} />
            </div>
            <div className="  px-1 py-2 text-left">
                <h3 className="text-green font-bold text-[.8rem] my-5">Gesamtbetrag des Budgets</h3>
                <p className="text-gray-600 font-medium text-sm py-2"> ${bill}.00</p>
                <p className="text-gray-600 font-medium text-sm"> ${budget}.00</p>
            </div>

        </div>
    );
};

export default BudgetCard;
