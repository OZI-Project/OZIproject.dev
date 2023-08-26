
document.getElementById("hamb-menu-btn").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.code === "Enter") {
        const checked = document.getElementById("side-menu").checked
        document.getElementById("hamb-menu-btn").click();
        if (!checked != document.getElementById("side-menu").checked) {
            document.getElementById("side-menu").checked = !checked;
        }
    }
});
document.getElementsByClassName("menu-item").forEach(menuLink => {
    menuLink.addEventListener("keyUp", function(event) {
        event.preventDefault();
        if (event.code === "Enter"){
            menuLink.children[0].click();
        }
    })
});
