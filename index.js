let noofbtn = document.querySelectorAll('.drum').length;
for (let i = 0; i < noofbtn; i++) {
    document.querySelectorAll('.drum')[i].addEventListener("click", function () {
        let key = this.innerHTML;
       makesound(key);
    });
}
document.addEventListener('keypress', (event) => {
    let key=event.key;
    makesound(key);
});
function makesound(key)
{
    switch (key) {
        case "w":
            let ton1 = new Audio('sounds/tom-1.mp3');
            ton1.play();
            break;
        case "a":
            let ton2 = new Audio('sounds/tom-2.mp3');
            ton2.play();
            break;
        case "s":
            let ton3 = new Audio('sounds/tom-3.mp3');
            ton3.play();
            break;
        case "d":
            let ton4 = new Audio('sounds/tom-4.mp3');
            ton4.play();
            break;
        case "j":
            let ton5 = new Audio('sounds/crash.mp3');
            ton5.play();
            break;
        case "k":
            let ton6 = new Audio('sounds/kick-bass.mp3');
            ton6.play();
            break;
        case "l":
            let ton7 = new Audio('sounds/snare.mp3');
            ton7.play();
            break;
        default:
            alert("PLEASE ENTER THE VALID KEY");
            break;
    }
}