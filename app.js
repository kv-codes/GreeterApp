function greetMe(){
    let name = document.getElementById("name").value;
    let greeting = "Hi there, " + name + ", have a wonderful day!";
    document.getElementById("output").textContent=greeting;

};
function Reset(){
    
    document.getElementById("form_id").reset();
    let element = document.getElementById("output");
    element.replaceChildren();

    //document.getElementById("form").reset();
}