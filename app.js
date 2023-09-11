let alertButton = document.querySelector('#alert-button');
function clickListener(event){
    event.preventDefault();
    alert("You clicked me!");
}
alertButton.addEventListener('click', clickListener);
