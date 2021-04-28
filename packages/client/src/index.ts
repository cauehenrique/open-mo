import * as PIXI from 'pixi.js';
import bonecoSprite from 'url:/examples/assets/buneco.png';
import { Keyboard } from './engine/modules';
import { Key } from './engine/types';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app: PIXI.Application = new PIXI.Application({ backgroundColor: 0x1099bb });
const moveUp: Key = Keyboard('w');
const moveLeft: Key = Keyboard('a');
const moveDown: Key = Keyboard('s');
const moveRight: Key = Keyboard('d');

document.body.appendChild(app.view);

// create a new Sprite from an image path
const character: PIXI.Sprite = PIXI.Sprite.from(bonecoSprite);
const SPEED: number = 2;

// center the sprite's anchor point
character.anchor.set(0.5);

// move the sprite to the center of the screen
character.x = app.screen.width / 2;
character.y = app.screen.height / 2;

app.stage.addChild(character);

// Listen for animate update
app.ticker.add((delta: number) => {
  if (moveLeft.isDown) {
    character.x -= SPEED * delta;
  }

  if (moveUp.isDown) {
    character.y -= SPEED * delta;
  }

  if (moveRight.isDown) {
    character.x += SPEED * delta;
  }

  if (moveDown.isDown) {
    character.y += SPEED * delta;
  }
});
