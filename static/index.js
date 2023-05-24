const button = document.querySelector(".btn-div");

let arithPositon = () => {
  const list = ["-", "+"];
  const position = Math.floor(Math.random() * 2 + 0);
  return list[position];
};

let buttonRightPosition = (top, right) => {
  button.style.right = arithPositon() + right + "px";
  button.style.top = top + "px";
  button.style.left = "auto";
  button.style.bottom = "auto";
};

let buttonLeftPosition = (bottom, left) => {
  button.style.left = arithPositon() + left + "px";
  button.style.bottom = bottom + "px";
  button.style.right = "auto";
  button.style.top = "auto";
};

button.addEventListener("mouseover", () => {
  const val1 = Math.floor(Math.random() * 50 + 100) + 20;
  const val2 = Math.floor(Math.random() * 200 + 100) + 20;
  const position = Math.floor(Math.random() * 2 + 0);
  if (position == 0) {
    buttonLeftPosition(val1, val2);
  } else {
    buttonRightPosition(val1, val2);
  }
});

button.addEventListener("click", () => {
  alert("You Got Me 😊");
  window.location.reload();
});
