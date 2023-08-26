
document.getElementsByClassName("hamb")[0].addEventListener("keyup", function(event) {
    if (event.isComposing || event.keyCode === 229) {
        return;
        }
    event.preventDefault();
    if (event.keyCode === 13) {
        const checked = document.getElementById("side-menu").checked
        document.getElementById("hamb-menu-btn").click();
        if (!checked != document.getElementById("side-menu").checked) {
            document.getElementById("side-menu").checked = !checked;
        }
    }
});
