function getFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

document.getElementById("Entrar").addEventListener(
  "click",
  function (e) {
    getFullscreen(document.getElementById("reproducir"));
  },
  false
);
