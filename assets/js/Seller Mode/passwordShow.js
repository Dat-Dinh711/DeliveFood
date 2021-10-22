var table = document.querySelector(".edit-table");

function showHide(input, icon) {
  type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  icon.classList.toggle("fa-eye-slash");
}

table.addEventListener("click", (event) => {
  if (event.target.matches("#togglePassword")) {
    var icon = event.target;
    var input = icon.previousElementSibling;
    showHide(input, icon);
  }
});
