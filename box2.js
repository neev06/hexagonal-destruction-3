class Box2{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
    }

    //console.log(speed);

    display(){
      var pos =this.body.position;
      if(this.body.speed<3){
          
          rectMode(CENTER);
          fill(149,170,244);
          rect(pos.x, pos.y, this.width, this.height);
           
      }
      else{
        fill(149,170,244);
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 1;
//           if(this.Visibility===0){
// World.remove(world,this.body);

//           }
      //    tint(255,this.Visiblity);
       //   rect(pos.x, pos.y, 50, 50);
          pop();
        }
       
  }
  };