document.getElementsByClassName("hamb").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("side-menu").checked = !document.getElementById("side-menu").checked;
        }
});
