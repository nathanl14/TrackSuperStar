var backgroundImg
var score=0;
var random=0;
var cpuwhiterunner
var level = 0


function preload(){
 appleImg= loadImage("./mygamefolder/apple.png")
backgroundImg= loadImage("./mygamefolder/background.gif")
burgerImg= loadImage("./mygamefolder/burger.png")
chocolateImg= loadImage("./mygamefolder/chocolate.png")
icecreamImg=loadImage("./mygamefolder/icecream.png")
pizzaImg= loadImage("./mygamefolder/pizza.png")
waterbottleImg= loadImage("./mygamefolder/waterbottle.png")
saladImg = loadImage("./mygamefolder/salad.png")
characterImg= loadAnimation("./mygamefolder/running character.gif")
groundImg= loadImage("./mygamefolder/ground2.png")
resetImg = loadImage("./mygamefolder/reset.png")
music = loadSound("./mygamefolder/music.mp3")
backgroundImg1= loadImage("./mygamefolder/backgroundImg1.jpeg")
backgroundImg2 = loadImage("./mygamefolder/backgroundImg2.jpeg")
 
 
 
 //
 backgroundImg = loadImage("background.png");
 choosecountryImg = loadImage("chosecountry.png");
 tracksuperstarlogoImg = loadImage("tracksuperstarlogo.png");
 sprintsImg = loadImage("sprints.png");
 startImg = loadImage("start.png");
 
 
 //flags Image
 selusflagImg= loadImage("selusflag.png")
 seldeuflagImg= loadImage("seldeuflag.png")
 selukflagImg= loadImage("selukflag.png")
 
 selectrunner1Img = loadImage("selectrunner1.png")
 selectrunner2Img = loadImage("selectrunner2.png")
 chooserunnerImg = loadImage("chooserunner.png")
 
 backgroundImg1 = loadImage("backgroundImg1.jpg")
 
 //characters 4now
 blackcharacterImg = loadImage("blackrunner.png")
 whitecharacterImg = loadImage("whiterunner.png")
 
 //select character name
 seljohnswilliamsImg = loadImage("seljohnwilliams.png")
 selmarkbrownImg = loadImage("selmarkbrown.png")
 selmichaelsmithImg = loadImage ("selmichaelsmith.png")
 
 //select players name text
 selectnameImg = loadImage("selectname.png")
 
 //player biography
 johnwilliamsbioImg = loadImage('johnwilliamsbio.png')
 markbrownbioImg = loadImage("markbrownbio.png")
 michaelsmithbioImg = loadImage("michaelsmithbio.png")
 continueImg = loadImage("continue.png")
 
 blankbuttonImg = loadImage("blankbutton.png")
 blankbuttondarkredImg= loadImage("blankbuttondarkred.png")
 tryoutbioImg = loadImage("tryoutbio.png")
 
 //player name left corner
 johnwilliamslcnameImg = loadImage("johnwilliamss.png")
 markbrownlcnameImg = loadImage("markbrownn.png")
 michaelsmithlcnameImg = loadImage("michaelsmithh.png")
 
 //
 lightblackrunnerImg = loadImage("lightblackrunner.png")
mohawkguyImg = loadImage("mohawkguy.png")
 brownguyImg = loadImage("brownguy.png")
 
 pressupImg = loadImage("pressup.png")
 
 //medals
 oneImg = loadImage("1.png")
 twoImg = loadImage("2.png")
 threeImg = loadImage("3.png")
 fourImg = loadImage("4.png")
 
 //try again tryouts
 tryagaintrainImg = loadImage("tryagaintrain.png")
 
//begining button
arcadebuttonImg = loadImage("arcadelevelbutton.png")
careermodebuttonImg = loadImage("careermodebutton.png")
arcademodebioImg = loadImage("arcademodebio.png")
 
questionmarkbuttonImg = loadImage("questionmarkbutton.png")
treadmillrunnerImg = loadAnimation("treadmillrunner-1.png","treadmillrunner-2.png");
startingtreadmillrunnerImg = loadImage("treadmillrunner-2.png")
//
treadmillImg = loadImage("treadmill.png")


 
 
 
 
 
 
 
 

}
 
 
 
