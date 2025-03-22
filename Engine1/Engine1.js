/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Engine1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Engine1/costumes/costume1.png", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Engine1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.viewFactor = 150;
    this.stage.vars.camZ = -200;
    this.stage.vars.camX = 0;
    this.stage.vars.camY = 0;
    this.stage.vars.nearPlane = 30;
    while (true) {
      this.penSize = 10;
      this.clearPen();
      yield* this.render();
      this.stage.vars.rotX = this.sprites["Tracker2"].x;
      this.stage.vars.rotY = this.sprites["Tracker2"].y;
      this.broadcast("Tick");
      yield;
    }
  }

  *render() {
    this.warp(this.calculateTrigValues)();
    this.warp(this._)("Back");
    this.warp(this.drawLineTo)(50, 50, 50, 50, -50, 50);
    this.warp(this.drawLineTo)(50, -50, 50, -50, -50, 50);
    this.warp(this.drawLineTo)(-50, -50, 50, -50, 50, 50);
    this.warp(this.drawLineTo)(-50, 50, 50, 50, 50, 50);
    this.warp(this._)("Front");
    this.warp(this.drawLineTo)(50, 50, -50, 50, -50, -50);
    this.warp(this.drawLineTo)(50, -50, -50, -50, -50, -50);
    this.warp(this.drawLineTo)(-50, -50, -50, -50, 50, -50);
    this.warp(this.drawLineTo)(-50, 50, -50, 50, 50, -50);
    this.warp(this._)("Front to Back");
    this.warp(this.drawLineTo)(50, 50, 50, 50, 50, -50);
    this.warp(this.drawLineTo)(50, -50, 50, 50, -50, -50);
    this.warp(this.drawLineTo)(-50, -50, 50, -50, -50, -50);
    this.warp(this.drawLineTo)(-50, 50, 50, -50, 50, -50);
  }

  *goToXYZWithShift(x, y, z) {
    this.goto(
      this.toNumber(this.stage.vars.viewFactor) *
        ((this.toNumber(x) - this.toNumber(this.stage.vars.camX)) /
          (this.toNumber(z) - this.toNumber(this.stage.vars.camZ))),
      this.toNumber(this.stage.vars.viewFactor) *
        ((this.toNumber(y) - this.toNumber(this.stage.vars.camY)) /
          (this.toNumber(z) - this.toNumber(this.stage.vars.camZ)))
    );
  }

  *setPoint1(x1, y1, z1) {
    this.stage.vars.x1 = x1;
    this.stage.vars.y1 = y1;
    this.stage.vars.z1 = z1;
  }

  *setPoint2(x2, y2, z2) {
    this.stage.vars.x2 = x2;
    this.stage.vars.y2 = y2;
    this.stage.vars.z2 = z2;
  }

  *setScreenPoint1(x1, y1) {
    this.stage.vars.x1 = x1;
    this.stage.vars.y1 = y1;
  }

  *setScreenPoint2(x2, y2) {
    this.stage.vars.x2 = x2;
    this.stage.vars.y2 = y2;
  }

  *drawLineTo(x1, y1, z1, x2, y2, z2) {
    this.warp(this.setPoint1)(
      this.toNumber(x1) - this.toNumber(this.stage.vars.camX),
      this.toNumber(y1) - this.toNumber(this.stage.vars.camY),
      this.toNumber(z1) - this.toNumber(this.stage.vars.camZ)
    );
    this.warp(this.setPoint2)(
      this.toNumber(x2) - this.toNumber(this.stage.vars.camX),
      this.toNumber(y2) - this.toNumber(this.stage.vars.camY),
      this.toNumber(z2) - this.toNumber(this.stage.vars.camZ)
    );
    this.warp(this.setPoint1)(
      this.toNumber(this.stage.vars.z1) * this.toNumber(this.stage.vars.sinY) +
        this.toNumber(this.stage.vars.x1) * this.toNumber(this.stage.vars.cosY),
      this.stage.vars.y1,
      this.toNumber(this.stage.vars.z1) * this.toNumber(this.stage.vars.cosY) -
        this.toNumber(this.stage.vars.x1) * this.toNumber(this.stage.vars.sinY)
    );
    this.warp(this.setPoint2)(
      this.toNumber(this.stage.vars.z2) * this.toNumber(this.stage.vars.sinY) +
        this.toNumber(this.stage.vars.x2) * this.toNumber(this.stage.vars.cosY),
      this.stage.vars.y2,
      this.toNumber(this.stage.vars.z2) * this.toNumber(this.stage.vars.cosY) -
        this.toNumber(this.stage.vars.x2) * this.toNumber(this.stage.vars.sinY)
    );
    this.warp(this.setPoint1)(
      this.stage.vars.x1,
      this.toNumber(this.stage.vars.y1) * this.toNumber(this.stage.vars.cosX) -
        this.toNumber(this.stage.vars.z1) * this.toNumber(this.stage.vars.sinX),
      this.toNumber(this.stage.vars.y1) * this.toNumber(this.stage.vars.sinX) +
        this.toNumber(this.stage.vars.z1) * this.toNumber(this.stage.vars.cosX)
    );
    this.warp(this.setPoint2)(
      this.stage.vars.x2,
      this.toNumber(this.stage.vars.y2) * this.toNumber(this.stage.vars.cosX) -
        this.toNumber(this.stage.vars.z2) * this.toNumber(this.stage.vars.sinX),
      this.toNumber(this.stage.vars.y2) * this.toNumber(this.stage.vars.sinX) +
        this.toNumber(this.stage.vars.z2) * this.toNumber(this.stage.vars.cosX)
    );
    if (
      !(
        this.compare(this.stage.vars.z1, this.stage.vars.nearPlane) < 0 &&
        this.compare(this.stage.vars.z2, this.stage.vars.nearPlane) < 0
      )
    ) {
      this.warp(this.zClipping)();
      this.warp(this.setScreenPoint1)(
        this.toNumber(this.stage.vars.viewFactor) *
          (this.toNumber(this.stage.vars.x1) /
            this.toNumber(this.stage.vars.z1)),
        this.toNumber(this.stage.vars.viewFactor) *
          (this.toNumber(this.stage.vars.y1) /
            this.toNumber(this.stage.vars.z1))
      );
      this.warp(this.setScreenPoint2)(
        this.toNumber(this.stage.vars.viewFactor) *
          (this.toNumber(this.stage.vars.x2) /
            this.toNumber(this.stage.vars.z2)),
        this.toNumber(this.stage.vars.viewFactor) *
          (this.toNumber(this.stage.vars.y2) /
            this.toNumber(this.stage.vars.z2))
      );
      this.stage.vars.x1 -= 100;
      this.stage.vars.x2 -= 100;
      this.warp(this.xyClipping)();
      if (!(this.compare(this.stage.vars.x1, 0) > 0)) {
        this.goto(
          this.toNumber(this.stage.vars.x1),
          this.toNumber(this.stage.vars.y1)
        );
        this.penDown = true;
        this.goto(
          this.toNumber(this.stage.vars.x2),
          this.toNumber(this.stage.vars.y2)
        );
        this.penDown = false;
      }
    }
  }

  *zClipping() {
    if (
      this.compare(this.stage.vars.z1, this.stage.vars.nearPlane) < 0 ||
      this.compare(this.stage.vars.z2, this.stage.vars.nearPlane) < 0
    ) {
      this.stage.vars.percent =
        (this.toNumber(this.stage.vars.nearPlane) -
          this.toNumber(this.stage.vars.z1)) /
        (this.toNumber(this.stage.vars.z2) - this.toNumber(this.stage.vars.z1));
      if (this.compare(this.stage.vars.z1, this.stage.vars.nearPlane) < 0) {
        this.warp(this.setPoint1)(
          this.toNumber(this.stage.vars.x1) +
            (this.toNumber(this.stage.vars.x2) -
              this.toNumber(this.stage.vars.x1)) *
              this.toNumber(this.stage.vars.percent),
          this.toNumber(this.stage.vars.y1) +
            (this.toNumber(this.stage.vars.y2) -
              this.toNumber(this.stage.vars.y1)) *
              this.toNumber(this.stage.vars.percent),
          this.stage.vars.nearPlane
        );
      } else {
        if (this.compare(this.stage.vars.z2, this.stage.vars.nearPlane) < 0) {
          this.warp(this.setPoint2)(
            this.toNumber(this.stage.vars.x1) +
              (this.toNumber(this.stage.vars.x2) -
                this.toNumber(this.stage.vars.x1)) *
                this.toNumber(this.stage.vars.percent),
            this.toNumber(this.stage.vars.y1) +
              (this.toNumber(this.stage.vars.y2) -
                this.toNumber(this.stage.vars.y1)) *
                this.toNumber(this.stage.vars.percent),
            this.stage.vars.nearPlane
          );
        }
      }
    }
  }

  *xyClipping() {
    this.stage.vars.m =
      (this.toNumber(this.stage.vars.y2) - this.toNumber(this.stage.vars.y1)) /
      (this.toNumber(this.stage.vars.x2) - this.toNumber(this.stage.vars.x1));
    if (this.compare(this.stage.vars.x1, 0) > 0) {
      if (this.compare(this.stage.vars.x2, 0) > 0) {
        return;
      } else {
        this.warp(this.setScreenPoint1)(
          0,
          this.toNumber(this.stage.vars.y1) +
            (0 - this.toNumber(this.stage.vars.x1)) *
              this.toNumber(this.stage.vars.m)
        );
      }
    }
    if (this.compare(this.stage.vars.y1, 180) > 0) {
      if (this.compare(this.stage.vars.y2, 180) > 0) {
        return;
      } else {
        this.warp(this.setScreenPoint1)(
          this.toNumber(this.stage.vars.x1) +
            (180 - this.toNumber(this.stage.vars.y1)) /
              this.toNumber(this.stage.vars.m),
          180
        );
      }
    }
    if (this.compare(this.stage.vars.x1, -240) < 0) {
      if (this.compare(this.stage.vars.z2, 0) < 0) {
        return;
      } else {
        this.warp(this.setScreenPoint1)(
          -240,
          this.toNumber(this.stage.vars.y1) +
            (-240 - this.toNumber(this.stage.vars.x1)) *
              this.toNumber(this.stage.vars.m)
        );
      }
    }
    if (this.compare(this.stage.vars.y1, -180) < 0) {
      if (this.compare(this.stage.vars.y2, -180) < 0) {
        return;
      } else {
        this.warp(this.setScreenPoint1)(
          this.toNumber(this.stage.vars.x1) +
            (-180 - this.toNumber(this.stage.vars.y1)) /
              this.toNumber(this.stage.vars.m),
          -180
        );
      }
    }
    if (this.compare(this.stage.vars.x2, 0) > 0) {
      this.warp(this.setScreenPoint2)(
        0,
        this.toNumber(this.stage.vars.y1) +
          (0 - this.toNumber(this.stage.vars.x1)) *
            this.toNumber(this.stage.vars.m)
      );
    }
    if (this.compare(this.stage.vars.y2, 180) > 0) {
      this.warp(this.setScreenPoint2)(
        this.toNumber(this.stage.vars.x1) +
          (180 - this.toNumber(this.stage.vars.y1)) /
            this.toNumber(this.stage.vars.m),
        180
      );
    }
    if (this.compare(this.stage.vars.x2, -240) < 0) {
      this.warp(this.setScreenPoint2)(
        -240,
        this.toNumber(this.stage.vars.y1) +
          (-240 - this.toNumber(this.stage.vars.x1)) *
            this.toNumber(this.stage.vars.m)
      );
    }
    if (this.compare(this.stage.vars.y2, -180) < 0) {
      this.warp(this.setScreenPoint2)(
        this.toNumber(this.stage.vars.x1) +
          (-180 - this.toNumber(this.stage.vars.y1)) /
            this.toNumber(this.stage.vars.m),
        -180
      );
    }
  }

  *_(label) {}

  *whenGreenFlagClicked2() {
    this.stage.vars.camSpeed = 5;
    while (true) {
      if (this.keyPressed("w")) {
        this.stage.vars.camZ +=
          1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.cosY));
        this.stage.vars.camX +=
          -1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.sinY));
      }
      if (this.keyPressed("s")) {
        this.stage.vars.camZ +=
          -1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.cosY));
        this.stage.vars.camX +=
          1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.sinY));
      }
      if (this.keyPressed("a")) {
        this.stage.vars.camZ +=
          -1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.sinY));
        this.stage.vars.camX +=
          -1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.cosY));
      }
      if (this.keyPressed("d")) {
        this.stage.vars.camZ +=
          1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.sinY));
        this.stage.vars.camX +=
          1 *
          (this.toNumber(this.stage.vars.camSpeed) *
            this.toNumber(this.stage.vars.cosY));
      }
      yield;
    }
  }

  *calculateTrigValues() {
    this.stage.vars.sinX = Math.sin(
      this.degToRad(this.toNumber(this.stage.vars.rotX))
    );
    this.stage.vars.cosX = Math.cos(
      this.degToRad(this.toNumber(this.stage.vars.rotX))
    );
    this.stage.vars.sinY = Math.sin(
      this.degToRad(this.toNumber(this.stage.vars.rotY))
    );
    this.stage.vars.cosY = Math.cos(
      this.degToRad(this.toNumber(this.stage.vars.rotY))
    );
  }
}
