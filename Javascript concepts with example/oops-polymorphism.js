class Shape{
    constructor(){

    }
    getarea(){
        console.log("getarea of shape")
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getarea(){
        console.log("getarea of circle",Math.PI*this.radius*this.radius);
    }

    
}
class Squire extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    getarea(){
        console.log("getarea of Squire",this.radius*this.radius);
    }
}

const areacircle=new Circle(20)
const areasquire=new Squire(2)

areacircle.getarea()
areasquire.getarea()