import React from 'react';

function Universe() {
    return (  
     <div className='container'>
<div className='row'>

        <p className='text-muted text-center'> Want to know more about our technology stack ? Checkout the Zerodha.tech blogs </p>
        <h1 className='fs-2 mt-5 mb-3 text-center' >The Zerodha Universe</h1>
        <p className='text-center text-muted'>Extend your trending and investement even further our  partner platform</p>
        <div className="col-4 p-3 mt-5">
            <img   style={{ width:"35%"}} src=" images/smallcaseLogo.png"/>
            <p className='text-muted text-small'>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
        <img  style={{ width:"35%"}}src="images/streakLogo.png"/>
        <p className='text-muted text-small'>Algo & stategy platfrom</p>
        </div>
        <div className="col-4 p-3 mt-5">
        <img  style={{ width:"35%"}} src="images/sensibullLogo.svg"/>
        <p className='text-muted text-small'>Option trading platfrom</p>
        </div>
   



        <div className="col-4 p-3 ">
            <img   style={{ width:"35%"}} src="images/zerodhaFundhouse.png"/>
            <p className='text-muted text-small'>Assets Management</p>
        </div>
        <div className="col-4 p-3 ">
        <img   style={{ width:"35%"}} src="images/goldenpiLogo.png"/>
        <p className='text-muted text-small'>Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 ">
        <img   style={{ width:"35%"}} src="images/dittoLogo.png"/>
        <p className='text-muted text-small'>Insurance</p>
       

        </div>
        <button className=" p-2 btn btn-primary text-center fs-5" style={{width:'20%', margin:'0 auto'}}>Signup now </button>
</div>

     </div>
    );
}

export default Universe;