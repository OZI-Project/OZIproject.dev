
document.getElementById("hamb-menu-btn").addEventListener("keyup", function(event) {
    if (event.isComposing || event.code === 229) {
        return;
        }
    event.preventDefault();
    if (event.code === 13) {
        const checked = document.getElementById("side-menu").checked
        document.getElementById("hamb-menu-btn").click();
        if (!checked != document.getElementById("side-menu").checked) {
            document.getElementById("side-menu").checked = !checked;
        }
    }
});
