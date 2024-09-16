document.addEventListener("click", function (event) {
    const clickAnimation = document.createElement("video");
    clickAnimation.src = "assets/animations/click.webm";
    clickAnimation.className = "click-animation";
    clickAnimation.autoplay = true;
    clickAnimation.muted = true;
    clickAnimation.loop = false;
    clickAnimation.playsInline = true;  // Prevent full-screen on mobile

    // Append the video to the body
    document.body.appendChild(clickAnimation);

    // Set position near the cursor with half width and height adjustments
    const rect = clickAnimation.getBoundingClientRect();
    clickAnimation.style.left = `${event.clientX - rect.width / 2}px`;
    clickAnimation.style.top = `${event.clientY - rect.height / 2}px`;

    // Remove the video after it's done playing
    clickAnimation.onended = function () {
        clickAnimation.remove();
    };
});
