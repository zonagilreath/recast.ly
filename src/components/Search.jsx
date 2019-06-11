class Search extends React.Component{
  constructor(props){
    super(props)
    this.getResults = props.getResults;
  }
  
  
    
  render(){
    return (
      <div className="search-bar form-inline">
        <input id="searchBox" className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={()=>{
          const query = document.getElementById('searchBox').value;
          this.getResults({query:query, key: this.props.key, max:5});
          return;
        }}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
