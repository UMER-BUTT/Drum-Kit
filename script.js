const crash = new Audio("sounds/crash.mp3");
const kick = new Audio("sounds/kick-bass.mp3");
const snare = new Audio("sounds/snare.mp3");
const tom1 = new Audio("sounds/tom-1.mp3");
const tom2 = new Audio("sounds/tom-2.mp3");
const tom3 = new Audio("sounds/tom-3.mp3");
const tom4 = new Audio("sounds/tom-4.mp3");


const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
  };


  // CRASH
const crashKey = document.querySelector(".crash");
const playcrash = () => {
  playSound(crash);
  crashKey.classList.add("active");
  setTimeout(() => crashKey.classList.remove("active"), 200);
};
crashKey.addEventListener("click", playcrash);

// Kick-Bass
const kickKey = document.querySelector(".kick");
const playkick = () => {
  playSound(kick);
  kickKey.classList.add("active");
  setTimeout(() => kickKey.classList.remove("active"), 200);
};
kickKey.addEventListener("click", playkick);

// Snare
const snareKey = document.querySelector(".snare");
const playsnare = () => {
  playSound(snare);
  snareKey.classList.add("active");
  setTimeout(() => snareKey.classList.remove("active"), 200);
};
snareKey.addEventListener("click", playsnare);

// TOM-1
const tom1Key = document.querySelector(".tom1");
const playtom1 = () => {
  playSound(tom1);
  tom1Key.classList.add("active");
  setTimeout(() => tom1Key.classList.remove("active"), 200);
};
tom1Key.addEventListener("click", playtom1);

// TOM-2
const tom2Key = document.querySelector(".tom2");
const playtom2 = () => {
  playSound(tom2);
  tom2Key.classList.add("active");
  setTimeout(() => tom2Key.classList.remove("active"), 200);
};
tom2Key.addEventListener("click", playtom2);

// TOM-3
const tom3Key = document.querySelector(".tom3");
const playtom3 = () => {
  playSound(tom3);
  tom3Key.classList.add("active");
  setTimeout(() => tom3Key.classList.remove("active"), 200);
};
tom3Key.addEventListener("click", playtom3);

// TOM-4
const tom4Key = document.querySelector(".tom4");
const playtom4 = () => {
  playSound(tom4);
  tom4Key.classList.add("active");
  setTimeout(() => tom4Key.classList.remove("active"), 200);
};
tom4Key.addEventListener("click", playtom4);


// keydown


window.addEventListener("keydown", ({ keyCode }) => {
    // Press A
    if (keyCode === 65) return playcrash();
  
    // Press S
    if (keyCode === 83) return playkick();
  
    // Press D
    if (keyCode === 68) return playsnare();
  
    // Press F
    if (keyCode === 70) return playtom1();
  
    // Press G
    if (keyCode === 71) return playtom2();
  
    // Press H
    if (keyCode === 72) return playtom3();
  
    // Press J
    if (keyCode === 74) return playtom4();

}); 