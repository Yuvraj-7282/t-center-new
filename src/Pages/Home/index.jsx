import React from 'react'
import Layout from '../../Components/Layout';
import HeroSection from '../../Components/HeroSection';
import Category from '../../Components/Category';
import HomePageProduct from '../../Components/HomePageProduct';
import Track from '../../Components/Track';
function Home() {
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