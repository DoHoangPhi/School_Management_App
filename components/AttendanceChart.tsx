"use client"

import Image from "next/image";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {
        name: 'Monday',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tuesday',
        present: 70,
        absent: 60,
    },
    {
        name: 'Wednesday',
        present: 90,
        absent: 70,
    },
    {
        name: 'Thursday',
        present: 90,
        absent: 75,
    },
    {
        name: 'Friday',
        present: 65,
        absent: 55,
    },
];


const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-xl p-4 h-full">
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width='100%' height='90%'>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
                    <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
                    <Bar dataKey="present" fill="#FAE27C" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} legendType="circle" isAnimationActive={true} animationDuration={1000} />
                    <Bar dataKey="absent" fill="#C3EBFA" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} legendType="circle" isAnimationActive={true} animationDuration={1000} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart
