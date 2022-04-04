import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])
        ;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 pb-10 '>
            <div>
                <LineChart width={300} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line dataKey="sell">

                    </Line>
                </LineChart>

                <p className='text-blue-600'>Line Chart between sell per month</p>
            </div>
            <div>
                <BarChart width={300} height={250} data={data}>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey={"investment"} fill="#8884d8"></Bar>
                    <Bar dataKey={"revenue"} fill="#82ca9d"></Bar>
                </BarChart>
                <p className='text-blue-600'>Bar Chart of Investment vs Revenue</p>
            </div>
            <div className='pl-8'>
                <AreaChart width={300} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                <p className='text-blue-600'>Area chart of Investment vs Revenue</p>
            </div>
            <div className='pl-8'>
                <PieChart width={250} height={250}>

                    <Tooltip />

                    <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>

                <p className='text-blue-600'>Pie chart of Investment vs Revenue</p>
            </div>
        </div>
    );
};

export default Dashboard;