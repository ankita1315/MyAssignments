var React = require('react');

var SearchBar = require('./SearchBar');
var MovieList = require('./MovieList');

var MovieBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleReq : function(movieSearched){
    $.ajax({
      url: "http://www.omdbapi.com/?s="+movieSearched.Title,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.Search});
        console.log(data);
      }.bind(this),
      error: function(err) {
        console.error(err);
      }.bind(this)
    });
  },
  componentWillMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="movieBox" id = "movieBox">

      <div className="row">
    		<div className="col-md-12" id="mBoxCol">
    			<h1 id="back_color" className="text-center">Movies Collection</h1>
            <SearchBar handleSubmitTitle={this.handleReq}/>
            <hr/>
            <MovieList mdata={this.state.data}/>
          </div>
         </div>
      </div>
    );
  }
});

module.exports= MovieBox;
