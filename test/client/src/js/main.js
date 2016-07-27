var React=require('react');
var {render}=require('react-dom');
var {browserHistory, Route, Router, IndexRoute}=require('react-router');
var NavBarComponent=require('./components/MyNav');
var MailBox=require('./components/MailBox');
var Home=require('./components/Home');
var MailContent=require('./components/MailContent');
var SaveBox=require('./components/SaveBox');
var MainComponent=React.createClass({

render:function(){
  return(
    <div className="MainComponent">
      <MyNav/>
      <br/><br/><br/>
      {this.props.children}
    </div>
);
}
});

  render(
    <Router history={browserHistory}>
    <Route path="/" component={MainComponent}>
    <IndexRoute component={Home} />
   <Route path="MailBox" component={MailBox} />
<Route path="SaveBox" component={SaveBox}/>
    </Route>
    </Router>
    ,document.getElementById('app'));
