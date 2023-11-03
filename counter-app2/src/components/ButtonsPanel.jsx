import "./ButtonsPanel.css";

const ButtonsPanel = (props) => {
  return (
    <div className="buttonsPanel">
      <button onClick={() => props.updateCounter("add")}>Add 1</button>
      <button onClick={() => props.updateCounter("reset")}>Reset</button>
      <button onClick={() => props.updateCounter("zero")}>Set 0</button>
    </div>
  );
};

export default ButtonsPanel;
