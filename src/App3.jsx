import React, { useEffect, useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [timeCount, setTimeCount] = useState(5);
  useEffect(() => {
    if (count === 5) {
      setLock(true);
    }
  }, [count]);

  /**
   * Create an interval for timeCount
   * set count to 0, set lock to false and time count 5
   */

  let timeInterval = null;
  useEffect(() => {
    if (lock || timeInterval === null) {
      timeInterval = setInterval(() => {
        if (timeCount === 0) {
          clearInterval(timeInterval);
          setCount(0);
          setLock(false);
          setTimeout(5);
          return;
        }
        setTimeCount(prev => prev - 1)
      }, 1000);
    }
  }, [lock, timeCount]);

  return (
    <div id="div">
      <h2>Count: {count}</h2>
      <button disabled={lock} onClick={() => setCount(count + 1)}>
        Add {lock ? "(Locked)" : ""}
      </button>
    </div>
  );
};

export default App;