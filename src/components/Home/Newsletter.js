import React from 'react'
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter">
        <div className="title">Hírlevél</div>
        <div className="input">
            <input type="text" placeholder='Adja meg az email címét' />
            <a href="/">Küldés</a>
        </div>
    </div>
  )
}
export default Newsletter;
