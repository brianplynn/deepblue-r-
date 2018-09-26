import React from "react";
import { Vec, Player, Coin, Lava, Monster } from "../actortypes.js"

const Actor = ({ actor }) => {
	const scale = 20;
	return <div className={`actor ${actor.type}`} style={{width: `${actor.size.x * scale}px`, height: `${actor.size.y * scale}px`, left: `${actor.pos.x * scale}px`, top: `${actor.pos.y * scale}px`}}></div>	
}

export default Actor;