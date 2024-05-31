import React from 'react';
import HeaderNavBar from './HeaderNavBar';
import Banner from './Banner';
import ClientsCard from './ClientsCard';
import TodaysDeals from './TodaysDeals';
import BestSellers from './Grocery';
import Clothing from './Clothing';
import ToysGames from './ToysGames';
import Beauty from './Beauty';

const HomePage = () => {
  return (
    <>
        <section className='' style={{background:"#E3E6E6"}}>
            <HeaderNavBar/>
             <Banner/>
            <ClientsCard/>
            <TodaysDeals/>
            <BestSellers/>
            <Clothing/>
            <ToysGames/>
            <Beauty/>
        </section>
        
    </>
  )
}

export default HomePage