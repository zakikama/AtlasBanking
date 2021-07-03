import React from 'react';
import '../Assets/Styles/FeaturedInf.css'
import CreditCard from '../CreaditCard/index'
import {ArrowDownward , ArrowUpward} from "@material-ui/icons"
export default function FeaturedInf() {
    const rateEuro= document.getElementById('rate_euro')
    const rateUSD= document.getElementById('rate_dollar')
    function calculate() {
        const currency_one = "MAD";
        const currency_two = "EUR";
        const currency_3= "USD";
      
        fetch(`https://v6.exchangerate-api.com/v6/3e852abee561023d7efc8edb/latest/${currency_one}`)
          .then((res) => res.json())
          .then((data) => {
            //   console.log(data);
            const rate_EUR = data.conversion_rates[currency_two];
            const rate_USD = data.conversion_rates[currency_3];

           console.log(rate_EUR);
           console.log(rate_USD);
           rateEuro.innerHTML= rate_EUR;
           rateUSD.innerHTML=rate_USD;
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