function setup() {
 createCanvas(1960,990);
 
frameRate(30)
 
let timeLimit = 15
let countDown;
 
 
 //tracksuperstar logo
 treadmill = createSprite(900,500)
 treadmill.addImage(treadmillImg)
 treadmill.scale=0 //1.5

treadmillrunner=createSprite(970,570)
treadmillrunner.addAnimation("runnerrunning", treadmillrunnerImg)
treadmillrunner.scale=0 //0.65
treadmillrunner.rotation=35 

startertreadmillrunner=createSprite(970,570)
startertreadmillrunner.addImage(startingtreadmillrunnerImg)
startertreadmillrunner.scale=0 //0.65
startertreadmillrunner.visible=
startertreadmillrunner.rotation=35


 tracksuperstarlogo=createSprite(1015,360)
 tracksuperstarlogo.addImage(tracksuperstarlogoImg)
 tracksuperstarlogo.scale=2
 
 //start button
 startbutton=createSprite(971,601)
 startbutton.addImage(startImg)
 startbutton.scale=0.5
 
 //sprints button
 sprints=createSprite(984,607)
 sprints.addImage(sprintsImg)
 sprints.scale=0
 
 
questionmarkbutton=createSprite(650,500)
 questionmarkbutton.addImage(questionmarkbuttonImg)
questionmarkbutton.scale=0
 
careermodebutton=createSprite(977,800)
careermodebutton.addImage(careermodebuttonImg)
careermodebutton.scale=0
 
arcademodebio=createSprite(1177,380)
arcademodebio.addImage(arcademodebioImg)
arcademodebio.scale=0
//arcademodebio.debug=true
arcademodebio.setCollider("circle", 87, -85, 30,)
 
 
arcadebutton=createSprite(977,500)
arcadebutton.addImage(arcadebuttonImg)
arcadebutton.scale=0
 
 
//choosecountry text
choosecountry=createSprite(950,65)
choosecountry.addImage(choosecountryImg)
choosecountry.scale=0
 
 
//flag selection creation
selusflag=createSprite(742,196)
selusflag.addImage(selusflagImg)
selusflag.scale=0
 
 
seldeuflag=createSprite(949,196)
seldeuflag.addImage(seldeuflagImg)
seldeuflag.scale=0
 
 
selukflag=createSprite(1160,196)
selukflag.addImage(selukflagImg)
selukflag.scale=0
 
 
//flag display in left corner
usflagdisplay=createSprite(63,59)
usflagdisplay.addImage(selusflagImg)
usflagdisplay.scale=1
usflagdisplay.visible=false
 
deuflagdisplay=createSprite(63,59)
deuflagdisplay.addImage(seldeuflagImg)
deuflagdisplay.scale=0.4
deuflagdisplay.visible=false
 
ukflagdisplay=createSprite(63,59)
ukflagdisplay.addImage(selukflagImg)
ukflagdisplay.scale=0.5
ukflagdisplay.visible=false
 
//select runner
selectrunner1=createSprite(633,470)
selectrunner1.addImage(selectrunner1Img)
selectrunner1.scale=0
//selectrunner1.visible=false
//selectrunner1.debug=true
selectrunner1.setCollider("rectangle", 7, 0, 70, 170, 0);
 
 
selectrunner2=createSprite(1155,476)
selectrunner2.addImage(selectrunner2Img)
selectrunner2.scale=0
 
//selectrunner2.debug=true
selectrunner2.setCollider("rectangle", 7, 0, 70, 170, 0);
 
 
 
 
 
//choose runner Text
chooserunner=createSprite(950,140)
chooserunner.addImage(chooserunnerImg)
chooserunner.scale=2.5
chooserunner.visible=false
 
//character faces in corner
blackrunner=createSprite(188,65)
blackrunner.addImage(blackcharacterImg)
blackrunner.scale=0
 
whiterunner=createSprite(180,65)
whiterunner.addImage(whitecharacterImg)
whiterunner.scale=0
 
//image naming character
blackimagenamingcharacter=createSprite(950,420)
blackimagenamingcharacter.addImage(blackcharacterImg)
blackimagenamingcharacter.scale=0
 
whiteimagenamingcharacter=createSprite(958,410)
whiteimagenamingcharacter.addImage(whitecharacterImg)
whiteimagenamingcharacter.scale=0
 
//select characters name
seljohnswilliams=createSprite(971,620)
seljohnswilliams.addImage(seljohnswilliamsImg)
seljohnswilliams.scale=0
 
 
selmarkbrown=createSprite(965,760)
selmarkbrown.addImage(selmarkbrownImg)
selmarkbrown.scale=0
 
 
selmichaelsmith=createSprite(965,900)
selmichaelsmith.addImage(selmichaelsmithImg)
selmichaelsmith.scale=0
 
selectnametext=createSprite(950,100)
selectnametext.addImage(selectnameImg)
selectnametext.scale=0
 
//player bios
johnwilliamsbio=createSprite(950,650)
johnwilliamsbio.addImage(johnwilliamsbioImg)
johnwilliamsbio.scale=0
 
 
markbrownbio=createSprite(950,650)
markbrownbio.addImage(markbrownbioImg)
markbrownbio.scale=0
 
michaelsmithbio=createSprite(950,650)
michaelsmithbio.addImage(michaelsmithbioImg)
michaelsmithbio.scale=0
 
tryoutbio=createSprite(951,650)
tryoutbio.addImage(tryoutbioImg)
tryoutbio.scale=0
 
continuepastbio=createSprite(951,300)
continuepastbio.addImage(continueImg)
continuepastbio.scale=0
 
//continue past tryout button
continuepasttryout=createSprite(951,170)
continuepasttryout.addImage(continueImg)
continuepasttryout.scale=0
//continuepasttryout.debug=true
continuepasttryout.setCollider("rectangle", 0, -5, 285, 70, 0);
 
//player names in left corner
johnwilliamlcname=createSprite(450,60)
johnwilliamlcname.addImage(johnwilliamslcnameImg)
johnwilliamlcname.scale=0
 
markbrownlcname=createSprite(450,60)
markbrownlcname.addImage(markbrownlcnameImg)
markbrownlcname.scale=0
 
michaelsmithlcname=createSprite(460,60)
michaelsmithlcname.addImage(michaelsmithlcnameImg)
michaelsmithlcname.scale=0
 
actualblackrunningcharacter=createSprite(1910,835)
actualblackrunningcharacter.addImage(blackcharacterImg)
actualblackrunningcharacter.scale=0
//actualblackrunningcharacter.debug=true
actualblackrunningcharacter.setCollider("circle", -1, -3, 40);
 
actualwhiterunningcharacter=createSprite(1910,835)
actualwhiterunningcharacter.addImage(whitecharacterImg)
actualwhiterunningcharacter.scale=0
//hactualwhiterunningcharacter.debug=true
actualwhiterunningcharacter.setCollider("circle", -1, -1, 140);
 
cpulightblackrunner=createSprite(1910,540)
cpulightblackrunner.addImage(lightblackrunnerImg)
cpulightblackrunner.scale=0
//cpulightblackrunner.debug=true
cpulightblackrunner.setCollider("circle", 2, -15, 155);
 
 
cpuwhiterunner=createSprite(1910,145)
cpuwhiterunner.addImage(whitecharacterImg)
cpuwhiterunner.scale=0
//cpuwhiterunner.debug=true
cpuwhiterunner.setCollider("circle", 2, -15, 155);
 
cpubrownrunner=createSprite(1910,345)
cpubrownrunner.addImage(brownguyImg)
cpubrownrunner.scale=0
//cpubrownrunner.debug=true
cpubrownrunner.setCollider("circle", 2, -15, 155);
 
pressuptext=createSprite(975,500)
pressuptext.addImage(pressupImg)
pressuptext.visible=false
 
finishline=createSprite(-780,90)
finishline.scale=18
finishline.visible=false
 
 
startlinereset=createSprite(1900,0)
startlinereset.scale=20
startlinereset.debug=true
startlinereset.setCollider("rectangle", 27, -5, 45, 110, 0);
startlinereset.visible=false
 
 
 
one=createSprite(500,345)
one.addImage(oneImg)
one.scale=0.15
one.visible=false
 
two=createSprite(500,835)
two.addImage(twoImg)
two.scale=0.12
two.visible=false
 
three=createSprite(500,540)
three.addImage(threeImg)
three.scale=0.0475
three.visible=false
 
four=createSprite(500,145)
four.addImage(fourImg)
four.scale=0.24
four.visible=false
 
tryagaintrain = createSprite(975,650)
tryagaintrain.addImage(tryagaintrainImg)
tryagaintrain.scale=0
 
continuepasttryouttrain = createSprite(971,300)
continuepasttryouttrain.addImage(continueImg)
continuepasttryouttrain.scale=0

timerblock = createSprite(100,500)
timerblock.velocityX=1


timerbarrier1 = createSprite(300,500)
fill(00,190,50)


timerbarrier2 = createSprite(500,500)

timerbarrier3 = createSprite(700,500)

timerbarrier4 = createSprite(900,500)

 
 
 
}
 
