jQuery(function($) {
        function playVideos(videos) {
            const startPosition = $(window).scrollTop() + $(window).height();
            videos.each(function(index) {
                if(startPosition > $(this).offset().top) {
                    $(this).get(0).play();
                }
            });
        }
        $(window).on('load', function() {
            const videos = $('.video_wrapper > video');
            if(videos.length) {
                playVideos(videos);
                $(window).on('scroll', function() {
                    playVideos(videos);
                });
            }
        });
    });