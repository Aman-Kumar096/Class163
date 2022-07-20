AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if(e.key === "ArrowUp" || e.key === "ArrowDown" || e.eky === "ArrowLeft" || e.key === "ArrowRight"){
          var sound2 = document.querySelector("#sound2")
          sound2.components.sound.playSound()
        }



      });
    },
  });


  