import React from "react";
import PieChart from "../PieChart";

const BudgetCard = ({ budget, bill }) => {
    const chartData = {
        labels: ['Gesamtetat', 'Dein Büdget'],
        values: [bill, budget],
        colors: ['#5E9894', '#343B4B'],
    };
    return (
        <div className="flex bg-white rounded-lg shadow-custom w-72 lg:w-56 xl:w-80">
            <div style={{ minWidth: "120px" }} className="py-2 w-[120px]">
                {
                    budget == 0 && bill == 0 ?
                        <>
                            <p style={{ fontSize: ".8rem", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontWeight: "bold" }}>Kein Budget</p>
                        </>
                        :
                        <PieChart data={chartData} />
                }
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
