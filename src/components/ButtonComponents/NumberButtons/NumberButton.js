import React from "react";

const NumberButton = ({num}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button> {num} </button>
    </>
  );
};

export default NumberButton;