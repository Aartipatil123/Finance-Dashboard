import React from "react";
import SummaryCards from "../components/SummaryCards";
import Charts from "../components/Charts";
import Insights from "../components/Insights";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <SummaryCards />
      <Charts />
      {/* <Insights /> */}

    </div>
  );
};

export default Dashboard;