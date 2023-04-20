import React, { useEffect, useRef, useState } from "react";
import { addPhrase, addWord } from "../utils";

const InputContainer = ({type, refreshList}) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(type === 'word') {
      await addWord({title: word, meaning});
    } else {
      await addPhrase({value: word})
    }
    await refreshList();
    setWord("");
    setMeaning("");
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          ref={inputRef}
          onChange={(e) => setWord(e.target.value)}
          placeholder={type === 'word' ? "Add New Word...": "Add new phrase..."}
          required
        />
        {type === 'word' && <input
          type="text"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          placeholder="Enter meaning of the word"
          required
        />}

        <button type="submit">Add {type === 'word' ? 'Word': 'Phrase'}</button>
      </form>
    </div>
  );
};

export default InputContainer;
