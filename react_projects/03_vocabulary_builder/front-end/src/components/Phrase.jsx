import React from 'react'

const Phrase = ({phrase}) => {
  return (
    <div className='phrase-container'>
        <span>{phrase.value}</span>
    </div>
  )
}

export default Phrase