import { keysData } from "./keysData.js";

function createButton() {
  const container = document.getElementById("keys-container");
  keysData.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "keys";

    const btnText = document.createElement("div");
    btnText.className = "key-text";

    var keyCharacter = document.createElement("span");
    keyCharacter.textContent = item?.character;

    const keyName = document.createElement("span");
    keyName.textContent = item?.name;

    const audioClip = document.createElement("audio");
    audioClip.setAttribute("src", item?.sound);

    btnText.appendChild(keyCharacter);
    btnText.appendChild(keyName);

    btn.append(btnText);
    btn.append(audioClip);

    container.appendChild(btn);
  });
  container.addEventListener("click", function (evt) {
    const button = evt.target.closest("button");
    if (button && container.contains(button)) {
      const audio = button.querySelector("audio");
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    }
  });
}
createButton();
