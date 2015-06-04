/*
     Name: Brandon Hess
     Date: 6/02/15
     Class & Section:  WIA-HTML 5 Canvas & Modernizr HWK
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/
if(Modernizr.canvas){
    console.log("Canvas is Supported")
}

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function(){
    var theCanvas1 = document.getElementById('Canvas1')
    if(theCanvas1 && theCanvas1.getContext){
        var ctx = theCanvas1.getContext("2d");
        if (ctx){

                //Rectangle
                ctx.fillStyle = "black";
                ctx.lineWidth = 5;
                ctx.fillRect(0,0,50,100);
        }
    }
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    var theCanvas2 = document.getElementById('Canvas2');
    if(theCanvas2 && theCanvas2.getContext){
        var ctx2 = theCanvas2.getContext("2d");
        if (ctx2){

                ctx2.strokeStyle = "black";
                ctx2.fillStyle = "red";
                ctx2.lineWidth = 5;
                ctx2.globalAlpha = 0.5;

                //Circle
                var degrees = 360;
                var radians = (Math.PI/180)*degrees;
                ctx2.beginPath();
                ctx2.arc(50,50,20,0,radians);
                ctx2.fill();
                ctx2.stroke();
            
        }
    }



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
    var theCanvas3 = document.getElementById('Canvas3');
    if (theCanvas3 && theCanvas3.getContext){
        var ctx3 = theCanvas3.getContext("2d");
        if (ctx3){

                ctx3.strokeStyle = "orange";
                ctx3.fillStyle = "yellow";
                ctx3.lineWidth = 5;

                
                ctx3.beginPath();
                ctx3.moveTo(100,100);
                ctx3.lineTo(140,140);
                ctx3.lineTo(120,200);
                ctx3.lineTo(180,170);
                ctx3.lineTo(240,200);
                ctx3.lineTo(220,140);
                ctx3.lineTo(260,100);
                ctx3.lineTo(210,100);
                ctx3.lineTo(180,40);
                ctx3.lineTo(150,100);
                ctx3.fill();
                ctx3.closePath();
                ctx3.stroke();
            
        }
    }

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
    var theCanvas4 = document.getElementById('Canvas4');
    if (theCanvas4 && theCanvas4.getContext){
        var ctx4 = theCanvas4.getContext("2d");
        if (ctx4){

            ctx4.strokeStyle = "black";
            ctx4.lineWidth = 5;

            ctx4.beginPath();
            ctx4.arc(150,130,100,1.0*Math.PI,false);

            ctx4.arc(230,130,20,1.0*Math.PI,false);
            ctx4.arc(190,130,20,1.0*Math.PI,false);
            ctx4.arc(150,130,20,1.0*Math.PI,false);
            ctx4.arc(110,130,20,1.0*Math.PI,false);
            ctx4.arc(70,130,20,1.0*Math.PI,false);
            ctx4.closePath();
            ctx4.stroke();
            
        }
    }
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
    var theCanvas5 = document.getElementById('Canvas5');
    if (theCanvas5 && theCanvas5.getContext){
     var ctx5 = theCanvas5.getContext("2d");
     if (ctx5){

        ctx5.font = "30px Verdana";

        // Create gradient
        var gradient = ctx5.createLinearGradient(0,0,theCanvas5.width,0);
        gradient.addColorStop("0", "cyan");
        gradient.addColorStop("0.5", "purple");
        gradient.addColorStop("1.0", "blue");

        // Fill with gradient
        ctx5.fillStyle = gradient;
        ctx5.fillText("Big smile!", 10, 40);


     }
    }
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
    var theCanvas6 = document.getElementById('Canvas6');
    if (theCanvas6 && theCanvas6.getContext){
      var ctx6 = theCanvas6.getContext("2d");
      if (ctx6){
      
      };

    };

/******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
    var theCanvas7 = document.getElementById('Canvas7');
    if (theCanvas7 && theCanvas7.getContext){
     var ctx7 = theCanvas7.getContext("2d");
     if (ctx7){
         

     }
    }