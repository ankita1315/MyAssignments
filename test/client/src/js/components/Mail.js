var React=require('react');
var ReactDOM=require('react-dom');
var OpenMail=require('./OpenMail');
var Mail=React.createClass(
{
    getInitialState:function()
    {
    return {nameUp:'',
    showModal : false};

    },
    handleShowModal: function(){
    console.log("show");
    this.setState({showModal : true})
    },
    handleHideModal : function(){
    console.log("hide false");
    this.setState({showModal : false})
    },
    render:function()
    {
    return(
    <div className="Mail" id = "Mail">
    <div className="row">
    <form>
    <div className="MailDiv">
		<a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} data-toggle="modal">
    {this.props.MailAll.msg_from}
    {this.props.MailAll.Msg_snippet}

    </a>
    {this.state.showModal?<OpenMail handleHideModal={this.handleHideModal} MailAll={this.props.MailAll} />:null}
          </div>
            </form>

      </div>
    </div>
    );
  }
});
module.exports = Mail;
