import React from 'react';
import './Header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className='gradient__text'>Let's Build Something With Chat GPT-3 Open AI</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis placeat est molestias commodi, quae quia sint amet doloribus consectetur velit aspernatur pariatur officia dolores officiis veritatis, sequi adipisci quis!</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Your Email Address' />
                    <button type='submit'>Get Started</button>
                </div>
                <div className='gpt3__header-content__people'>
                    <img src={people} alt="" />
                    <p>More Than 1600 People Requested Access</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt="" />
            </div>
        </div>
    );
};

export default Header;