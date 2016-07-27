var React = require('react');
var ReactDOM = require('react-dom');

var Movies = React.createClass({
  addMovie: function(e) {
     console.log("URL:"+this.props.allData.Title);
     e.preventDefault();
   $.ajax({
     url:"http://localhost:8080/movie_CRUD/add/"+this.props.allData.Title,
     type:'POST',
     dataType:'json',

     success: function(data) {
       alert("inserted");
       console.log(data);
}.bind(this),
     error: function(err) {
       console.log(err);
     }.bind(this)
   });
 },


  render: function() {
    return (
      <div className="movie">
         <div className="row">
      				<div className="col-md-6 pull-left" id="Poster">
      					<img alt="movie poster" src={this.props.allData.Poster} />
      				</div>
      				<div className="col-md-6 pull-right">
              <form onSubmit={this.addMovie}>
                <h3>{this.props.allData.Title}</h3>
                <p>Year:{this.props.allData.Year}</p>

                <button type="submit" className="btn btn-info">Add movie database</button>
                </form>
      				</div>
      			</div>


      </div>

    );
  }
});

module.exports = Movies;
