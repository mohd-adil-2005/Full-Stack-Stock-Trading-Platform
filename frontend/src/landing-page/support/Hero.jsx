import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-3  " id="supportWrapper">
        <h4>Support portal</h4>
        <a href="#" style={{ color: "white" }}>
          Track tickets
        </a>
      </div>
      <div className=" row p-5  m-4">
        <div className="col-6  p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Egg:how do i activate F&O why is my order getting rejected..." />
          <br></br>
          <a href="#">Track account opening </a>&nbsp;&nbsp;&nbsp;
          <a href="#">Track segment activation</a>&nbsp;&nbsp;&nbsp;
          <a href="#">Intraday margins</a>&nbsp;&nbsp;&nbsp;<br></br>
          <a href="#">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a>Latest Intraday leverages and Square-off timings</a>
            </li>
            <li>
              <a>Surveillance measure on scrips - June 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
