module.exports = function getHTML (options, callback) {
	const https = require('https');

	https.get(options, function (response) {
	  let contents = '';
	  response.setEncoding('utf8');
	  response.on('data', function(data) {
	    contents += data;
	  });
	  response.on('end', function() {
	    callback(contents);
	  });
	});
};