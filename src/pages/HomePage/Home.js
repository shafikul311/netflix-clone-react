import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

function Home() {
   return (
      <div className="home">
         <Navbar />
         <Banner />
         <Footer />
      </div>
   )
}

export default Home;