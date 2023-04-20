import React from 'react'
import './FadeLongText.scss';

function FadeLongText() {
  return (
    <div className='main-container'>
        <h3>FadeLongText</h3>
        <div className='card-container'>
            <h4>Never Gonna Give You Up</h4>
            <span className='author-name'>RICK ASTLEY</span>
            <p className='lyrics'>We're no strangers to love. You know the rules and so do I (do I). A full commitment's what I', thinking of. You woudn't get the...</p>
            <span className='view-more'>View More</span>
        </div>
    </div>
  )
}

export default FadeLongText