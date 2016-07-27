var React=require('react');
var ReactDOM=require('react-dom');
var ViewAll=require('./ViewAll');
var SaveView=React.createClass(
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
        <div className="SaveView" id = "SaveView">

      <div className="row">

        <form>
        <div className="MailDiv">
					<a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} data-toggle="modal">
          <ul><li>{this.props.MailAll.msg_from}</li>
           <li>{this.props.MailAll.Msg_snippet}</li>
           </ul>
           </a>
           {this.state.showModal?<ViewAll handleHideModal={this.handleHideModal} MailAll={this.props.MailAll} />:null}
          </div>
            </form>

      </div>
    </div>
    );
  }
});
module.exports = SaveView;
