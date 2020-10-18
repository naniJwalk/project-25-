class Ground {
    constructor(width){
        var options={
          isStatic:true 
        }
        this.body=Bodies.rectangle(width/2,670,width,20,options);

    }
    display() {
       push()
       strokeWeight(2);
       fill(255,0,0);
       pop()
    }
}