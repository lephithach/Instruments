const kickContainerList = document.querySelectorAll(".kick-container .kick");

const playAudio = (element) => {
  element.load();
  element.play();
};

const activeClass = (element) => {
  element.classList.add("active");

  setTimeout(() => {
    element.classList.remove("active");
  }, 100);
};

kickContainerList.forEach((kick) => {
  kick.onclick = (e) => {
    activeClass(kick.querySelector("img"));
    playAudio(kick.querySelector("audio"));
  };
});

const snareContainerList = document.querySelectorAll(".snare-container .snare");

snareContainerList.forEach((snare) => {
  snare.onclick = (e) => {
    activeClass(snare.querySelector("img"));
    playAudio(snare.querySelector("audio"));
  };
});

const clapContainerList = document.querySelectorAll(".clap-container .clap");

clapContainerList.forEach((clap) => {
  clap.onclick = (e) => {
    activeClass(clap.querySelector("img"));
    playAudio(clap.querySelector("audio"));
  };
});

window.addEventListener("keydown", (e) => {
  switch (e.which) {
    case 81:
      document.querySelector(".kick.kick-1").click();
      break;

    case 87:
      document.querySelector(".kick.kick-2").click();
      break;

    case 69:
      document.querySelector(".kick.kick-4").click();
      break;

    case 65:
      document.querySelector(".snare.snare-1").click();
      break;

    case 83:
      document.querySelector(".snare.snare-2").click();
      break;

    case 68:
      document.querySelector(".snare.snare-3").click();
      break;

    case 90:
      document.querySelector(".clap.clap-1").click();
      break;

    case 88:
      document.querySelector(".clap.clap-2").click();
      break;

    case 67:
      document.querySelector(".clap.clap-3").click();
      break;

    default:
      break;
  }
});
