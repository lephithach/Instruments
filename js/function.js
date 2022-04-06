const kickContainerList = document.querySelectorAll(".kick-container .kick");

const playAudio = (element) => {
  //   element.currentTime = 0;
  element.load();
  element.play();
};

kickContainerList.forEach((kick) => {
  kick.onclick = (e) => {
    playAudio(kick.querySelector("audio"));
  };
});

const snareContainerList = document.querySelectorAll(".snare-container .snare");

snareContainerList.forEach((snare) => {
  snare.onclick = (e) => {
    playAudio(snare.querySelector("audio"));
  };
});

const clapContainerList = document.querySelectorAll(".clap-container .clap");

clapContainerList.forEach((clap) => {
  clap.onclick = (e) => {
    playAudio(clap.querySelector("audio"));
  };
});

window.addEventListener("keydown", (e) => {
  console.log(e.which);
});
