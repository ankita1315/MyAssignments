var React=require('react');
var ReactDOM=require('react-dom');
var SaveView=require('./SaveView');

var SaveList=React.createClass(
  {
    render:function()
    {
      console.log(this.props.data1);
    var Mails = this.props.data1.map(function(mail) {
      return (
        <SaveView MailAll={mail} key={mail.msg_id}></SaveView>
      );
    }.bind(this));
    return (
      <div className="SaveList">
          {Mails}
      </div>
    );
  }
 });

module.exports=SaveList;
