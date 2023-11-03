const Step = (props) => {
  return (
    <p>
      Step :{" "}
      <input
        type="number"
        onClick={(e) => {
          props.setStepValue(+e.target.value);
        }}
      />
    </p>
  );
};

export default Step;
