// List of sarcastic names
const names = [
  "omkarkale000",
  "Dr.Engineer",
  "Intersteller",
  "0xTerminalGuy",
  "CaptainDevOps",
  "404_Resume_Not_Found"
];

let heading = document.getElementById("main-heading");
let cursor = document.getElementById("cmd-cursor");

// Rotate names every 2 seconds
setInterval(() => {
  const name = names[Math.floor(Math.random() * names.length)];
  heading.textContent = name;
}, 2000);

// Click cursor to trigger transition (Phase 2 logic)
cursor.addEventListener("click", () => {
  // You can implement zoom-out and show terminal next
  alert("Clicked! This will zoom out and open terminal UI in next phase.");
});
