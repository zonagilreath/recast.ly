class Search extends React.Component{
  constructor(props){
    super(props)
    this.getResults = props.getResults;
  }
    
  render(){
    return (
      <form onSubmit={(event)=>{
            event.preventDefault();
            const query = document.getElementById('searchBox').value;
            this.getResults({query:query, key: this.props.key, max:5});
            return;
          }}>
        <div className="search-bar form-inline">
          <input id="searchBox" className="form-control" type="text" />
          <button className="btn hidden-sm-down" >
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div> 
      </form>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
