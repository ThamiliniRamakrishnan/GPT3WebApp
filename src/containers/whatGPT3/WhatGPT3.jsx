import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatisGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='GPT-3 stands for "Generative Pre-trained Transformer 3", and it is a state-of-the-art natural language processing model developed by OpenAI. It is a deep learning model that has been trained on an enormous corpus of text data using unsupervised learning techniques.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='GPT-3-powered chatbots have the potential to provide a powerful and engaging user experience, and are becoming increasingly popular in a variety of industries.'/>
        <Feature title='Knowledgebase' text='The knowledge base of GPT-3 is both deep and broad, allowing it to generate high-quality natural language text in a variety of contexts.'/>
        <Feature title='Education' text='GPT-3 has the potential to revolutionize education by providing personalized learning experiences, improving productivity, and creating high-quality educational content. '/>
      </div>
    </div>
  )
}

export default WhatisGPT3