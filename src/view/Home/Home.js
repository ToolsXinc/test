import React from 'react';
import "./Home.css";
import banner1 from "./assets/banner1.png"

const Home = ()=>
{

    return(
        <div className='container'>
            <div className='container1'>
               <div>
                <img src={banner1} className='banner1' alt='mobile phone trade' />
                </div>
                <div>
                   <h1 className='profitRise'>Profitability on the Rise</h1>
                   <p className='p1'>join millions of users trading hundreds of stocks, forex and crypto assets</p>
                   <div className='p2container'>
                         <p className='p2'>Open an Account</p>                    
                   </div>
                </div>
            </div>
        </div>
    )

}

export default Home;