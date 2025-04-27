function Clock() {
  const container = document.getElementById("bg");
  const clock = document.createElement("div");
  clock.className = "clock";
  container.append(clock);

  const hourHand = document.createElement("div");
  hourHand.className = "hand hour";
  const minuteHand = document.createElement("div");
  minuteHand.className = "hand minute";
  const secondHand = document.createElement("div");
  secondHand.className = "hand second";
  clock.appendChild(hourHand);
  clock.appendChild(minuteHand);
  clock.appendChild(secondHand);

  function setClock() {
    const d = new Date();
    const seconds = d.getSeconds();
    const secondsRotation = (seconds / 60) * 360 - 90;
    if (seconds === 0) {
      secondHand.style.transition = "none";
    } else {
      secondHand.style.transition = "all 0.5s ease";
    }
    secondHand.style.transform = `rotate(${secondsRotation}deg)`;
    const minutes = d.getMinutes();
    const minutesRotation = (minutes / 60) * 360 - 90;
    minuteHand.style.transform = `rotate(${minutesRotation}deg)`;

    const hours = d.getHours();
    const hoursRotation = 30 * (hours % 12) + minutes / 2 - 90;
    hourHand.style.transform = `rotate(${hoursRotation}deg)`;
  }

  return setClock;
}
const setClock = Clock();
setInterval(setClock, 1000);
setClock();
