import React from "react";
import Level from "level";
import { elt } from "helperfunctions.js"

const Background = ({ level }) => {
  const scale = 20;
  return elt("table", {
    class: "background",
    style: `width: ${level.width * scale}px`
  }, ...level.rows.map(row =>
    elt("tr", {style: `height: ${scale}px`},
        ...row.map(type => elt("td", {class: type})))
  ));
	
}

export default Background;