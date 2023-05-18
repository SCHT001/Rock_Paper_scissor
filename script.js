
var display1=document.getElementById('cmptr1');
var display2=document.getElementById('cmptr2');
var RockButton=document.getElementById('Rbtn').addEventListener('click',rockChoosed);
var PaperButton=document.getElementById('Pbtn').addEventListener('click',paperChoosed);
var ScissorButton=document.getElementById('Sbtn').addEventListener('click',scissorChoosed);
var result=document.getElementById('resultBox');
var round=document.getElementById('roundCount');
var roundCount=1,cmptrwinCount=0,userWinCount=0,drawCount=0;
 function decider()
 {
    display1.src="image/rock.png";
 }
var cmptrChoice;
var userChoice;

 function rockChoosed()
 {
    display2.src="image/rock.png";
    userChoice=0;
    chooser();
    
 }
 function paperChoosed()
 {
    display2.src="image/Paper.png";
    userChoice=1;
    chooser();
}
function scissorChoosed()
{
    display2.src="image/scissor.png";
    userChoice=2;
    chooser();
}


 function chooser()
 {
    cmptrChoice=Math.floor(Math.random() *3);
    if (cmptrChoice==0)
    {
        display1.src="image/rock.png";
    }
    if (cmptrChoice==1)
    {
        display1.src="image/Paper.png";
    }
    if( cmptrChoice==2)
    {
        display1.src="image/scissor.png";
    }
    winnerDecider();
 }
 function winnerDecider()
 {
    if(cmptrChoice===userChoice)
    {
        result.innerHTML="Draw";
        drawCount++;
    }
    if(cmptrChoice===0 && userChoice==1)
    {
        result.innerHTML="You win";
        userWinCount++;
    }
    if(cmptrChoice==1 && userChoice==2)
    {
        result.innerHTML="You win";
        userWinCount++;
    }
    if(cmptrChoice==2 && userChoice==0)
    {
        result.innerHTML="You win";
        userWinCount++;
    }
    if(cmptrChoice==1 && userChoice==0)
    {
        result.innerHTML="Computer wins";
        cmptrwinCount++;
    }
    if(cmptrChoice==2 && userChoice==1)
    {
        result.innerHTML="Computer wins";
        cmptrwinCount++;
    }
    if(cmptrChoice==0 && userChoice==2)
    {
        result.innerHTML="Computer win";
        cmptrwinCount++;
    }
    roundIncr();
    winsCounter();
 }
 
 function roundIncr()
 {
    roundCount++;
    round.innerHTML="Round "+roundCount;
 }
 var cmptrWins=document.getElementById('cmptrWins');
 var userWins=document.getElementById('userWins');
 var draw=document.getElementById('draw');
 function winsCounter()
 {
    cmptrWins.innerHTML="Computer wins: "+cmptrwinCount;
    userWins.innerHTML="Your wins: "+userWinCount;
    draw.innerHTML="Draw: "+drawCount;
 }
 var resetButton=document.getElementById('reset').addEventListener('click',reset);
 
 function reset()
 {
    location.reload();
 }
