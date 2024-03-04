document.addEventListener('DOMContentLoaded', function() {
    const frameCount = 130; // Total number of PNGs
    const fps = 30; // Frames per second
    const frameDelay = 1000 / fps; // Delay between frames in milliseconds
    let images = []; // To store preloaded images
    let imagesLoaded = 0; // Counter for loaded images
    const imgElement = document.getElementById('pngSequence'); // The image element in your HTML

    // Preload images
    for (let i = 1; i <= frameCount; i++) {
        let img = new Image();
        img.onload = function() {
            imagesLoaded++;
            if (imagesLoaded === frameCount) {
                startAnimation(); // Start the animation once all images are loaded
            }
        };
        img.src = `Images/png-sequence/${String(i).padStart(4, '0')}.png`;
        images.push(img);
    }

    let currentFrame = 0; // Start from first image in the preloaded array

    function startAnimation() {
        setInterval(function() {
            imgElement.src = images[currentFrame].src; // Use preloaded images
            currentFrame = (currentFrame + 1) % frameCount; // Loop back after the last frame
        }, frameDelay);
    }
});