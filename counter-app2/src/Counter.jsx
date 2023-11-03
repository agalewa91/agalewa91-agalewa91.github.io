import { useState } from "react";
import "./Counter.css";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
// import Clock from "./components/Clock";
import Step from "./components/Step";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counterInitValue);
  //   const [showClock, setShowClock] = useState(true);
  const [stepValue, setStepValue] = useState();

  const updateCounter = (action) => {
    if (action === "add") {
      setCounter(counter + stepValue);
    } else if (action === "reset") {
      setCounter(props.counterInitValue);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="counter">
      <Display counter={counter} />
      <ButtonsPanel updateCounter={updateCounter} />
      <Step setStepValue={setStepValue} />

      {/* {showClock ? (
        <Clock setShowClock={setShowClock} />
      ) : (
        <p className="clockControl" onClick={() => setShowClock(true)}>
          pokaz zegar
        </p>
      )} */}
    </div>
  );
};

export default Counter;
