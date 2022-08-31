const color = document.getElementById("colorValue");
const mode = document.getElementById("mode");
const form = document.getElementById("form");
const result = document.getElementById("colorSchemeResult");

let html = "";

function renderColorScheme(data) {
  let colorArr = data.colors;
  for (let hex of colorArr) {
    html = `
            <div class="color-scheme-content">
             <img src="${hex.image.bare}"/>
            <p>${hex.hex.value}</p>
            <div>
            `;
    result.innerHTML += html;
  }

  console.log(colorArr);
  console.log(data);
}

function getColorScheme(colorData) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorData.colorValue}&format=json&mode=${colorData.modeValue}&count=5`
  )
    .then((response) => response.json())
    .then((data) => {
      renderColorScheme(data);
    });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  result.innerHTML = "";
  const data = {
    colorValue: color.value.substring(1),
    modeValue: mode.value,
  };
  getColorScheme(data);
});
