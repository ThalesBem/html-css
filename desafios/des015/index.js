function validation(){
let button = document.getElementById("button");
let backEmail = document.getElementById("iemail");
let email = document.getElementById("iemail").value;
let form = document.getElementById("form");
let text = document.getElementById("text");
let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is valid";
}
else {
    //form.classList.remove("valid");
    //form.classList.add("invalid");
    text.style.color = "red";
    text.innerHTML = "Valid email required";
    backEmail.style.backgroundColor = "#EED0CA";
}
}