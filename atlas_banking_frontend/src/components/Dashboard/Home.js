import React from 'react'
import "../Assets/Styles/Home.css"
import FeaturedInf from './FeaturedInf';
import Chart from './Chart'
import {data} from '../Assets/Data/ChartData'
import CreditCard from '../CreaditCard/index'
export default function 
Home() {
    return (
        <div className="home">
            <FeaturedInf />
            
            <Chart data={data} title ="Account Activity" grid dataKey="Y" />
        </div>
    )
}