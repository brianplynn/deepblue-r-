import React from "react";
import { Vec } from "../helpers.js";

class Monster {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
        this.size = new Vec(1.2, 2);
    }

    get type() { return "monster"; }

    static create(pos) {
      return new Monster(pos.plus(new Vec(0, -1)), new Vec(2,0));
    }
    isNear(state) {
      if (state.player.pos.y + 2 > this.pos.y && this.speed.x*(this.pos.x-state.player.pos.x) < 0) {
        return true;
      }
      return false;
    }

    update(time, state) {
      let newPos = this.pos.plus(this.speed.times(time));
      if (this.isNear(state) && this.speed.x < 4 && this.speed.x > -4) {
        this.speed.x *= 2;
      }
      if (!this.isNear(state) && (this.speed.x < -2 || this.speed.x > 2)) {
        this.speed.x /= 2;
      }
      if (!state.level.touches(newPos, this.size, "wall")) {
        return new Monster(newPos, this.speed);
      } else {
        return new Monster(this.pos, this.speed.times(-1));
      }
    }

    collide(state) {
      if (this.pos.y >= state.player.pos.y + 1) {
        let filtered = state.actors.filter(a => a != this);
        return new State(state.level, filtered, state.status);
      } else {
        return new State(state.level, state.actors, "lost");
      } 
    } 
}
