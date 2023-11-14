function validation(){
let button = document.getElementById("button");
let email = document.getElementById("iemail").value;
let form = document.getElementById("form");
let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if (email.match(pattern)) {
    form.classList.add("valid")
    form.classList.remove("invalid")
    

}
else {
    form.classList.remove("valid")
    form.classList.add("invalid")
}
}