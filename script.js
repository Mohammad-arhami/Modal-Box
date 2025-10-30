const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal_container = document.getElementsByClassName("modal-container")[0];

openBtn.addEventListener("click" , () => {
    openBtn.style.display = "none";
    modal_container.style.display = "flex";
    document.body.style.backgroundColor = "rgba(34, 0, 37, 1)";
})

closeBtn.addEventListener("click" , () => {
    openBtn.style.display = "inline-block";
    modal_container.style.display = "none";
    document.body.style.backgroundColor= "rgb(64, 0, 70)";
})

window.addEventListener("click" , (event) => {
    console.log(event.target)
    if (event.target == modal_container) {
        openBtn.style.display = "inline-block";
        modal_container.style.display = "none";
        document.body.style.backgroundColor= "rgb(64, 0, 70)";
    }
})