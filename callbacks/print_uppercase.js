var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUppercaseHTML (html) {
	var allCaps = html.toUpperCase();
  console.log(allCaps);
}

getHTML(requestOptions, printUppercaseHTML);