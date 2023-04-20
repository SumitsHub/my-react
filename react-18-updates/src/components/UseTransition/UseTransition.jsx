import React, { useEffect, useRef, useState, useTransition } from "react";

function UseTransition() {
  let renderCount = useRef(null);
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render : ", renderCount.current);
  });

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading"
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}

export default UseTransition;
