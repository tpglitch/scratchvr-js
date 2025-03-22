import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Division from "./Division/Division.js";
import Tracker from "./Tracker/Tracker.js";
import Engine1 from "./Engine1/Engine1.js";
import Engine2 from "./Engine2/Engine2.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import Tracker2 from "./Tracker2/Tracker2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Division: new Division({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Tracker: new Tracker({
    x: 0,
    y: 0,
    direction: 90.2409376467383,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Engine1: new Engine1({
    x: -131.1835387564753,
    y: 27.099404421764728,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Engine2: new Engine2({
    x: 78.81646124352471,
    y: 27.099404421764728,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  Tracker2: new Tracker2({
    x: 7.6833101593266555,
    y: 6.300296570519999,
    direction: -89.95993407359205,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
