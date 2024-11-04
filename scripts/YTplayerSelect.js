var player;

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '350',
        width: '600',
        videoId: '', // Start with no video
        playerVars: {
          autoplay: 1,
          controls: 1,
          fs: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    function onPlayerReady(event) {
      // Optionally, you can start playing the video when the player is ready
    }

    function onPlayerStateChange(event) {
      // Handle player state changes if needed
    }

    document.getElementById('selectCont').addEventListener("change", function() {
      var videoId = this.value;
      if(videoId) {
        player.loadVideoById(videoId);
      }
    });

    // Add event listener for the button to load video by ID from input
    document.getElementById('loadVideoButton').addEventListener("click", function() {
      var videoId = document.getElementById('videoIdInput').value.trim();
      if(videoId) {
        player.loadVideoById(videoId);
      } else {
        alert('Please enter a valid YouTube video ID.');
      }
    });