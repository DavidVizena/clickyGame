// imports React and its components
import React from "react";

// creates Grid component to render to the page
const Grid = props => {
  return (
    // creates a 'tile' with a click event that triggers the scoreUpdate function (from App.js)
    <div
      className="tile"
      onClick={() => props.scoreUpdate(props.id, props.clicked)}
    >
      <img src={props.imgUrl} alt={props.name} className="tile-img" />
    </div>
  );
};

// exports Grid for external use
export default Grid;
