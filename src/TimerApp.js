import React from "react";

const TimerApp = () => {
  // 2.Create a countdown timer that decreases every second using useState and setInterval.
  const [count, setCount] = React.useState(10);
  const intervalId = React.useRef(null);
  const [isRunning, setIsRunning] = React.useState(false);

  const countTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 0) {
            clearInterval(intervalId.current);
            setIsRunning(false);
            alert("recahes end");
            return 0;
          }

          return prevCount - 1;
        });
      }, 1000);
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p className="w-25 border text-center">Countdown: {count}</p>
      <button onClick={countTimer} className="btn btn-primary  w-25">
        Start
      </button>
    </div>
  );
};

export default TimerApp;
