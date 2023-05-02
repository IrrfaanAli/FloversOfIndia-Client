import React from 'react';
import HeroSection from '../components/HeroSection';
import CookSection from '../components/CookSection';
import TodayMenu from '../components/TodayMenu';
import HelloSection from '../components/HelloSection';
import Card from '../components/Card';



const Home = () => {
    return (
        <div>
              <HeroSection></HeroSection>
              <CookSection></CookSection>
              <TodayMenu></TodayMenu>
              <HelloSection></HelloSection>
             
        </div>
    );
};

export default Home;