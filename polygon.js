class Poly{

    constructor(x,y,radius){

	var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
       density:1.5
            
        
            }
            this.radius=radius;
            this.image=loadImage("hex.webp");
            
            this.polygon=Bodies.circle(x,y,radius,options);
        World.add(world,this.polygon);
        
        }   



display() { 
  var paperpos=this.polygon.position;
  var angle=this.polygon.angle;
   push() 
   translate(paperpos.x, paperpos.y);
   rotate(angle);
    imageMode(CENTER); 
    
    image(this.image,0,0,this.radius, this.radius); 
    pop() }
}