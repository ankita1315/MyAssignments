var React=require ('react');

var MovieForm = React.createClass({
  getInitialState:function(){
    return{Title:''};
  },
  handleTitleChange:function(e)
  {
    this.setState({Title:e.target.value});
console.log(this.state.Title);
  },

  submitTitle:function(e)
  {
    e.preventDefault();
      this.props.handleSubmitTitle({
      Title:this.state.Title});
  },
  render: function() {

    return (
      <div className="movieForm" >
      <form onSubmit={this.submitTitle} className="navbar-form navbar-left" role="search">
						<div className="form-group">
							<input type="text" name="Title" value={this.state.Title} onChange={this.handleTitleChange} className="form-control"/>
						<button type="submit" className="btn btn-default">
							Search
						</button></div>

					</form>
</div>
    );
  }
});


module.exports= MovieForm;
