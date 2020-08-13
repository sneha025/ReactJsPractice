import React from 'react'
import NavBar from './Navbar'
import HeroSection from './HeroSection'
import AppSection from './AppSection'
import CartSection from './CartSection'
import Footer from './FooterSection'
const App=()=>{
    return(
        <div>
            <h1>Sneha</h1>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CartSection/>
            <Footer/>
        </div>
    );
};
export default App;