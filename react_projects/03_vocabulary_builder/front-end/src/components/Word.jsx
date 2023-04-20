import React, { useState } from 'react'

const Word = ({word}) => {
  const [showMeaning, setShowMeaning] = useState(false);
  
    return (
    <div className='word-wrapper'>
        <div className='word-container'>
          <div className="title" onClick={()=>setShowMeaning((prevState)=>!prevState)}>Word: {word.title}</div>
          {showMeaning && <div className="meaning">Meaning: {word.meaning}</div>}
        </div>
        <div className='delete-btn-container'>
          <button>X</button>
        </div>
    </div>
  )
}

export default Word