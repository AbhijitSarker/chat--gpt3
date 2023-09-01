import React from 'react';
import './WhatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className="gpt3__whatgpt3-feature">
                <Feature title={'What is GPT-3?'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor libero unde qui incidunt sequi amet possimus quas exercitationem necessitatibus provident asperiores nobis totam laborum dolorum error, commodi maxime id eligendi?'} ></Feature>
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>Possibilities Are Beyond Your Imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title={'Chatbots'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et voluptatibus saepe qui minima perferendis dignissimos quisquam doloribus totam sed?'}></Feature>
                <Feature title={'Knowledge Base'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et voluptatibus saepe qui minima perferendis dignissimos quisquam doloribus totam sed?'} ></Feature>
                <Feature title={'Education'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et voluptatibus saepe qui minima perferendis dignissimos quisquam doloribus totam sed?'} ></Feature>
            </div>
        </div>
    );
};

export default WhatGPT3;