var React=require('react');

var MailList=require('./SaveList');


var SaveBox = React.createClass({
  getInitialState:function()
   {
     return {data1:[]};
   },
  componentWillMount: function(){
    console.log("ajax");
  $.ajax({
    url:"http://localhost:8080/SaveBox",
    type:"GET",
    datatype:"json",
    success:function(data)
    {
    console.log(data);
    this.setState({data1:data});
    //console.log(MailData);
    }.bind(this),
    error:function(err){
      console.error(err.toString());
    }.bind(this)

  });
  },

 render: function() {
   return (
     <div className="SaveBox">


      <MailList data1={this.state.data1} />

     </div>
   );
 }
});
module.exports=SaveBox;
