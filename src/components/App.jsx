import Search from "./Search.js"
import VideoList from "./VideoList.js"
import VideoPlayer from "./VideoPlayer.js"
import YOUTUBE_API_KEY from "../config/youtube.js"
import searchYouTube from "../lib/searchYouTube.js"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentVideo: props.videoList[0],
      videoList: props.videoList,
      key: YOUTUBE_API_KEY,
      queryUnlocked: true
    };
  }
  
  getResults(options){
    if (this.state.queryUnlocked){
      this.setState({
        queryUnlocked : false
      });
      setTimeout(()=>this.setState({
        queryUnlocked : true
      }), 500);
      searchYouTube({
        query:options.query,
        key: YOUTUBE_API_KEY,
        max: options.max || 5
      }, this.setResults.bind(this));
    }
  }
  
  setResults(dataList){
    this.setState({
      videoList: dataList
    })
  }
  
  setCurrentVideo(video){
    this.setState({
      currentVideo: video
    })
  }
  
  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search getResults={this.getResults.bind(this)} key={YOUTUBE_API_KEY} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videoList={this.state.videoList} setCurrentVideo={this.setCurrentVideo.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
