import React from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

export default function Main() {
    return (
        <div style={{width:"100%", height:"100%"}}>
            <Nav/>
            <About/>
            <Projects/>
            <Contact/>
            
        </div>
    )
}
