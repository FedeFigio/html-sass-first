var text = document.getElementById("text")

function changeColor(color) {
    switch (color) {
        case "blue":
            text.className = "";
            text.classList.add("text-blue");
            break;
        case "red":
            text.className = "";
            text.classList.add("text-red");
            break;
        case "green":
            text.className = "";
            text.classList.add("text-green");
            break;
        default:
            break;
    }

}