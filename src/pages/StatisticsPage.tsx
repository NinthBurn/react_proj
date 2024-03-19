import React, { useContext, useState } from 'react'
import { DataContext } from '../App'
import "../styles/StatisticsPage.css"
import { generateBrandDiversityChartData, generateCategoryChartData, generateCategoryQuantityChartData, generatePriceClassChartData } from '../services/ChartDataOperations';
import StatsPieChart from '../components/StatsPieChart';
import { NavigationButton } from '../components/buttons/NavigationButton';

function StatisticsPage(){
    const {DataList} = useContext(DataContext);

    const chart1Data = generateCategoryChartData(DataList);
    const chart2Data = generatePriceClassChartData(DataList);
    const chart3Data = generateBrandDiversityChartData(DataList);
    const chart4Data = generateCategoryQuantityChartData(DataList);

    const chart1Colors = ["#3bcf27", "#00d160", "#00d28c", "#00d0b1", "#00cdcf", "#00c9e3", "#00c3ee", "#1abcff"];
    const chart2Colors = ["#138dcf", "#00b4e5", "#00c7ed", "#16d1ff"];
    const chart3Colors = ["#72ad42", "#85af35", "#98b027", "#abb017", "#c0af03", "#d4ad00", "#eaaa00", "#ffa60f"];

    return (<div className="statsPage">
        {StatsPieChart(chart1Data, chart1Colors, "Category Diversity")}
        {StatsPieChart(chart2Data, chart2Colors, "Products by Price Class")}
        {StatsPieChart(chart3Data, chart3Colors, "Products by Brand")}
        {StatsPieChart(chart4Data, chart1Colors, "Products by Category")}
        <NavigationButton link="/admin" label="Back" direction="back" style={{position: "absolute", top: "48.5vh", left: "1vw"}}/>
    </div>);
}

export default StatisticsPage;