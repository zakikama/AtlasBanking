import React from 'react';
import '../Assets/Styles/FeaturedInf.css'
import CreditCard from '../CreaditCard/index'
import {ArrowDownward , ArrowUpward} from "@material-ui/icons"
export default function FeaturedInf() {
    
    function calculate() {
        const currency_one = "MAD";
        const currency_two = "EUR";
        const currency_3= "USD";
        var rate_EUR = 1;
        var rate_USD = 10;
      
        fetch(`https://v6.exchangerate-api.com/v6/3e852abee561023d7efc8edb/latest/${currency_one}`)
          .then((res) => res.json())
          .then((data) => {
            //   console.log(data);
             rate_EUR = data.conversion_rates[currency_two];
             rate_USD = data.conversion_rates[currency_3];

           console.log(rate_EUR);
           console.log(rate_USD);
           document.getElementById('rate_euro').innerHTML= rate_EUR;
           document.getElementById('rate_dollar').innerHTML=rate_USD;
           
          });
      }
      calculate();

    return (
        <div className="featured">
            <CreditCard/>
            <div className="featuredItem">
            <span className="featuredTitle">1 MAD =</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney" id="rate_euro"></span>

            </div>
            <span className="featuredSub">EUR</span>
            </div>

            <div className="featuredItem">
            <span className="featuredTitle"> 1 MAD = </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney" id="rate_dollar"></span>
            </div>
            <span className="featuredSub">USD</span>
            </div>
            


        </div>
    )
}