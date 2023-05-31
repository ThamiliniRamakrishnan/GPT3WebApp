import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='May 11, 2023' title='The Exciting Possibilities and Limitations of GPT-3 in Education and Learning'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='May 10, 2023' title='Exploring the Boundless Capabilities of GPT-3: A Comprehensive Guide'/>
          <Article imgUrl={blog03} date='May 06, 2023' title='How GPT-3 is Changing the Landscape of Chatbots and Virtual Assistants'/>
          <Article imgUrl={blog04} date='April 26, 2023' title='GPT-3 vs. Human Language: Can Machines Truly Understand Human Speech?'/>
          <Article imgUrl={blog05} date='March 30, 2023' title='The Impact of GPT-3 on Content Creation and Marketing Strategies'/>
        </div>
      </div>
    </div>
  )
}

export default Blog