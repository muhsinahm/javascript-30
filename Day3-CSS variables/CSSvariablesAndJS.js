import { setAttributes } from "../Utilities/UtilityFunctions.js";

const container = document.createElement("div");
document.body.appendChild(container);
const heading = document.createElement("h2");
container.appendChild(heading);
const hlText = document.createElement("span");
hlText.innerText = "JS";
hlText.className = "hl";

const text = document.createTextNode("Update CSS Variables with ");
heading.append(text, hlText);

const controls = document.createElement("div");
controls.className = "controls";

const spacingControlName = document.createElement("p");
spacingControlName.innerText = "Spacing:";
const spacingInput = document.createElement("input");

setAttributes(spacingInput, {
  type: "range",
  min: "10",
  max: "200",
  value: "10",
  name: "spacing",
});

const blurControlName = document.createElement("p");
blurControlName.innerText = "Blur:";
const blurInput = document.createElement("input");

setAttributes(blurInput, {
  type: "range",
  min: "0",
  max: "25",
  value: "5",
  name: "blur",
});

const baseControlName = document.createElement("p");
baseControlName.innerText = "Base Color:";
const baseInput = document.createElement("input");

setAttributes(baseInput, {
  type: "color",
  value: "#ffc600",
  name: "base",
});
controls.append(
  spacingControlName,
  spacingInput,
  blurControlName,
  blurInput,
  baseControlName,
  baseInput
);

const img = document.createElement("img");
setAttributes(img, {
  src: "https://images.freeimages.com/images/large-previews/d09/field-1389376.jpg?fmt=webp&h=350",
  class: "img",
});

container.append(controls, img);

const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) => {
  input.addEventListener("input", handleUpdate);
});

function handleUpdate(e) {
  const suffix =
    e.target.type === "range" && e.target.name !== "base" ? "px" : "";
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
  );
}
