import React, { useEffect, useState } from 'react';
import './Navbar.css'
import Logo from '../../assets/logoo.png';
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect (()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[]);
    
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={Logo} alt="" className='logo'/>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='heru' smooth={true} offset={0} duration={500}>Accueil
                </Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programme
                </Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>à Propos
                </Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>services
                </Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Temoignage
                </Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>
                Contactez nous</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar