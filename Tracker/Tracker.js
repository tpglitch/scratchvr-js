/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tracker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tracker/costumes/costume1.svg", {
        x: 9.181818181818187,
        y: 9.090909090909122,
      }),
      new Costume("costume2", "./Tracker/costumes/costume2.svg", {
        x: -83.8348348348348,
        y: 182.681681681682,
      }),
    ];

    this.sounds = [new Sound("pop", "./Tracker/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement videoSensing_videoToggle */ null;
    /* TODO: Implement videoSensing_setVideoTransparency */ null;
    this.goto(0, 0);
    this.visible = false;
    this.stage.vars.trackerX = 0;
    this.stage.vars.trackerY = 0;
    while (true) {
      if (
        this.compare(/* TODO: Implement videoSensing_videoOn */ null, 20) > 0
      ) {
        this.stage.vars.trackerX +=
          Math.cos(
            this.degToRad(
              this.toNumber(/* TODO: Implement videoSensing_videoOn */ null)
            )
          ) *
          (this.toNumber(/* TODO: Implement videoSensing_videoOn */ null) / 30);
        this.stage.vars.trackerY +=
          Math.sin(
            this.degToRad(
              this.toNumber(/* TODO: Implement videoSensing_videoOn */ null)
            )
          ) *
          (this.toNumber(/* TODO: Implement videoSensing_videoOn */ null) / 30);
      }
      yield;
    }
  }
}
