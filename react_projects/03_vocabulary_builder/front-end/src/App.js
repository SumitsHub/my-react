import { useEffect, useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import Phrase from "./components/Phrase";
import Word from "./components/Word";
import { getAllPhrase, getAllWords } from "./utils";

const menu = ["Words", "Phrases", "Acronyms"];

function App() {
  const [words, setWords] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  async function getWords() {
    const res = await getAllWords();
    setWords(res.words);
  }

  async function getPhrases() {
    const res = await getAllPhrase();
    setPhrases(res.phrases);
  }

  useEffect(() => {
    getWords();
    getPhrases();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Vocabulary Builder</h1>
      </header>
      <nav className="menu">
        <ul className="menu-container">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ maxWidth: "90vw", textAlign: 'center' }}>
        {activeIndex === 0 && (
          <div style={{marginBottom: '15px'}}>
            <InputContainer type="word" refreshList={getWords} />
            <span className="heading-span">Words List</span>
            {words.map((word) => (
              <Word key={word._id} word={word} />
            ))}
          </div>
        )}
        {activeIndex === 1 && (
          <div>
            <InputContainer type="phrase" refreshList={getPhrases} />
            <span className="heading-span">Phrase List</span>
            {phrases.map((phrase, index) => (
              <Phrase key={index} phrase={phrase} />
            ))}
          </div>
        )}
        {activeIndex === 2 && (
          <div>
            <h5>Comming Soon...</h5>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
