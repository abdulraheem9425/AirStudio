import React from 'react'

import StoreCard from '../components/store/StoreCard'
import Waitlist from '../components/home/Waitlist'
import ShopHero from '../components/shop/ShopHero'
const StorePage = () => {
  return (
   
   
    <>
    <ShopHero tittle="Store"/>
    
    <StoreCard/>
    <Waitlist/> 
    
    
    </>
  )
}

export default StorePage
