class Cannon {
  constructor(x, y, width, height, angle) { //propriedades que o canhão irá receber: posições, tamanho e angulo
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
    
  }
  display() {
    push(); //captura a nova configuração
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base,70, 20, 200, 200);
    noFill();
  }
}
