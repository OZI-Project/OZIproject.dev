
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
let menuLinks =document.getElementsByClassName("menu-item")
for(var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("keyUp", function(event){
        event.preventDefault();
        if (event.code === "Enter"){
            menuLinks[i].children[0].focus();
        }
    }
)};
