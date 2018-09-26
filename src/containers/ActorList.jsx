import React from "react";
import Actor from "../components/Actor.jsx";

const ActorList = ({ level }) => {
	return (
		<div>
			{level.startActors.map(actor =>{
				return <Actor actor={actor} />
			})}
		</div>);
}

export default ActorList;