
var React=require('react');
var ReactDOM=require('react-dom');
var MovieUpdate=require('./MovieUpdate');

var MovieView=React.createClass(
 {
   getInitialState:function()
    {
      return {nameUp:'', showModal : false};
    },
    handleShowModal: function(){
      console.log("show");
      this.setState({showModal : true})
    },
    handleHideModal : function(){
      console.log("hide false");
      this.setState({showModal : false})
    },

   DeleteFromDB:function(e)
   {
     console.log('hello in delete method');
     console.log(this.props.MovAll._id);

     e.preventDefault();
    $.ajax({
       url:"http://localhost:8080/movie_CRUD/"+this.props.MovAll._id,
       type:'DELETE',
       datatype:'text',

       success:function(data)
       {
         alert("deleted")
        console.log(data);
         console.log("Deleted");
       }.bind(this),
       error:function(error)
       {
         console.log(error);
       }.bind(this)
     });
   },

   render:function()
   {
     return(
       <div>
     <div className="row">
                <div className="col-md-6">
                    <img alt="movie poster" src={this.props.MovAll.Poster}/>
                </div>
                <div className="col-md-6">
       <form>
                    <h3 className="text">{this.props.MovAll.Title}</h3>
         <p>Year : {this.props.MovAll.Year}</p>
         <button type="button" className="btn btn-warning" onClick={this.DeleteFromDB}><b>Delete</b></button>
        <a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} role="button"
        className="btn btn-info" data-toggle="modal">Update</a>
      {this.state.showModal?<MovieUpdate handleHideModal={this.handleHideModal} MovAll={this.props.MovAll} />:null}

         </form>
         </div>
     </div>
   </div>
   );
 }
});
module.exports = MovieView