function draw() {
 background(backgroundImg);
 if (mousePressedOver(startbutton)){
score+=10
 }
   if(score>=20){
    background(backgroundImg1)
  }
  
if (timerblock.isTouching(timerbarrier1)){

}




 
//image(backgroundImg,0,0,width,height);
 textSize(50)
text(mouseX + "," +mouseY , mouseX, mouseY)
 
text("Score "+ score,22,90)
 
 
textSize(0)
text("random "+ score,22,90)
 
 
 
afterstart()
aftersprints()
aftercountry()
changeBackground()
selectname()
pastcontinueplayerbio()
continuepasttryoutbio()
trainaftertryout()
continueaftertryout()
keyleleased()
 
 
drawSprites();
 } 
  
 
 
 
 
 
 
function afterstart() {
 if (mousePressedOver(startbutton)){
startbutton.scale=0
tracksuperstarlogo.scale=0
 
questionmarkbutton.scale=1.3
careermodebutton.scale=0.7
arcadebutton.scale=0.7
 }
if (mousePressedOver(careermodebutton)){
 sprints.scale=0.5
 arcadebutton.scale=0
 careermodebutton.scale=0
 questionmarkbutton.scale=0
}
 
if (mousePressedOver(questionmarkbutton)){
 arcademodebio.scale=3
 arcadebutton.scale=0
}
 
if (mousePressedOver(arcademodebio)){
 arcadebutton.scale=0.7
 arcademodebio.scale=0
}
 
}
 
 
 
