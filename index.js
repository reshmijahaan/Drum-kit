// Detecting the key which is pressed

document.addEventListener("keypress",function(event){
  makeSound(event.key);

 // For Animation
  buttonAnimation(event.key);

});
  



// Detecting the button which is clicked
for(var i=0;i<=document.querySelectorAll(".drum").length;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",drumsound);

function drumsound(){

    var buttonInnerHtml=this.innerHTML;
    
    makeSound(buttonInnerHtml);

    // For Animation
    buttonAnimation(buttonInnerHtml);
      
  
    
}
}


// Function makesound which helps to make teh sound

function makeSound(key){
    
    
    switch (key) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play(); 
            break;
        case "a":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "s":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "d":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;  
        case "j":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "k":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case "l":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;        
    
        default:
            break;
    }
}

function buttonAnimation(currentkey) {
    var activeButton= document.querySelector("." + currentkey);
    // Refer css for "pressed" 
    activeButton.classList.add("pressed");

     setTimeout(function() {
        activeButton.classList.remove("pressed");} , 100)

}

