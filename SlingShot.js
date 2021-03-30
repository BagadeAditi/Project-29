class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB
        this.shot = Matter.Constraint.create(options);
        World.add(world, this.shot);
        
    }
    fly(){
        this.shot.bodyA=null
    }

    display(){
        
            if(this.shot.bodyA){
            var pointA = this.shot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
       
    }
}
}