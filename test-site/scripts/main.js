let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/website-image.jpg') {
        myImage.setAttribute('src', 'images/website-image-2.jpg')
    }
}

myImage.oncontextmenu = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/website-image-2.jpg') {
        myImage.setAttribute('src', 'images/website-image.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Cars are cool! ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cars are cool! ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}