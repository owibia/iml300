window.addEventListener("load", () => {
    const typeSound = document.getElementById("type-sound");
    const buttonLink = document.querySelector(".circle-button");

    if (!typeSound) return;

    const pauseStart = parseInt(typeSound.dataset.pauseStart);
    const pauseEnd = parseInt(typeSound.dataset.pauseEnd);
    const totalTime = parseInt(typeSound.dataset.total);

    typeSound.play().catch(() => console.log("Click to enable audio"));

    setTimeout(() => {
        typeSound.pause();
    }, pauseStart);

    setTimeout(() => {
        typeSound.play();
    }, pauseEnd);

    setTimeout(() => {
        typeSound.pause();
    }, totalTime);

    setTimeout(() => {
    if (buttonLink) buttonLink.classList.add("show-button");
    }, totalTime + 1500);
});