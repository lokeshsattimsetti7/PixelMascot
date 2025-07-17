const playBtn = document.getElementById("Play-btn");
const thumbnail = document.getElementById("thumbnail");
const player = document.getElementById("player");
const iframe = document.getElementById("frame");

playBtn.addEventListener("click", () => {

    const videoId = "u31qwQUeGuM";
    const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`;

    iframe.src = autoplayUrl;
    thumbnail.style.display = "none";
    player.style.display = "block";
});