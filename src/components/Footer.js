import React from 'react'
import './Footer.css';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdLocalShipping } from 'react-icons/md';

function Footer() {
  return (
    <footer>
        <section className="footer">

            <div className="footer-top">
                <div className="online" data-aos='fade-up'>
                    <AiOutlineClockCircle className='icon'/>
                    <h3>Online rendelés</h3>
                    <p>0 - 24 órában</p>
                </div>
                <div className="shipping" data-aos='fade-up'>
                    <MdLocalShipping className='icon'/>
                    <h3>Ingyenes Szállítás</h3>
                    <p>8.000 - RSD felett</p>
                </div>
            </div>
        
        <div className="line"></div>

        <div className="footer-bottom" data-aos='fade-up'>
            <div className="box">
                <h1>Információ</h1>
                <a href="/">Rólunk</a>
                <a href="/">Blog</a>
                <a href="/">A horgászat</a>
                <a href="/">Kapcsolat</a>
                <a href="/">Miért mi</a>
            </div>

            <div className="box">
                <h1>Kategóriák</h1>
                <a href="/">Pontyhorgászat</a>
                <a href="/">Ragadozó horgászat</a>
                <a href="/">Pergető horgászat</a>
                <a href="/">Úszós horgászat</a>
                <a href="/">Egyéb kellékek</a>
            </div>

            <div className="box">
                <h1>Fiókom</h1>
                <a href="/">Felhasználó fiók</a>
                <a href="/">Előnypök</a>
                <a href="/">Adatok</a>
                <a href="/">Kuponkód</a>
            </div>

            <div className="box">
                <h1>Bolt információ</h1>
                <p>24331/Bajsa/Slovacka43</p>
                <p>+(381)61-27-666-05</p>
                <a href="/">danibrada29@gmail.com</a>
            </div>
        </div>

        <div className="programmer"><p>&copy; 2023 <a href="/">Big<span>White</span></a> A jogok védve/Brada Dániel</p></div>

        </section>
    </footer>
  )
}
export default Footer;
