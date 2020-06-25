class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 10
        }
       
  
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
        }

    display(){
       if(this.sling.bodyA!==null){

        
        var pointA = this.sling.bodyA.position;
             var pointB = this.pointB;

                 line(pointA.x, pointA.y, pointB.x, pointB.y);
      
    }
}}