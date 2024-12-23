document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const button = document.getElementById("myButton");
    console.log("Button clicked1");
    button.click();
  } else if (event.key === " ") {
    const button = document.getElementById("sendMessage");
    console.log("Button clicked2");
    button.click();
  } else if (event.key === "Alt") {
    const button = document.getElementById("subscribe");
    console.log("Button clicked3");
    button.click();
  }
});