function aftersprints() {
 if (mousePressedOver(sprints)){
 
   sprints.scale=0
   choosecountry.scale=1.5
   selusflag.scale=1.3
   seldeuflag.scale=0.7
   selukflag.scale=0.8
 }
}
 
function aftercountry() {
 if (mousePressedOver(selusflag)){
   selusflag.scale=0
   seldeuflag.scale=0
   selukflag.scale=0
  
usflagdisplay.visible=true
 
   choosecountry.scale=0
   selectrunner1.scale=1.6
   selectrunner2.scale=1.5
   chooserunner.visible=true
 }
   if (mousePressedOver(seldeuflag)){
     selusflag.scale=0
     seldeuflag.scale=0
     selukflag.scale=0
 deuflagdisplay.visible=true
 
     choosecountry.scale=0
     selectrunner1.scale=1.6
     selectrunner2.scale=1.5
     chooserunner.visible=true
   }
 
   if (mousePressedOver(selukflag)){
     selusflag.scale=0
     seldeuflag.scale=0
     selukflag.scale=0
  
ukflagdisplay.visible=true
 
     choosecountry.scale=0
     selectrunner1.scale=1.6
     selectrunner1.visible=true
   selectrunner2.scale=1.5
     chooserunner.visible=true
   }
  }
 
 
