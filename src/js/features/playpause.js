(function() {
    var playpauseText = chrome.i18n.getMessage('play');
    
    // PLAY/pause BUTTON
    MediaElementPlayer.prototype.playpause = function() {
        var t = this;
        
        $('<div class="mejs-button mejs-playpause-button mejs-play" >' +
            '<button type="button" title="' + playpauseText + '" aria-label="' + playpauseText + '"></button>' +
        '</div>')
            .on('click', function(e) {
                e.preventDefault();
                t.isPaused() ? t.play() : t.pause();
            })
            .appendTo(t.leftControls);
    };
})();
