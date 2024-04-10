import React from 'react'
import Layout from '../../Components/Layout';
import HeroSection from '../../Components/HeroSection';
import Category from '../../Components/Category';
import HomePageProduct from '../../Components/HomePageProduct';
// import Track from '../../Components/Track';

// import { useContext } from 'react';
// import myContext from '../../Context/myContext';
function Home() {
  // const context = useContext(myContext);
  // const name = context;
  return (
    <Layout>
        <HeroSection />
        <Category />
        <HomePageProduct title="Top Products"/>
        {/* <Track /> */}
    </Layout>
  )
}

export default Home;