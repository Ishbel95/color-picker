const color = document.getElementById("colorValue");
const mode = document.getElementById("mode");
const form = document.getElementById("form");
const result = document.getElementById("colorSchemeResult");
let html = "";

function renderColorScheme(data) {
  console.log(data);
  html = `<img src="${data.image.named}"/>`;
  result.innerHTML = html;
}

function getColorScheme(colorData) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorData.colorValue}&format=json&mode=${colorData.modeValue}&count=6`
  )
    .then((response) => response.json())
    .then((data) => {
      renderColorScheme(data);
    });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(color.value);
  console.log(mode.value);

  const data = {
    colorValue: color.value.substring(1),
    modeValue: mode.value,
  };
  getColorScheme(data);
});
