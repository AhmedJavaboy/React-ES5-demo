"use strict";

var React = require("react");

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron" >
                <h1>My Home page</h1>
                <p>React , react router, and flux for ultra responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;