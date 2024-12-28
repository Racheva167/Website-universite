import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Heru from './components/heru/heru';
import Programs from './components/programs/programs';
import Title from './components/title/title';
import About from './components/about/about';
import Campus from './components/campus/campus';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Videoplayer from './components/videoplayer/videoplayer';

const App = () => {

    const [playState, setPlayState] = useState (false);

    return (
        <div>
            <Navbar/>
            <Heru/>
            <div className="container">
            <Title subTitle='Our PROGRAM' title='What We Offer' />
            <Programs/>
            <About setPlayState={setPlayState}/>
            <Title subTitle='Gallery' title='Campus Photo'/>
            <Campus/>
            <Title subTitle='TESTIMONIALS' title='What Student Says'/>
            <Testimonials/>
            <Title subTitle='Contact us' title='Get in touch'/>
            <Contact/>
            <Footer/>
            </div>
            <Videoplayer playState={playState} setPlayState={setPlayState}/>
        </div>
    );
};

export default App