// StrengthColumnChart.js
import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import { Colors } from '../Constant/Colors/Color';

const BarChart = ({ ChartData, setChartType, type, text }) => {

    const chartContainerRef = useRef(null);

    useEffect(() => {
        if (ChartData) {
            chartDataPopulated()
        }
    }, [ChartData]);



    const chartDataPopulated = () => {
        if (chartContainerRef.current) {
            Highcharts.chart(chartContainerRef.current, {
                chart: {
                    type: 'column', // Change type to column for vertical bars
                    backgroundColor: null, // Set background to none
                },
                title: {
                    text: text,
                },
                xAxis: {
                    categories: ChartData?.[0]?.XAxis,
                    title: {
                        text: 'Date',
                    },
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Value',
                        align: 'high',
                    },
                    labels: {
                        overflow: 'justify',
                    },
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                series: [{
                    name: 'Active',
                    data: ChartData?.[1]?.YAxis?.[0]?.ActiveData,
                    color: 'lightgreen'
                }, {
                    name: 'Inactive',
                    data: ChartData?.[1]?.YAxis?.[1]?.InActiveData,
                    color: Colors.LOGINRED
                }]
            });
        }
    }

    return (
        <div className='bg-white p-5'>
            <div className='flex gap-5'>
                <button onClick={() => setChartType('Weekly')} style={{ background: type === 'Weekly' ? Colors.LOGINRED : Colors.WHITE }} className={`${type === 'Weekly' ? 'text-white' : 'text-black'} p-2 border rounded-lg`}>Weekly</button>
                <button onClick={() => setChartType('Monthly')} style={{ background: type === 'Monthly' ? Colors.LOGINRED : Colors.WHITE }} className={`${type === 'Monthly' ? 'text-white' : 'text-black'} p-2 border rounded-lg`}>Monthly</button>
            </div>
            <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default BarChart;
