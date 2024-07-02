function onEmailButtonClick() {
    navigator.clipboard.writeText("dvdhyelee@gmail.com");
    alert("\"dvdhyelee@gmail.com\" copied to clipboard!");
}

const emailbutton = document.querySelector('.emailbutton');
emailbutton.addEventListener('click', onEmailButtonClick);

const footeremailbutton = document.querySelector('.footeremailbutton');
footeremailbutton.addEventListener('click', onEmailButtonClick);