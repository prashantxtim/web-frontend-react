import React from "react";

const Helmet = (props) => {
  
  document.title = "FreelanceHQ || " + props.title;
  return <div className="w-100">{props.children}</div>;
};
// this is helmet

export default Helmet;
