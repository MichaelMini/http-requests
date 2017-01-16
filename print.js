function getAndPrintHTMLChunks () {
	var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
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

getAndPrintHTMLChunks();