import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './landing-page/home/Homepage'
import Navbar from './landing-page/Navbar';
import ProductPage from './landing-page/product/ProductPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './landing-page/signup/Signup';
import Login from './landing-page/login/Login';
import PricingPage from './landing-page/pricing/PricingPage';
import AboutPage from './landing-page/about/Aboutpage'
import SupportPage from './landing-page/support/SupportPage'
import Footer from './landing-page/Footer';
import NotfoundPage from './NotFoundPage';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
 < Navbar/>
  <Routes>
   
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
     <Route path='/login' element={<Login/>}/>s
    <Route path='*' element={< NotfoundPage/>}/>
  </Routes>
   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
  <Footer/>
  </BrowserRouter>
   
  

);