function changeBackground() {
if (mousePressedOver(selectrunner1)){
   selectrunner1.scale=0
   selectrunner2.scale=0
   chooserunner.scale=0
   blackrunner.scale=1.5
   blackimagenamingcharacter.scale=3
 
   actualblackrunningcharacter.scale=1.25
   actualblackrunningcharacter.visible=false
 
   selectnametext.scale=1
 
seljohnswilliams.scale=0.65
selmarkbrown.scale=0.65
selmichaelsmith.scale=0.65
 
 }
 
 if(mousePressedOver(selectrunner2)){
   selectrunner1.scale=0
   selectrunner2.scale=0
   chooserunner.scale=0
   whiterunner.scale=0.4
   whiteimagenamingcharacter.scale=0.8
 
   actualwhiterunningcharacter.scale=0.32
actualwhiterunningcharacter.visible=false
 
player=10
 
selectnametext.scale=1
 
seljohnswilliams.scale=0.65
selmarkbrown.scale=0.65
selmichaelsmith.scale=0.65
  }
}
function selectname(){
 
 if (mousePressedOver(seljohnswilliams)){
   selmarkbrown.scale=0
   seljohnswilliams.scale=0
   selmichaelsmith.scale=0
   selectnametext.scale=0
   whiteimagenamingcharacter.scale=0
   blackimagenamingcharacter.scale=0
 
   johnwilliamlcname.scale=0.5
  
 
   johnwilliamsbio.scale=1.5
   continuepastbio.scale=1.5
 }
 if (mousePressedOver(selmarkbrown)){
   selmarkbrown.scale=0
   seljohnswilliams.scale=0
   selmichaelsmith.scale=0
   selectnametext.scale=0
   whiteimagenamingcharacter.scale=0
   blackimagenamingcharacter.scale=0
   
   markbrownlcname.scale=0.5
  
 
   markbrownbio.scale=1.5
   continuepastbio.scale=1.5
 
 }
 
 if (mousePressedOver(selmichaelsmith)){
   selmarkbrown.scale=0
   seljohnswilliams.scale=0
   selmichaelsmith.scale=0
   selectnametext.scale=0
   whiteimagenamingcharacter.scale=0
   blackimagenamingcharacter.scale=0
 
michaelsmithlcname.scale=0.4
 
 michaelsmithbio.scale=1.5
continuepastbio.scale=1.5
 }
}
 
function pastcontinueplayerbio(){
if (mousePressedOver(continuepastbio)){
 johnwilliamsbio.scale=0
 markbrownbio.scale=0
 michaelsmithbio.scale=0
continuepastbio.scale=0
tryoutbio.scale=1.5
continuepasttryout.scale=1.5
 
}
}
 
