import React from 'react'
import './HomeBlog.css';

import blog1 from '../hardcodedimg/blog1.jpg';
import blog2 from '../hardcodedimg/blog2.jpg';

function HomeBlog() {
  return (
    <div className="home-blog">
      <div className="title">Legújabb Blogok</div>
      <div className="home-blog-card">

        <div className="card-blog">
        <div className="card-img" data-aos='fade-up'>
          <img src={blog1} alt="img" />
        </div>
        <div className="text" data-aos='fade-up'>
          <div className="date">2023.11.05</div>
          <div className="text-title">
            <h1>Panónia</h1>
            <p>A panónia tó egy mesterséges víztározó, melyet öntözés céljából használnak. A tavan táplálja egy kis kanális, ahol a sok év hanyatlás és a növényzet elszaporodása miatt, megnehezítette a horgászok számára a horgászatot. A csuka elszaporodáshoz vezetett.</p>
          </div>
          <div className="button"><a href="/">Tovább olvasom</a></div>
        </div>
      </div>


        <div className="card-blog">
        <div className="card-img" data-aos='fade-up'>
          <img src={blog2} alt="img" />
        </div>
        <div className="text" data-aos='fade-up'>
          <div className="date">2023.11.08</div>
          <div className="text-title">
            <h1>Csatorna horgászat</h1>
            <p>A panónia tó egy mesterséges víztározó, melyet öntözés céljából használnak. A tavan táplálja egy kis kanális, ahol a sok év hanyatlás és a növényzet elszaporodása miatt, megnehezítette a horgászok számára a horgászatot. A csuka elszaporodáshoz vezetett.</p>
          </div>
          <div className="button"><a href="/">Tovább olvasom</a></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomeBlog;
