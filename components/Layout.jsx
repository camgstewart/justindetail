import React from 'react'
import { About } from './About'
import { Hero } from './Hero'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div>
        <Navbar />
        <Hero />
        <About />
            
        </div>
    )
}

export default Layout