var image=null;
var gscanvas=document.getElementById("can2");
var canvas=document.getElementById("can1");

function makeGrey()
{
  upCheck(); 
 
  var gsimg=new SimpleImage(image.width,image.height);

for (var pixel of image.values())
{
    var r=pixel.getRed();
    var g=pixel.getGreen();
    var b=pixel.getBlue();
    var x=pixel.getX();
    var y=pixel.getY();
  
    var gspixel=gsimg.getPixel(x,y);
    
    var avg= (r+g+b)/3
  
    gspixel.setRed (avg);
    gspixel.setGreen (avg);
    gspixel.setBlue (avg);   
}
  
  gsimg.drawTo(gscanvas);
}




function makeRed()
{
  upCheck(); 
  
  var gsimg=new SimpleImage(image.width,image.height);

for (var pixel of image.values())
{   
    var r=pixel.getRed();
    var g=pixel.getGreen();
    var b=pixel.getBlue();
    var x=pixel.getX();
    var y=pixel.getY();
  
    var gspixel=gsimg.getPixel(x,y);
    
    var avg= (r+g+b)/3
  
    if(avg<128)
    {
    gspixel.setRed (avg*2);
    gspixel.setGreen (0);
    gspixel.setBlue (0);   
    }
  
    else
      {
        gspixel.setRed (255);
        gspixel.setGreen ((avg*2)-255);
        gspixel.setBlue ((avg*2)-255); 
      }
  
    
    
    }
  
  
  gsimg.drawTo(gscanvas);
}



function makeWmark()
{
  upCheck();
  
  var gscontext= gscanvas.getContext("2d");
  gscontext.rect(canvas.width, canvas.height, 0,0);

  gscontext.font = "50px";
gscontext.fillStyle = "white";

gscontext.textAlign = "center";
gscontext.strokeText("Aadithya", canvas.width/2, canvas.height/2);


image.drawTo(gscanvas);
}





function upload()
{
  var finput=document.getElementById("finput");
  image= new SimpleImage(finput);
 var canvas=document.getElementById("can1");
  image.drawTo(canvas);
}


function upCheck()
{
  if(image==null || !image.complete())
    {
      alert("Upload Image");
    }
  
}

function reset()
{
    upCheck(); 
    image.drawTo(gscanvas);
}