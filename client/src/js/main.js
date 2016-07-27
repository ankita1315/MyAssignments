var React=require ('react');
//var Reactdom=require('react-dom');
var MovieBox=require('./components/MovieBox');
var MovieBoxView=require('./components/MovieBoxView');

// Reactdom.render(<MovieBox/>,document.getElementById('app'));
//Reactdom.render(<MovieBoxView/>,document.getElementById('app'));

var {render}=require('react-dom');
var { Router, Route, Link, browserHistory, IndexRoute  } =require('react-router');
var Home=require('./components/Home');
var MyNav=require('./components/MyNav');

// var About=require('./components/AboutThisSite');
// .var Contact=require('./components/ContactUs');

var myComponent=React.createClass({
  render:function()
  {
    return(
      <div className="myComponent">
      <MyNav />
      {this.props.children}
      </div>
    );
  }
});
render(
   <Router history = {browserHistory}>
      <Route path = "/" component = {myComponent}>
         <IndexRoute component = {Home} />
         <Route path = "MovieBox" component = {MovieBox} />
         <Route path = "MovieBoxView" component = {MovieBoxView} />
      </Route>
   </Router>

, document.getElementById('app'));
