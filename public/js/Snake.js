export default class Snake {
  constructor(scene) {
    this.scene = scene;
    this.lastMoveTime = 0;
    this.moveInterval = 100;
    this.direction = Phaser.Math.Vector2.RIGHT;
    this.body = [];
    this.body.push(
      this.scene.add.rectangle(100, 100, 16, 16, 0xff0000).setOrigin(0)
    );
    this.body.push(
      this.scene.add.rectangle(0, 0, 16, 16, 0x0000ff).setOrigin(0)
    );
    scene.input.keyboard.on("keydown", (e) => this.handleKeydown(e));
  }

  handleKeydown(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      //left, up, right, down
      case 37:
        this.direction = Phaser.Math.Vector2.LEFT;
        break;
      case 38:
        this.direction = Phaser.Math.Vector2.UP;
        break;
      case 39:
        this.direction = Phaser.Math.Vector2.RIGHT;
        break;
      case 40:
        this.direction = Phaser.Math.Vector2.DOWN;
        break;
    }
  }

  update(time) {
    if (time >= this.lastMoveTime + this.moveInterval) {
      this.lastMoveTime = time;
      this. move();
    }
  }

  move() {
    this.body[0].x += this.direction.x * 16;
    this.body[0].y += this.direction.y * 16;
  }
}
