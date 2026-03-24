// MENU
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

// TYPING EFFECT
const words = ["Hussain", "Designer", "Flutter Dev"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = words[i];

  document.getElementById("typing").textContent =
    deleting ? current.substring(0, j--) : current.substring(0, j++);

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// MODAL
function openModal(text) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalText").innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// THEME
function toggleTheme() {
  document.body.classList.toggle("light");
}