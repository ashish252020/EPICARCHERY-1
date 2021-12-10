class PlayerBase{
    constructor(x,y,w,h){
        this.base2 = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.w =w;
        this.h =h;
        this.y = y;
        this.image = loadImage("./assets/base1.png");
        World.add(world, this.base2);
    }

    display(){
        var pos = this.base2.position;
        var angle = this.base2.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}