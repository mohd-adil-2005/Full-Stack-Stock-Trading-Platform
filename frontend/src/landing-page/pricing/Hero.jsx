import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center ">
        <h1>Pricing</h1>
        <h3 className="text-muted  mt-3 fs-4">
          Free equity investmet and and flat 20 Intraday and F&O trades
        </h3>
      </div>
      <div className="row p-5 mt-5  text-center">
        <div className="col-4 p-4">
          <img src="/images/pricingEquity.svg" />
          <h1 className="fs-3 mb-3"> Free equity delivery</h1>
          <p className="text-muted">
            {" "}
            All equity delivery investments(NSE,BSE) are absolutely free. No
            brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="/images/intradayTrades.svg" />
          <h1 className="fs-3 mb-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            {" "}
            flat RS. 20 or 0.03%(whichever is lower) per executed order an
            intraday trades across equity, currencyand commodity trades
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="/images/pricingMF.svg" />
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual funds investement are absolutely free -&#8377; 0
            commission & DP charges.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
