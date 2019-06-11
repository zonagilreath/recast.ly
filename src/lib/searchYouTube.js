import YOUTUBE_API_KEY from "../config/youtube.js"

var searchYouTube = (options, callback) => {
  // TODO
  console.log(YOUTUBE_API_KEY)
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?query=${options.query}&part=snippet&key=${options.key}&maxResults=${options.max || 5}`,
    type: 'GET',
    // data: { order: '-createdAt' },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('youtube: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;
