import React from 'react';
function Education() {
    return (  
        <div className='container mt-5'>
        <div className="row">
        <div className='col-6'>
        <img src='images/education.svg' alt='education' style={{width:'75'}}  />
        </div>
           
            
        
            <div className='col-6'>
            <h1 className='mb-3 fs-2' >Free and open market Education</h1>
           <p> Varsity , the largest Online stock market eduaction book in the world,
             covering everything from basics to advance trading</p>
           <a href='' style={{textDecoration:'none'}}> Varsity
           <i class="fa-solid fa-arrow-right"></i></a> 
           <p className='mt-5'>Trading Q&A the most active trading and 
            investment community in the india for all your market related</p>
            <a href='' style={{textDecoration:'none'}}> Trading Q&A
            <i class="fa-solid fa-arrow-right"></i></a>
            </div>
       
       
        </div>
            </div>
 
           
        
    

    );
}

export default Education;
