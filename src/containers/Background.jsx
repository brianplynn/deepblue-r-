import React from "react";
import { elt } from "../helpers.js"

const Background = ({ level }) => {
  const scale = 20;
  console.log(level);
  	
return (
	<table className = "background" style= {{width: level.width * scale + "px"}}>
  	<tbody>{level.rows.map(row => {
  	return (<tr style= {{height: scale + "px"}}>
  	{row.map(element => {
	  		return <td className={element}></td>
	  	})}
  	</tr>)
  })}</tbody>
  	</table>
  	);

  

}

export default Background;

