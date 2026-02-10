const popup = document.getElementById("popup");
const text = document.getElementById("popup-text");
const music = document.getElementById("loveMusic");

let roseInterval;

/* ================= POPUP LOGIC ================= */

function openYes() {
  if (!popup || !text) return;

  text.innerHTML = `
    🌹 Yayyyy!! 🌹<br><br>
    My heart is beating only for you 💓  
    Thank you for choosing me, my Moon 😚<br>  
    I love you forever ⭐
  `;

  popup.style.display = "flex";

  const popupBox = document.querySelector(".popup-content");
  popupBox.classList.add("heartbeat", "yes-popup");

  music.pause();
  music.currentTime = 0;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("Audio blocked:", error);
    });
  }

  roseInterval = setInterval(createRose, 300);
}

function openNo() {
  if (!popup || !text) return;

  text.innerHTML = `
    Huh??<br><br>
    Balisindhara..ekkuva chesthunnav<br>
    No enti No<br>
    Already yesss akkada..life long barinchali<br>
    Kathal dengakunda, G muskoni "Yes" clik cheyyi
  `;
  popup.style.display = "flex";
}

function closePopup() {
  if (!popup) return;

  popup.style.display = "none";

  if (music) music.pause();

  const popupBox = document.querySelector(".popup-content");
  popupBox.classList.remove("heartbeat", "yes-popup");

  clearInterval(roseInterval);
}

/* ================= ROSES ================= */

function createRose() {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.textContent = "💜";

  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animation = `fall ${Math.random() * 3 + 4}s linear forwards`;

  document.body.appendChild(rose);

  setTimeout(() => rose.remove(), 8000);
}
