import React from "react";

function Awards () {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 " >
                <img src="images/largestBroker.svg" alt="largest broker"  />
                </div>
                <div className="col-6 p-5 mt-5" >
                    <h1>Largest stock broker in india  </h1>
                    <p className="mb-5">2+ million zeodha client's contributes over the 15% of all retailer order
                        volumes in india daily by trading and investing in:
                    </p>
                    <div className="row">
                    <div className="  col-6">
                       
                        <ul>
                            <li>
                               <p> Futures and option</p>
                            </li>
                            <li>
                               <p>Commodetives derivatives</p>
                            </li>
                            <li>
                             <p> Currency  derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <ul>
                            <li>
                               <p> Stocks & IPOs</p>
                            </li>
                            <li>
                               <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds & NCDs</p>
                            </li>
                        </ul>
                    </div>
                    </div>

                    <img src="images/pressLogos.png" alt="presslogos.png IMG" style={{width:'90%'}}/>
                
            </div>
               
         </div>
        
         </div> 

     );
}

export default Awards;