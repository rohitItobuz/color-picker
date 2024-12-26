const button = document.getElementById("button");

button.addEventListener("click", () => {
  const color = '#' + Math.floor(Math.random() * 1000000);
  button.textContent = color;
  document.body.style.backgroundColor = color;
  navigator.clipboard.writeText(color);
  alert("Copied color: " + color);
});
