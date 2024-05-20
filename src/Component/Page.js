import React from 'react';
import Navbar from './Navbar';
import './Page.css';
import girlImage from './girl.png';

const Page = () => {
  return (
    <div id='wrapper'>
      <Navbar />
      <main>
        <h1 id='bg-text' className='center2 user-select-none'>
          f
          <span class="material-symbols-outlined">
            change_history
          </span>
          shi
          <span class="material-symbols-outlined">
            adjust
          </span>
          n
        </h1>
        <img id='girl' className='user-select-none' src={girlImage} alt='Girl Not Loaded' />
        <section id='contacts' className='faic'>
          <i class="ri-instagram-line"></i>
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-dribbble-line"></i>
          <i class="ri-twitter-x-fill"></i>
          <i class="ri-youtube-fill"></i>
        </section>
        <section id='discount' className='user-select-none'>
          <article className='center2 center1'>
            <h1>30</h1>
            <p>%</p>
            <h1>off</h1>
          </article>
        </section>
        <h1 id='lang' className='absolute user-select-none'>Eng</h1>
      </main>
    </div>
  );
};

export default Page;
