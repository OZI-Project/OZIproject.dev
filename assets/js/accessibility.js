
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
