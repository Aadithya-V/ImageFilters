var fgimg=null;
var bgimg=null;


function uploadFgimage()
{
  var fgfile=document.getElementById("fgimage");
  
  fgimg= new SimpleImage(fgfile);
  
  var canvas=document.getElementById("can1");
  
  fgimg.drawTo(canvas);
   
  
}


function uploadBgimage()
{
  var bgfile=document.getElementById("bgimage");
  
  bgimg= new SimpleImage(bgfile);
  
  var canvas=document.getElementById("can2");
  
  bgimg.drawTo(canvas);
   
  
}

function clearCanvases()
{
var canvas1=document.getElementById("can1");
  var context1=canvas1.getContext("2d");
  context1.clearRect(0,0,canvas1.width,canvas1.height);
  
  var canvas2=document.getElementById("can2");
  var context2=canvas2.getContext("2d");
  context2.clearRect(0,0,canvas2.width,canvas2.height); 
}


function createComposite()
{
  if(fgimg==null || !fgimg.complete())
    {
      alert("Upload foreground image")
    }
  
  if(bgimg==null || !fgimg.complete())
    {
      alert("Upload background image")
    }
  
  
  
  
  bgimg.setSize(fgimg.width,fgimg.height);
  var outputimg=new SimpleImage(fgimg.width,fgimg.height);
  
  
  for(var pixel of fgimg.values())
    {
      var x=pixel.getX();
      var y=pixel.getY();
      var opixel=outputimg.getPixel(x,y);
      
      if(pixel.getGreen()>pixel.getRed()+pixel.getBlue())
        {
          outputimg.setPixel(x,y,bgimg.getPixel(x,y));
        }
      
      else
        {
          outputimg.setPixel(x,y,pixel);
        }
      
    }
  
  clearCanvases();
  
  var canvas=document.getElementById("can1");
  outputimg.drawTo(canvas);
}