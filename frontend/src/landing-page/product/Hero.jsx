import React from 'react';

 function Hero() {
    return (  
 <div className='container border-bottom mb-5'>

   <div className='text-center mt-5'>
   <h1>Technology</h1>
   <h3 className='text-muted mt-3 fs-4'>Sleek , modern and intuitive trading platform</h3>
   <p className='mt-3 mb-5'>Checkout our {""}
      <a  href='#' style={{textDecoration:'none'}}>
         Investment offering{""}
         <i class=" fa fa-long-arrow-right" arial-hidden="true"></i>
      </a>
   </p>
   </div>
   



 </div>
    );
 }
 
 export default Hero;
