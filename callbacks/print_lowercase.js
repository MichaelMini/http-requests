var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowercaseHTML (html) {
	var allLower = html.toLowerCase();
  console.log(allLower);
}

getHTML(requestOptions, printLowercaseHTML);