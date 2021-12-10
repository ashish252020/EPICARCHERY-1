class ComputerBase{
    constructor(x,y,w,h){
        this.base = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.image = loadImage("./assets/base2.png");
        World.add(world, this.base);
    }

    display(){
        var pos = this.base.position;
        var angle = this.base.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}