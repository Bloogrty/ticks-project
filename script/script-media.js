let list = document.getElementById("list");

list.style.maxHeight = "0px";

function toggle() {
    if (list.style.maxHeight === "0px") {
        list.style.maxHeight = "400px";
    } else {
        list.style.maxHeight = "0px";
    }
}
