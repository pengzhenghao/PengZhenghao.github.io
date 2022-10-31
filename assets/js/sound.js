$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '/assets/myname.m4v');
    audioElement.autoPlay=false;

    $('#soundPlay').click(function(e) {
        audioElement.play();

        // Cancel the default action
    e.preventDefault();
    });
});