import React, { useState } from 'react';
import './NavBar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What's GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">

                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="" />
                </div>

                <div className='gpt3__navbar-links_container'>
                    <Menu></Menu>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
            </div>

            <div className="gpt3__navbar-menu">
                {
                    toggleMenu
                        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
                        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
                }
                {
                    toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className="gpt__navbar-menu_container-links">
                                <Menu></Menu>
                                <div className="gpt3__navbar-menu_container-links-sign">
                                    <p>Sign Is</p>
                                    <button>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default NavBar;