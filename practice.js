let penis = "8====D";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Create a temporary element to show the text
let display = document.createElement("div");
display.style.fontSize = "24px";
display.style.fontFamily = "monospace";
document.body.appendChild(display);

for (let i = 0; i < penis.length; i++) {
  // Add the character to the HTML element
  display.innerText += penis[i];
  await sleep(500);
}
