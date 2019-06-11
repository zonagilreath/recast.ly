const VideoListEntry = (prop) => {
  const setCurrentVideo = prop.setCurrentVideo;
  // setCurrentVideo(prop.video)
  return (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={`https://i.ytimg.com/vi/${prop.video.id.videoId}/default.jpg`} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={()=>{setCurrentVideo(prop.video)}}>{prop.video.snippet.title}</div>
      <div className="video-list-entry-detail">{prop.video.snippet.description}</div>
    </div>
  </div>
)};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
