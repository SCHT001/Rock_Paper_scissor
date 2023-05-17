
var display1=document.getElementById('cmptr1');
var display2=document.getElementById('cmptr2');
var RockButton=document.getElementById('Rbtn').addEventListener('click',rockChoosed);
var PaperButton=document.getElementById('Pbtn').addEventListener('click',paperChoosed);
var ScissorButton=document.getElementById('Sbtn').addEventListener('click',scissorChoosed);
var result=document.getElementById('resultBox');
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
    }
    if(cmptrChoice===0 && userChoice==1)
    {
        result.innerHTML="You win";
    }
    if(cmptrChoice==1 && userChoice==2)
    {
        result.innerHTML="You win";
    }
    if(cmptrChoice==2 && userChoice==0)
    {
        result.innerHTML="You win";
    }
    if(cmptrChoice==1 && userChoice==0)
    {
        result.innerHTML="Computer wins";
    }
    if(cmptrChoice==2 && userChoice==1)
    {
        result.innerHTML="Computer wins";
    }
    if(cmptrChoice==0 && userChoice==2)
    {
        result.innerHTML="Computer win";
    }
 }