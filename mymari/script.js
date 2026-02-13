/* STORY */
const story =
"Hi My Pretty Baby Mari!\n" +
"I just want to Express my love in simple way.\n" +
"And tell you a little story.\n\n" +
"You stayed up all night just to talk to me,\n" +
"even when your body was already tired.\n\n" +
"You waited for me when I finally woke up,\n" +
"You listen to my rants when I can’t sleep,\n" +
"and somehow make the nights feel less heavy.\n\n" +
"when my head is loud and my heart feels unsure.\n" +
"You take care of me in ways you don’t even notice\n\n" +
"Even from far away,\n "+
"you stayed.\n "+
"You stayed when the distance was hard.\n "+
"And every time you believe in me,\n "+
"it makes me want to become.\n "+
"someone worthy of you.";

let i = 0;
const speed = 90;
const typingText = document.getElementById("typingText");
const startBtn = document.getElementById("startBtn");

function typeStory() {
  if (i < story.length) {
    typingText.innerHTML += story[i] === "\n" ? "<br>" : story[i];
    i++;
    setTimeout(typeStory, speed);
  } else {
    startBtn.style.display = "block";
  }
}
typeStory();

/* NAV */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* REASONS */
const reasons = [
  { title: "😴 You Always Tired", text: "But you never get tired of me." },
  { title: "😏 You're Goofy", text: "You’re weird in a way that feels like home." },
  { title: "🤯 You're Music Addict", text: "Every song hits harder when I imagine you listening to it." },
  { title: "😵 You can’t decide", text: "So I’ll choose with you." }
];

let current = 0;

function openReason(index) {
  current = index;
  updateReason();
  showScreen("reason");
}

function updateReason() {
  document.getElementById("reasonTitle").innerText = reasons[current].title;
  document.getElementById("reasonText").innerText = reasons[current].text;
  document.getElementById("progress").innerText =
    `Reason ${current + 1} of ${reasons.length}`;
}

function nextReason() {
  current = (current + 1) % reasons.length;
  updateReason();
}

/* FLIP */
function flip(card) {
  card.classList.toggle("flipped");
}

/* LETTER */
function openLetter() {
  document.getElementById("letterModal").classList.add("active");
}

function closeLetter() {
  document.getElementById("letterModal").classList.remove("active");
  
  // Show the final greeting after modal closes
  showScreen('finalGreet');
}

/* MUSIC */
const music = document.getElementById("bgMusic");

function startMusic() {
  music.play().catch(err => console.log("User interaction needed for autoplay"));
  document.removeEventListener("click", startMusic);
}

// Start music on first click anywhere
document.addEventListener("click", startMusic);