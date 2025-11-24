let steps = [1,2,3,4,5,6]
let currentStep = 0;


function moveNext(){
    if (currentStep < steps.length){
        if(currentStep == 5){
            document.querySelector("button[type=\"button\"].submit").style.opacity = 1;
        }
        const content = document.querySelector('form .content');
        currentStep++;
        content.style.transform = `translateY(-${currentStep * 200}px)`;
    }
}

function moveBack(){
    if (currentStep > 2){
        const content = document.querySelector('form .content');
        currentStep--;
        content.style.transform = `translateY(-${currentStep * 200}px)`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        moveNext();
    }, 500);
});