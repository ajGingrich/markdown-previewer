var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(<App />, document.getElementById('markUp'));

/*fetch('https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.js', {
    method: 'get'
}).then(function(response) {
    console.log(response);
    document.getElementById('test').append(response.body.__proto__.getReader);
}).catch(function(error) {
    console.log(error);
});*/