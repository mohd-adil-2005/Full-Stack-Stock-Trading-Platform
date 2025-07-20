import React from 'react';
 
function Stats() {
    return ( 
<div className='container p-3'>
    <div className='row p-5'>
        <div className='col-6 p-5'>
            <h1 className='fs-2'>Trust with confidence</h1>
            <h2 className='fs-4 mt-5'>Customer-first always</h2>
            <p className='text-muted'>That's why 1.3+ customers trust Zerodha with &#8377;
            3.5+
                 lakh crore worth of the equity investments </p>


                 <h2 className='fs-4'>No spams or gimmicks</h2>
            <p className='text-muted'>No gimmicks ,spam,"gamification"or annoying push notification high quality apps 
                that you use at your pace,the way you like </p>

                 <h2 className='fs-4'>The Zerodha universe</h2>
            <p className='text-muted'>Not just an app,but a whole ecosystem, our investment in 30+ fintech startup  
                offer you tailored services specifics to your needs </p>

                 <h2 className='fs-4'>Do bettter with money</h2>
            <p className='text-muted'>With initiatives like  nudge and  kill switche, we don't
                 just facilitate transaction , but actively do better with your money </p>

        </div>
        <div className='col-6'>
            <img src='images\ecosystem.png' style={{ width:'85%'}}/>
            <div className='text-center '>
                <a href='' style={{textDecoration:'none'}}  className='mx-5'> Explore our products  
                <i class="fa-solid fa-arrow-right"></i>
                </a>
               
                <a href='' style={{textDecoration:'none'}}> Try  Kite
                     <i class="fa-solid fa-arrow-right"></i></a>
                
            </div>
        </div>
    </div>

</div>


    );
}

export default Stats;