var React=require('react');
var MailList=require('./MailList');
var MData=require('./MailContent.json');

var MailBox = React.createClass({
getInitialState:function()
{
return {data1:[]};
},

getallmails: function(){
this.setState({data1:MData});
},

componentWillMount: function(){
this.getallmails();
},

render: function() {
return (
<div className="MailBox">
<MailList data1={this.state.data1} />
</div>
);
}
});
module.exports=MailBox;
