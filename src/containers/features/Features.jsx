import React from 'react';
import { Feature } from '../../components'
import './features.css';

const featuresData = [
  {
    title:'Language Generation',
    text:'GPT-3 is designed to generate natural language text that is similar to what a human might produce.'
  },
  {
    title:'Language Tasks',
    text:'GPT-3 can perform a wide range of language tasks, such as language translation, summarization, question-answering, and more.'
  },
  {
    title:'Contextual Understanding',
    text:'GPT-3 can understand language in a variety of contexts, allowing it to generate high-quality text in a variety of situations.'
  },
  {
    title:'Flexibility & User-Friendly',
    text:'GPT-3 can be fine-tuned for a wide range of applications, making it a highly versatile tool.It is designed to be easy to use, with simple input and output formats.'
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features