const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

checkButton.addEventListener("click", function () {
  message.textContent = "页面运行正常";
});