function continuepasttryoutbio(){
if (mousePressedOver(continuepasttryout)){
 continuepasttryout.scale=0
 level+=1
 score+=10
 
 actualblackrunningcharacter.visible=true
 actualwhiterunningcharacter.visible=true
 cpulightblackrunner.scale=0.35
 cpuwhiterunner.scale=0.32
 cpubrownrunner.scale=.32
 pressuptext.visible=true
 
tryoutbio.scale=0
 
 //johnwilliamlcname.scale=0
 //markbrownlcname.scale=0
 //michaelsmithlcname.scale=0
 
 //blackrunner.scale=0
 
 //deuflagdisplay.scale=0
 //ukflagdisplay.scale=0
 //usflagdisplay.scale=0
 
 
}
if(level<=1){
if (keyDown(UP_ARROW)){
 actualblackrunningcharacter.setVelocity(-13.2,0)
 actualwhiterunningcharacter.setVelocity(-13.2,0)
 cpulightblackrunner.setVelocity(-12.9,0)
 cpuwhiterunner.setVelocity(-12.7,0)
 cpubrownrunner.setVelocity(-13.5,0)
 pressuptext.visible=false
}
}
 
if(actualblackrunningcharacter.isTouching(finishline)){
 actualblackrunningcharacter.setVelocity(5,0)
 two.visible=true
 
}
if(actualwhiterunningcharacter.isTouching(finishline)){
 actualwhiterunningcharacter.setVelocity(5,0)
 two.visible=true
}
if (cpulightblackrunner.isTouching(finishline)){
 cpulightblackrunner.setVelocity(5,0)
 three.visible=true
}
if(cpuwhiterunner.isTouching(finishline)){
 cpuwhiterunner.setVelocity(5,0)
 four.visible=true
 tryagaintrain.scale=1.2
 continuepasttryouttrain.scale=1.3
}
if(cpubrownrunner.isTouching(finishline)){
 cpubrownrunner.setVelocity(5,0)
 one.visible=true
}
}
 
function trainaftertryout(){
 
 
//
if(actualblackrunningcharacter.isTouching(startlinereset)){
 two.visible=false
 actualblackrunningcharacter.x=1910
 actualblackrunningcharacter.y=835
 actualblackrunningcharacter.setVelocity(0,0)
 //actualblackrunningcharacter.scale=0
}
if(actualwhiterunningcharacter.isTouching(startlinereset)){
 two.visible=false
 actualwhiterunningcharacter.x=1910
 actualwhiterunningcharacter.y=835
 actualwhiterunningcharacter.setVelocity(0,0)
 actualwhiterunningcharacter.scale=0
}
if (cpulightblackrunner.isTouching(startlinereset)){
 
 three.visible=false
cpulightblackrunner.x=1910
cpulightblackrunner.y=540
cpulightblackrunner.setVelocity(0,0)
cpulightblackrunner.scale=0
}
if(cpuwhiterunner.isTouching(startlinereset)){
 four.visible=false
 cpuwhiterunner.x=1910
 cpuwhiterunner.y=145
 cpuwhiterunner.setVelocity(0,0)
 cpuwhiterunner.scale=0
}
if(cpubrownrunner.isTouching(startlinereset)){
 one.visible=false
 cpubrownrunner.x=1910
 cpubrownrunner.y=345
 cpubrownrunner.setVelocity(0,0)
 cpubrownrunner.scale=0
 }
}
 
function continueaftertryout(){
if (mousePressedOver(continuepasttryouttrain)){
 continuepasttryouttrain.scale=0
 tryagaintrain.scale=0
 //actualblackrunningcharacter.scale=0
 actualwhiterunningcharacter.scale=0
 cpulightblackrunner.scale=0
 cpubrownrunner.scale=0
 cpuwhiterunner.scale=0
 score-=10
 two.visible=false
 one.visible=false
 three.visible=false
 four.visible=false
 treadmill.scale=1.5
startertreadmillrunner.scale=0.65
level+=2
 }

if(level>=2){
  if(keyDown(UP_ARROW)){
    actualblackrunningcharacter.setVelocity(-1,0)
  }

  if (keyCode === 32) {
    treadmillrunner.scale=0.65
    startertreadmillrunner.scale=0
    }
    
    
}
 
}




function keyleleased(){

  
 
}
 
 
