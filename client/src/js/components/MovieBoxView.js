var React=require('react');

var MovieListView=require('./MovieListView');

var MovieBoxView = React.createClass({
 getInitialState:function()
 {
   return {data:[]};
 },
componentWillMount: function(){
  console.log("ajax");
$.ajax({
  url:"http://localhost:8080/movie_CRUD/",
  type:"GET",
  datatype:"json",
  success:function(data)
  {
    
  console.log(data);
  this.setState({data:data});
  //console.log(movieData);
  }.bind(this),
  error:function(err){
    console.error(err.toString());
  }.bind(this)

});
},

 render: function() {
   return (
     <div className="MovieBoxView" id = "movieBox">

     <div className="row">
       <div className="col-md-12" id="mBoxCol">
   <h1 id="back_color" className="text-center">Movies Collection</h1>

   <hr/>
   <MovieListView data={this.state.data}/>
     </div>
        </div>
     </div>
   );
 }
});
module.exports=MovieBoxView;
