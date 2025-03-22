/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.viewFactor = 150;
    this.vars.camZ = -200;
    this.vars.camX = 0;
    this.vars.camY = 0;
    this.vars.nearPlane = 30;
    this.vars.rotX = 7.6833101593266555;
    this.vars.rotY = 6.300296570519999;
    this.vars.x1 = 97.07543070826456;
    this.vars.y1 = 9.053467055021109;
    this.vars.z1 = 258.3817866669966;
    this.vars.x2 = 78.81646124352471;
    this.vars.y2 = 27.099404421764728;
    this.vars.z2 = 159.8781069856847;
    this.vars.percent = 0.9519108054204318;
    this.vars.m = -0.9883327425237433;
    this.vars.camSpeed = 5;
    this.vars.sinX = 0.1336975136;
    this.vars.cosX = 0.9910221869;
    this.vars.sinY = 0.109739456;
    this.vars.cosY = 0.9939603874;
    this.vars.trackerX = 7.6833101593266555;
    this.vars.trackerY = 6.300296570519999;

    this.watchers.trackerX = new Watcher({
      label: "tracker x",
      style: "normal",
      visible: true,
      value: () => this.vars.trackerX,
      x: 245,
      y: 175,
    });
    this.watchers.trackerY = new Watcher({
      label: "tracker y",
      style: "normal",
      visible: true,
      value: () => this.vars.trackerY,
      x: 245,
      y: 148,
    });
  }
}
