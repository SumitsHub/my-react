import React, { useEffect, useRef, useState } from "react";
import "./LoadingCounter.scss";

function LoadingCounter() {
  const [countPercentage, setCountPercentage] = useState(0);
  let timer = useRef();
  useEffect(() => {
    if (timer.current) {
      return;
    }

    timer.current = setInterval(counter, 40);

    if (countPercentage === 100) {
      clearInterval(timer.current);
      return;
    }
  }, []);

  function counter() {
    setCountPercentage((prevCount) => {
      if (prevCount === 100) {
        clearInterval(timer.current);
        return 100;
      }
      return prevCount + 1;
    });
  }

  return (
    <div className="loading-container">
      <div id="counter">
        {countPercentage === 100 ? "Done" : countPercentage + "%"}
      </div>
      <hr id="hr" style={{ width: `${countPercentage}%`, marginLeft: "0" }} />
      <div className="btn-conatiner">
        <button
          onClick={() => {
            setCountPercentage(0);
            timer.current = setInterval(counter, 40);
          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}

export default LoadingCounter;
