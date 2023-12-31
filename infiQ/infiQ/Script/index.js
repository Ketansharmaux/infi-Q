document.querySelectorAll("#close-btn")[0].addEventListener("click", closeOpenBtn);

X = document.querySelectorAll(".show-menu")[0];
function closeOpenBtn() {
  setTimeout(() => {
    if (X.style.display == "none") {
      X.style.display = "grid";
    } else {
      X.style.display = "none";
    }
  });
}