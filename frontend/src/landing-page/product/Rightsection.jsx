import React from 'react';
function Rightsection({ imgageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    }) {
    return (  
        <div className="container p-5 ">
      <div className="row p-3">
       
        <div className="col-6 p-4 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            {" "}
            <a href={tryDemo}> Try demo</a>
            <a href={learnMore} style={{marginLeft:'45px'}}>Learn more </a>
          </div>
          
        </div>
        <div className="col-6 p-4 ">
          <img src={imgageUrl} alt="product"  />
        </div>
      </div>
    </div>
    );
}

export default Rightsection;