const colors = ["red", "blue", "green", "yellow", "gray", "black", "purple", "pink", "orange"];

document.querySelector("#click").onclick = function() {
    for(var i = 0; i < colors.length; i++) {
        let randomm = Math.round(Math.random() * 9);
        document.body.style.backgroundColor = colors[randomm];
    }
}
    