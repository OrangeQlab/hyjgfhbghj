class Crane{
    constructor(g,h){
 var f ={bodyA:g,pointB:h,length:10,stiffness:0.5}  
 this.j=Matter.Constraint.create(f)  
 World.add(world,this.j) 

    }
    Display(){
        line(this.j.bodyA.position.x,this.j.bodyA.position.y,this.j.pointB.x,this.j.pointB.y)
    }
}
