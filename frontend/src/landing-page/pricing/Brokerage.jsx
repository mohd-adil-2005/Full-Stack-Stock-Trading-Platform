import React from "react";
function Brokerage() {
    return (  

       <div className="container">



<div className="row p-5 mt-5   border-top">
        <div className="col-8 p-4 ">
        <a  style={{textDecoration:'none', textAlign:':left'}}href="#"><h3 className="fs-4 text-center"> Brokerage calculator</h3></a>

        <ul className="text-muted   "style={{lineHeight:'2.4', fontSize:'12px'}}>
        <li>Call & trades and RMS auto-squareoff: additional charges of the &#8377;50+ GST per order.</li>
        <li>Digital contracts notes will be sent vi e-mail.</li>
        <li>Physical copies  contract notes, if required, shall be chraged &#8377;20 per contract notes. courier charges apply.</li>
        <li>For NRI account(PIS),0.5% or &#8377;200 per excuted order  for equity (which is lower).</li>
        <li>If the account  is in debit  balance, any order place , any order placed will be charged &#8377; 40 per executed instead of the &#8377;20 per executed order.</li>
        </ul>

        </div>
        <div className="col-4 p-4">
       <a style={{textDecoration:'none'}} href="#"> <h3 className="fs-4"> List of Charges</h3></a>
        </div>
       
      </div>
       </div>
    );
}

export default Brokerage;

