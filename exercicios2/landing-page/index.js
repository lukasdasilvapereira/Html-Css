const ft = document.querySelector(".ft")
const todo = document.getElementById("active-features")

function list() {
    if(todo.style.display == "none" || todo.style.display == "") {
        todo.style.display = "block"
    }
    else {
        todo.style.display = "none"
    }
}