import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 ">
        <h1 className="text-center fs-3">
          we pioneered the discount broking model in india.
          <br /> we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top fs-6 text-muted" style={{lineHeight:"1.8", fontSize:'1.2em'}}>
        <div className="col-6 p-5">
          <p>
            we kick started operation on the 15th of the August, 2010 wuth goal
            breaking all bareiers that all tradersand invester face in india in
            terms of cost, support and technology, we named the company Zerodha,
            a combination of zero and "Rodha", the sanskirt word for bareiers
          </p>
          <p>
            Today our disruptive pricing model and in house technology have made
            us the bigest stockbroker in india a
          </p>
          <p>
            Over 1+ crores client place millions of orders every day through our
            powerful ecosystem of the investement platfroms contibuting over
            15%of all indian retail trading volume
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online eduactional and
            community initiatives to empower retail trader and investers.
          </p>
          <p>
            <a href="#" style={{ textDecoration:'none'}}>Rainmatter</a>, our fintech fund an incubator, has invested in several
            fintech startups with goal of growing of indian capital markets.
          </p>
          <p>
            And yet,we are always up to something new every day. catchup on
            thlatest update on our blogs and see what media is saying about us.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
