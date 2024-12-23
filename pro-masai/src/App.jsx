import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Women from './page/Women'
import Men from './page/Men'
import Accessories from './page/Accessories'
import Shoes from './page/Shoes'
import LikeNew from './page/LikeNew'
import SignIn from './page/SignIn'
import MenData from './page/MenData'
import WomenData from './page/WomenData'
import AccerrData from './page/AccerrData'
import ShoesData from './page/ShoesData'
import AllWomen from './page/AllWomen'
import AllMen from './page/AllMen'
import ALLAcces from './page/ALLAcces'
import AllShoes from './page/AllShoes'
import CartPage from './page/CartPage'
import PaymentPage from './page/PaymentPage'
import WomenShorts from './page/WomenShorts'
import WomenShortsSingle from './page/WomenShortsSingle'
import Skirts from './page/Skirts'
import SkirtsSingle from './page/SkirtsSingle'
import Tanktops from './page/Tanktops'
import TanktopsSingle from './page/TanktopsSingle'
import DressSingle from './page/DressSingle'
import DressProduct from './page/DressProduct'
import LeggingsProduct from './page/LeggingsProduct'
import LeggingsSingle from './page/LeggingsSingle'
import MenShorts from './page/MenShorts'
import MenShortsSingle from './page/MenShortsSingle'
import ABCPants from './page/ABCPants'
import ABCPantsSingle from './page/ABCPantsSingle'
import TShirts from './page/TShirts'
import TShirtsSingle from './page/TShirtsSingle'
import JoggarsProduct from './page/JoggarsProduct'
import JoggarsSingle from './page/JoggarsSingle'
import Trousers from './page/Trousers'
import TrousersSingle from './page/TrousersSingle'
import Bags from './page/Bags'
import BagsSingle from './page/BagsSingle'
import Equipment from './page/Equipment'
import EquipmentSingle from './page/EquipmentSingle'
import Hats from './page/Hats'
import HatsSingle from './page/HatsSingle'
import Hair from './page/Hair'
import HairSingle from './page/HairSingle'
import Slides from './page/Slides'
import SlidesSingle from './page/SlidesSingle'
import Sneakers from './page/Sneakers'
import SneakersSingle from './page/SneakersSingle'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/women' element={<Women/>}/>
      <Route path='/women/allwomen' element={<AllWomen/>}/>
      <Route path='/womenshorts' element={<WomenShorts/>}/>
      <Route path='/womenshorts/:Id' element={<WomenShortsSingle/>}/>
      <Route path='/skirts' element={<Skirts/>}/>
      <Route path='/skirts/:Id' element={<SkirtsSingle/>}/>
      <Route path='/tanktops' element={<Tanktops/>}/>
      <Route path='/tanktops/:Id' element={<TanktopsSingle/>}/>
      <Route path='/dresses' element={<DressProduct/>}/>
      <Route path='/dresses/:Id' element={<DressSingle/>}/>
      <Route path='/leggings' element={<LeggingsProduct/>}/>
      <Route path='/leggings/:Id' element={<LeggingsSingle/>}/>
      <Route path='/women/:Id' element={<WomenData/>}/>
      <Route path='/men' element={<Men/>} />
      <Route path='/men/allmen' element={<AllMen/>} />
      <Route path='/menshorts' element={<MenShorts/>}/>
      <Route path='/menshorts/:Id' element={<MenShortsSingle/>}/>
      <Route path='/abcpants' element={<ABCPants/>}/>
      <Route path='/abcpants/:Id' element={<ABCPantsSingle/>}/>
      <Route path='/tshirts' element={<TShirts/>}/>
      <Route path='/tshirts/:Id' element={<TShirtsSingle/>}/>
      <Route path='/joggars' element={<JoggarsProduct/>}/>
      <Route path='/joggars/:Id' element={<JoggarsSingle/>}/>
      <Route path='/trousers' element={<Trousers/>}/>
      <Route path='/trousers/:Id' element={<TrousersSingle/>}/>
      <Route path='/men/:Id' element={<MenData/>} />
      <Route path='/accessories' element={<Accessories/>}/>
      <Route path='/accessories/allacces' element={<ALLAcces/>}/>
      <Route path='/bags' element={<Bags/>}/>
      <Route path='/bags/:Id' element={<BagsSingle/>}/>
      <Route path='/equipment' element={<Equipment/>}/>
      <Route path='/equipment/:Id' element={<EquipmentSingle/>}/>
      <Route path='/hats' element={<Hats/>}/>
      <Route path='/hats/:Id' element={<HatsSingle/>}/>
      <Route path='/hair' element={<Hair/>}/>
      <Route path='/hair/:Id' element={<HairSingle/>}/>
      <Route path='/accessories/:Id' element={<AccerrData/>}/>
      <Route path='/shoes' element={<Shoes/>} />
      <Route path='/shoes/allshoes' element={<AllShoes/>} />
      <Route path='/slides' element={<Slides/>}/>
      <Route path='/slides/:Id' element={<SlidesSingle/>}/>
      <Route path='/sneakers' element={<Sneakers/>}/>
      <Route path='/sneakers/:Id' element={<SneakersSingle/>}/>
      <Route path='/shoes/:Id' element={<ShoesData/>} />
      <Route path='/likenew' element={<LikeNew/>}/>
      <Route path='/signin' element={<SignIn/>} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
