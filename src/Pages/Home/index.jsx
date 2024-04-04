import React from 'react'
import Layout from '../../Components/Layout';
import HeroSection from '../../Components/HeroSection';
import Category from '../../Components/Category';
function Home() {
  return (
    <Layout>
        <HeroSection />
        <Category />
    </Layout>
  )
}

export default Home;