const sounds = ["Digital Watch Alarm Long", "Glass Windows Breaking", "Magnum Shots", "Mechanical Clock Ring", "Medium Bell Ringing Near"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopsongs();
        
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopsongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}

// challenges
// missed brckets for ((sound)
// do not use autocomplete all the time used getElementsby instead of getElementbyId
// sounds crried on while clicking others
// did songs instead of song.pause structure should be right




