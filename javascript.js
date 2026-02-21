
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === "lx.ruii" && pass === "iloveyou223") {
    window.location.href = "map.html";
  } else {
    error.textContent = "Invalid username or password!";
  }
}
