var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (option) {
  var https = require('https');

  /* Add your code here */
  https.get(option, function (response) {
    let contents = '';
  	response.setEncoding('utf8');
  	response.on('data', function(data) {
      contents += data;
      // console.log(contents);
  		// console.log(data + '\n');
  	});
  	response.on('end', function() {
  	  console.log(contents);
  	});
  });
}

getAndPrintHTML(requestOptions);