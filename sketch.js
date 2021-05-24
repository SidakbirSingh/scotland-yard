var n1,n2,n3,n4,n5,xn;
var d1,d2,d3,d4,d5,mx;
var h1
var t,b,u;
var t2,b2,u2;
var t3,b3,u3;
var t4,b4,u4;
var t5,b5,u5;
var tx,ux,bx,bl,x;
var tb,bb,ub,blb,xb;
var tb2,bb2,ub2;
var tb3,bb3,ub3;
var tb4,bb4,ub4;
var tb5,bb5,ub5;
var tbx,bbx,ubx;
var reset;
var bg,yes,no,q;  
var r,rr,rrr,rrrr,rrrrr;
var box1,box2,box3,box4,box5,box6,box7;
var b1;
var gameState=0;
var play;
function preload()
{
 bg=loadImage("bg1.jpg")

}

function setup() {
	createCanvas(1500,800);
  database = firebase.database();
  r = Math.round(random(1,200));
  rr = Math.round(random(1,200));
  rrr = Math.round(random(1,200));
  rrrr = Math.round(random(1,200));
  rrrrr = Math.round(random(1,200));
  

h1=createElement("h1")
h1.html("Scotland Yard")
h1.style("color","white")
h1.style("font-size","60px")
h1.position(950,70)

 

n1=createInput("Detective 1")
  n1.position(600,350)
  n1.style("font-size","15px")
  n1.style("color","white")
  n1.style("background","red")


  n2=createInput("Detective 2")
  n2.position(900,350)
  n2.style("font-size","15px")
  n2.style("color","black")
  n2.style("background","yellow")

  n3=createInput("Detective 3")
  n3.position(1200,350)
  n3.style("font-size","15px")
  n3.style("color","white")
  n3.style("background","blue")

  n4=createInput("Detective 4")
  n4.position(1450,350)
  n4.style("font-size","15px")
  n4.style("color","white")
  n4.style("background","purple")

  n5=createInput("Detective 5")
  n5.position(900,450)
  n5.style("font-size","15px")
  n5.style("color","white")
  n5.style("background","green")

  xn=createInput("Mister X")
  xn.position(1200,450)
  xn.style("font-size","15px")
  xn.style("color","white")
  xn.style("background","black")

  play=createButton("PLAY")
  play.position(1000,600)
  play.style("font-size","100px")
  play.mousePressed(()=>{
    gameState=1
  })
}
function draw() {  
background(bg)
console.log("detective1: "+r,"detective2: "+rr,"detective3: "+rrr,"detective4: "+rrrr,"detective5: "+rrrrr)

if(gameState===0){
  clear()
  background(bg)
 
n1.show()
n2.show()
n3.show()
n4.show()
n5.show()
xn.show()
play.show()
}
if (gameState ===1){
  h1.hide()
  n1.hide()
  n2.hide()
  n3.hide()
  n4.hide()
  n5.hide()
  xn.hide()
  play.hide()
  clear()
  background(bg)
 


  box1=createSprite(200,180,150,40)
  box1.shapeColor="blue"
  box2=createSprite(200,180,150,40)
  box2.shapeColor="blue"
  box3=createSprite(500,180,150,40)
  box3.shapeColor="blue"
  box4=createSprite(760,180,150,40)
  box4.shapeColor="blue"
  box5=createSprite(1030,180,150,40)
  box5.shapeColor="blue"
  box6=createSprite(1330,180,150,40)
  box6.shapeColor="blue"
  box7=createSprite(760,480,120,40)
  box7.shapeColor="blue"
  reset=createButton("Reset")
  reset.position(1770,80)
  reset.style("color","white")
  reset.style("background","red")
  reset.style("font-size","20px")
  reset.mousePressed(()=>{
    q=createElement("h2")
    q.html("DO YOU WANT TO RESET??")
    q.position(1470,100)
    q.style("color","white")
    q.style("background","red")
   yes=createButton("Yes")
   yes.style("background","green")
   yes.style("color","white")

   yes.mousePressed(()=>{
    database.ref("players/detective1").update({
      taxis:15,
      busses:10,
      underground:4
    })
    database.ref("players/detective2").update({
      taxis:15,
      busses:10,
      underground:4
    })
    database.ref("players/detective3").update({
      taxis:15,
      busses:10,
      underground:4
    })
    database.ref("players/detective4").update({
      taxis:15,
      busses:10,
      underground:4
    })
    database.ref("players/detective5").update({
      taxis:15,
      busses:10,
      underground:4
    })
    database.ref("players/misterX").update({
      taxis:3,
      busses:3,
      underground:3,
      black:4,
      x:2
     
    })
    yes.hide()
    no.hide()
    q.hide()
   })
   yes.position(1500,160)
   yes.style("font-size","20px")
   no=createButton("No")
   no.position(1730,160)
   no.style("font-size","20px")
   no.style("background","red")
   no.style("color","white")
   no.mousePressed(()=>{
     yes.hide()
     no.hide()
     q.hide()
   })

   
  })
  tb=createButton("Taxi")
  tb.position(440,280)
  tb.style("background","yellow")
  tb.style("font-size","15px")
  tb.mousePressed(()=>{
    t=t-1
    tx=tx+1
    database.ref("players/detective1").update({
      taxis:t
    })
    database.ref("players/misterX").update({
      taxis:tx
    })
  })
//
tb2=createButton("Taxi")
tb2.position(760,280)
tb2.style("background","yellow")
tb2.style("font-size","15px")
tb2.mousePressed(()=>{
  t2=t2-1
  tx=tx+1
  database.ref("players/detective2").update({
    taxis:t2
  })
  database.ref("players/misterX").update({
    taxis:tx
  })
})
//
tb3=createButton("Taxi")
tb3.position(1040,280)
tb3.style("background","yellow")
tb3.style("font-size","15px")
tb3.mousePressed(()=>{
  t3=t3-1
  tx=tx+1
  database.ref("players/detective3").update({
    taxis:t3
  })
  database.ref("players/misterX").update({
    taxis:tx
  })
})
//
tb4=createButton("Taxi")
tb4.position(1310,280)
tb4.style("background","yellow")
tb4.style("font-size","15px")
tb4.mousePressed(()=>{
  t4=t4-1
  tx=tx+1
  database.ref("players/detective4").update({
    taxis:t4
  })
  database.ref("players/misterX").update({
    taxis:tx
  })
})
//
tb5=createButton("Taxi")
tb5.position(1590,280)
tb5.style("background","yellow")
tb5.style("font-size","15px")
tb5.mousePressed(()=>{
  t5=t5-1
  tx=tx+1
  database.ref("players/detective5").update({
    taxis:t5
  })
  database.ref("players/misterX").update({
    taxis:tx
  })
})
//
tx=createButton("Taxi")
tx.position(1040,580)
tx.style("background","yellow")
tx.style("font-size","15px")
tx.mousePressed(()=>{
  tx=tx-1
  database.ref("players/misterX").update({
    taxis:tx
  })
})
//
//

  bb=createButton("Bus")
  bb.position(420,330)
  bb.style("color","white")
  bb.style("background","green")
bb.style("font-size","20px")
  bb.mousePressed(()=>{
    b=b-1
    bx=bx+1
    database.ref("players/detective1").update({
      busses:b
    })
    database.ref("players/misterX").update({
      busses:bx
    })
  })
  //
  bb2=createButton("Bus")
  bb2.position(740,330)
  bb2.style("color","white")
  bb2.style("background","green")
  bb2.style("font-size","20px")
  bb2.mousePressed(()=>{
    b2=b2-1
    bx=bx+1
    database.ref("players/detective2").update({
      busses:b2
    })
    database.ref("players/misterX").update({
      busses:bx
    })
  })
  //
  bb3=createButton("Bus")
  bb3.position(1020,330)
  bb3.style("color","white")
  bb3.style("background","green")
  bb3.style("font-size","20px")
  bb3.mousePressed(()=>{
    b3=b3-1
    bx=bx+1
    database.ref("players/detective3").update({
      busses:b3
    })
    database.ref("players/misterX").update({
      busses:bx
    })
  })
  //
  bb4=createButton("Bus")
  bb4.position(1290,330)
  bb4.style("color","white")
  bb4.style("background","green")
  bb4.style("font-size","20px")
  bb4.mousePressed(()=>{
    b4=b4-1
    bx=bx+1
    database.ref("players/detective4").update({
      busses:b4
    })
    database.ref("players/misterX").update({
      busses:bx
    })
  })
  //
  bb5=createButton("Bus")
  bb5.position(1570,330)
  bb5.style("color","white")
  bb5.style("background","green")
  bb5.style("font-size","20px")
  bb5.mousePressed(()=>{
    b5=b5-1
    bx=bx+1
    database.ref("players/detective5").update({
      busses:b5
    })
    database.ref("players/misterX").update({
      busses:bx
    })
  })
  //
  bbx=createButton("Bus")
  bbx.position(1020,630)
  bbx.style("color","white")
  bbx.style("background","green")
  bb.style("font-size","20px")
  bbx.mousePressed(()=>{
    bx=bx-1
    database.ref("players/misterX").update({
      busses:bx
    })
  })
  //
  //
  ub=createButton("Underground")
  ub.position(390,380)
  ub.style("color","white")
  ub.style("background","red")
  ub.style("font-size","15px")
  ub.mousePressed(()=>{
    u=u-1
    ux=ux+1
    database.ref("players/detective1").update({
      underground:u
    })
    database.ref("players/misterX").update({
      underground:ux
    })
  })
  //
  ub2=createButton("Underground")
  ub2.position(690,380)
  ub2.style("color","white")
  ub2.style("background","red")
  ub2.style("font-size","15px")
  ub2.mousePressed(()=>{
    u2=u2-1
    ux=ux+1
    database.ref("players/detective2").update({
      underground:u2
    })
    database.ref("players/misterX").update({
      underground:ux
    })
  })
  //
  ub3=createButton("Underground")
  ub3.position(985,380)
  ub3.style("color","white")
  ub3.style("background","red")
  ub3.mousePressed(()=>{
    u3=u3-1
    ux=ux+1
    database.ref("players/detective3").update({
      underground:u3
    })
    database.ref("players/misterX").update({
      underground:ux
    })
  })
  //
  ub4=createButton("Underground")
  ub4.position(1255,380)
  ub4.style("color","white")
  ub4.style("background","red")
  ub4.mousePressed(()=>{
    u4=u4-1
    ux=ux+1
    database.ref("players/detective4").update({
      underground:u4
    })
    database.ref("players/misterX").update({
      underground:ux
    })
  })
  //
  ub5=createButton("Underground")
  ub5.position(1530,380)
  ub5.style("color","white")
  ub5.style("background","red")
  ub5.mousePressed(()=>{
    u5=u5-1
    ux=ux+1
    database.ref("players/detective5").update({
      underground:u5
    })
    database.ref("players/misterX").update({
      underground:ux
    })
  })
  //
  ubx=createButton("Underground")
  ubx.position(980,680)
  ubx.style("color","white")
  ubx.style("background","red")
  ubx.mousePressed(()=>{
    ux=ux-1
    database.ref("players/misterX").update({
      underground:ux
    })
  })
  //
  //
  blb=createButton("Black Ticket")
  blb.position(980,730)
  blb.style("color","white")
  blb.style("background","black")
  blb.mousePressed(()=>{
    bl=bl-1
    database.ref("players/misterX").update({
      black:bl
    })
  })
  //
  xb=createButton("2x")
  xb.position(1040,785)
  xb.style("color","white")
xb.style("background","orange")
  xb.mousePressed(()=>{
    x=x-1
    database.ref("players/misterX").update({
      x:x
    })
  })
  
  
  d1=createElement("h2")
  d1.html(n1.value())
  d1.position(498,200)
  d1.style("color","white")
  d2=createElement("h2")
  d2.html(n2.value())
  d2.position(800,200)
  d2.style("color","white")
  d3=createElement("h2")
  d3.html(n3.value())
  d3.position(1060,200)
  d3.style("color","white")
 d4=createElement("h2")
 d4.html(n4.value())
  d4.position(1330,200)
  d4.style("color","white")
  d5=createElement("h2")
  d5.html(n5.value())
   d5.position(1630,200)
   d5.style("color","white")
   mx=createElement("h2")
   mx.html(xn.value())
    mx.position(1070,500)
    mx.style("color","white")

    t=database.ref("players/detective1/taxis")
    t.on("value",(data)=>{
    t = data.val();
    })
    b=database.ref("players/detective1/busses")
    b.on("value",(data)=>{
    b = data.val();
    })

    u=database.ref("players/detective1/underground")
    u.on("value",(data)=>{
    u = data.val();
    })
//
    t2=database.ref("players/detective2/taxis")
    t2.on("value",(data)=>{
    t2 = data.val();
    })

    b2=database.ref("players/detective2/busses")
    b2.on("value",(data)=>{
    b2 = data.val();
    })

    
    u2=database.ref("players/detective2/underground")
    u2.on("value",(data)=>{
    u2 = data.val();
    })
//
    t3=database.ref("players/detective3/taxis")
    t3.on("value",(data)=>{
    t3 = data.val();
    })

    b3=database.ref("players/detective3/busses")
    b3.on("value",(data)=>{
    b3 = data.val();
    })

    
    u3=database.ref("players/detective3/underground")
    u3.on("value",(data)=>{
    u3 = data.val();
    })
   //
   t4=database.ref("players/detective4/taxis")
   t4.on("value",(data)=>{
    t4 = data.val();
   })

   b4=database.ref("players/detective4/busses")
   b4.on("value",(data)=>{
   b4 = data.val();
   })

   u4=database.ref("players/detective4/underground")
   u4.on("value",(data)=>{
   u4 = data.val();
   })
//
t5=database.ref("players/detective5/taxis")
t5.on("value",(data)=>{
 t5 = data.val();
})

b5=database.ref("players/detective5/busses")
b5.on("value",(data)=>{
b5 = data.val();
})

u5=database.ref("players/detective5/underground")
u5.on("value",(data)=>{
u5 = data.val();
})
//
tx=database.ref("players/misterX/taxis")
tx.on("value",(data)=>{
 tx = data.val();
})

bx=database.ref("players/misterX/busses")
bx.on("value",(data)=>{
bx = data.val();
})

ux=database.ref("players/misterX/underground")
ux.on("value",(data)=>{
ux = data.val();
})

bl=database.ref("players/misterX/black")
bl.on("value",(data)=>{
bl = data.val();
})

x=database.ref("players/misterX/x")
x.on("value",(data)=>{
x = data.val();
})
    textSize(26)
    fill("white")
    text("Taxi:"+t,150,250)
    text("Bus:"+b,150,300)
    text("Underground:"+u,150,350)

    text("Taxi:"+t2,450,250)
    text("Bus:"+b2,450,300)
    text("Underground:"+u2,450,350)


    text("Taxi:"+t3,730,250)
    text("Bus:"+b3,730,300)
    text("Underground:"+u3,730,350)

    text("Taxi:"+t4,1000,250)
    text("Bus:"+b4,1000,300)
    text("Underground:"+u4,1000,350)
  
    text("Taxi:"+t5,1280,250)
    text("Bus:"+b5,1280,300)
    text("Underground:"+u5,1280,350)

    text("Taxi:"+tx,730,550)
    text("Bus:"+bx,730,600)
    text("Underground:"+ux,730,650)
    text("Black Ticket:"+bl,730,700)
    text("2x:"+x,730,750)

    text("Detective1: "+r,150,400)
    text("Detective2: "+rr,440,400)
    text("Detective3: "+rrr,700,400)
    text("Detective4: "+rrrr,1000,400)
    text("Detective5: "+rrrrr,1280,400)
    textSize(60)
    text("Scotland Yard ",560,100)
}
    textSize(25)
   
   // text(""+n1,150,200)

    drawSprites()
}