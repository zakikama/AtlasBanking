import React from 'react'
import '../Assets/Styles/Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {data} from '../Assets/Data/ChartData'
export default function Chart({title,data,dataKey,grid}) {


    return (
        <div classX="chart">
            <h3 classX="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1 }>

            <LineChart data= {data }> //data li ghadi taffichi 
                <XAxis dataKey="X" stroke="red"/>            //chno kayn f l'axe des X 
                <Line type="monotone" dataKey="{dataKey}" stroke="red"/>
                <Tooltip/>
               {grid &&  <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
            </LineChart>

            </ResponsiveContainer>
        </div>
    )
}