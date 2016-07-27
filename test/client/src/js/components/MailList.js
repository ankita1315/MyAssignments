var React=require('react');
var ReactDOM=require('react-dom');
var Mail=require('./Mail');

var MailList=React.createClass(
  {
    render:function()
    {
      console.log(this.props.data1);
    var AllMails = this.props.data1.map(function(mails) {
//console.log("entered");
      return (
        <Mail MailAll={mails} key={mails.msg_id}></Mail>
      );
    }.bind(this));
    return (
      <div className="MailList">
          {AllMails}
      </div>
    );
  }
 });

module.exports=MailList;
