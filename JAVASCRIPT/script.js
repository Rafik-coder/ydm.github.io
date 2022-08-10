
function submit() {
    var form = document.getElementById('join-f');
    form.style.display = "none";
    alert("Congratulatons You Are Now Part Of Our Community");
}

function OpenForm() {
    var form = document.getElementById('join-f');
    form.style.display = "flex"; 
}

// ACTIVITIES

function hide(here){
    let f = document.getElementById(`${here}`)
    f.classList.replace("show", "hide")
}

function show(here){
    let f = document.getElementById(`${here}`)
    f.classList.replace("hide", "show")
}

function close() {
    let form = document.getElementById(String(`${which}`));
    form.addEventListener("click", close)
    // this.classList.replace("overlay-container", "none");
    console.log("clicked");

}

// let fort = document.querySelector("#invent")
// fort.addEventListener("click", () => {
//     console.log("hello")
// })

function close(){
    this.style.display = "none"
    console.log("clicked");
}

function report(){
    let rep = document.getElementById("report");
    rep.style.display = "flex";
}

function contact(){
    let rep = document.getElementById("contact");
    rep.style.display = "flex";

}

function quiz(){
    let rep = document.getElementById("quiz");
    rep.style.display = "flex";
    
}

function invent(){
    let rep = document.getElementById("invent");
    rep.style.display = "flex";

}