import React from "react";

export class Vec {
  constructor(x, y) {
    this.x = x; this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  times(factor) {
    return new Vec(this.x * factor, this.y * factor);
  }
}

export class Player {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
    this.size = new Vec(0.8, 1.5);
  }

  get type() { return "player"; }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)),
                      new Vec(0, 0));
  }
}

export class Lava {
  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
    this.size = new Vec(1, 1);
  }

  get type() { return "lava"; }

  static create(pos, ch) {
    if (ch == "=") {
      return new Lava(pos, new Vec(2, 0));
    } else if (ch == "|") {
      return new Lava(pos, new Vec(0, 2));
    } else if (ch == "v") {
      return new Lava(pos, new Vec(0, 3), pos);
    }
  }
}

export class Monster {
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

    // collide(state) {
    //   if (this.pos.y >= state.player.pos.y + 1) {
    //     let filtered = state.actors.filter(a => a != this);
    //     return new State(state.level, filtered, state.status);
    //   } else {
    //     return new State(state.level, state.actors, "lost");
    //   } 
    // } 
}

export class Coin {
  constructor(pos, basePos, wobble) {
    this.pos = pos;
    this.basePos = basePos;
    this.wobble = wobble;
    this.size = new Vec(0.6, 0.6);
  }

  get type() { return "coin"; }

  static create(pos) {
    let basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(basePos, basePos,
                    Math.random() * Math.PI * 2);
  }
}




