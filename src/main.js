/* main.js (main javascript)*/



$ = jQuery = require("jquery");
var React = require("react");
var Home = require("./components/homePage");
var Authors = require("./components/authors/authorPage");
var About = require("./components/about/aboutPage");
var Header = require("./components/common/header");

(function(win){
    "use strict";
    var App = React.createClass({
        render: function(){
            var Child;

            switch(this.props.route){
                case "about": 
                    Child = About; 
                    console.log("About");
                    break;
                case "authors": 
                    Child = Authors; 
                    console.log("Authors");
                    break;                    
                default: 
                    Child = Home;
                    console.log("homePage");
            }
            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );

        }
    });


    function render(){
        var route = window.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById("app"));
    }

    window.addEventListener("hashchange", render);
    render();

})(window);