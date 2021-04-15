var text = document.getElementById("text")

document.getElementById('button-one').addEventListener('click', function(e) {
    text.className = ""
    text.classList.add("text-blue")
});
document.getElementById('button-two').addEventListener('click', function(e) {
    text.className = ""
    text.classList.add("text-red")
});
document.getElementById('button-three').addEventListener('click', function(e) {
    text.className = ""
    text.classList.add("text-green")
});