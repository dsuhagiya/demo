import React from "react";

const FRchild = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input type="text" ref={ref}></input>
    </React.Fragment>
  );
});

export default FRchild;
