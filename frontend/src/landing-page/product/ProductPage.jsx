import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Universe from './Universe';

function ProductPage() {
    return (  
        <>
      
        <Hero/>
        <Leftsection
        imgageUrl="images/kite.png"
        productName="Kite"
        productDescription="
        Our ultra-fast flagship trading platform with streaming market data, advanced charts and an elegant UI and more. enjoy the kite experience seamlessly across web, mobile and desktop.
        "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
    
        
        
        />


<Rightsection
 imgageUrl="images/console.png"
 productName="Console"
 productDescription="
 Buy direct mutual funds online commission-free delivered directly to your demate account. enjoy the investment experience on your android and IOS device
 "
 tryDemo=""

/>
<Leftsection
        imgageUrl="images/coin.png"
        productName="Coin"
        productDescription="
        Buy direct mutual funds online commission-free delivered directly to your demate account. enjoy the investment experience on your android and IOS device
        "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
    
        
        
        />
        <Rightsection
        imgageUrl="images/kiteconnect.png"
        productName="Kite connect API"
        productDescription="
        Buy direct mutual funds online commission-free delivered directly to your demate account. enjoy the investment experience on your android and IOS device
        "
        tryDemo=""
       
        
        
        />
        <Leftsection
        imgageUrl="images/varsity.png"
        productName="Varsity"
        productDescription="Easy to grasp, collection  of stocks market with in depth coverage and illustrations. Content is broke  down into bite-size cards to help you learn on the go
        "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
    
        
        
        />
        <Universe/>
      
        </>

    );
}

export default ProductPage;