/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tracker2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tracker2/costumes/costume1.svg", {
        x: 9.181818181818187,
        y: 9.090909090909122,
      }),
    ];

    this.sounds = [new Sound("pop", "./Tracker2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(
        this.toNumber(this.stage.vars.trackerX),
        this.toNumber(this.stage.vars.trackerY)
      );
      yield;
    }
  }
}
