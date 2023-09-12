function greetMe(){
    let name = document.getElementById("name").value;
    let greeting = "Hi there, " + name + ", have a wonderful day!";
    document.getElementById("output").textContent=greeting;
};