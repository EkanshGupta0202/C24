class Tanker {
  constructor(x,y,width,height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if(keyIsDown(LEFT_ARROW) && angle > -0.8708){
        angle -=0.05
        Matter.Body.setAngle( tanker.body, angle);
      }
      if(keyIsDown(RIGHT_ARROW) && angle < 0){
        angle +=0.05
        Matter.Body.setAngle( tanker.body, angle);
      }
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
      arc(60, 560, 90, 100, PI , TWO_PI);
      rect(50,570,150,20);
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
