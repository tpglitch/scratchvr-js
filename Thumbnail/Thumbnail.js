/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Thumbnail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Thumbnail/costumes/costume1.svg", {
        x: 260,
        y: 186,
      }),
      new Costume("costume2", "./Thumbnail/costumes/costume2.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Thumbnail/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.effects.ghost = 100;
  }
}
