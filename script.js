// Listen for any click event on the document
document.addEventListener('click', function(event) {
    var video = document.getElementById('clickAnimation');
    
    // Set the position of the video to the cursor location
    video.style.left = (event.pageX - 75) + 'px';  // Adjusting for half the video width
    video.style.top = (event.pageY - 75) + 'px';  // Adjusting for half the video height
    
    // Show and play the video at the cursor location
    video.style.display = 'block';
    video.play();

    // Hide the video when it finishes playing
    video.onended = function() {
        video.style.display = 'none';
    };
});
