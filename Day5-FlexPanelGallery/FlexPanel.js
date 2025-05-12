import { FlexPanelImages } from "../Utilities/ImageData.js";
import { setAttributes } from "../Utilities/UtilityFunctions.js";

const panels = document.createElement("div");
panels.className = "panel-container";
document.body.appendChild(panels);

for (let i = 0; i < FlexPanelImages.length; i++) {
  const panel = document.createElement("div");
  panel.className = `panel panel${i + 1}`;
  setAttributes(panel, {
    style: `background-image:url('${FlexPanelImages[i].image}')`,
  });
  for (let key in FlexPanelImages[i]) {
    if (key.startsWith("text")) {
      const p = document.createElement("p");
      p.innerText = FlexPanelImages[i][key];
      panel.appendChild(p);
    }
  }

  panels.appendChild(panel);
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
}

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
