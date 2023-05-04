import React from 'react';
import HeroSection from '../components/HeroSection';
import CookSection from '../components/CookSection';
import TodayMenu from '../components/TodayMenu';
import HelloSection from '../components/HelloSection';
import Card from '../components/Card';
import {  useNavigation } from "react-router-dom";


const Home = () => {
    const  navigation  = useNavigation();
    return (
        <div>
            
              <HeroSection></HeroSection>
              
              <div>
                {navigation.state === 'loading' && <progress className="progress w-56"></progress>}
             </div>
             <CookSection></CookSection>
              <TodayMenu></TodayMenu>
              <HelloSection></HelloSection>
             
        </div>
    );
};

export default Home;