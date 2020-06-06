// VIDEO PLAY
$(function() {

    $("#video__play").click(function() {
        $(this).parents('.video-video-box').html('<iframe width="770" height="475" src="https://www.youtube.com/embed/R2y8CytuZEA?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });
});