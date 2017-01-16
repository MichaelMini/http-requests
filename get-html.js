function getHTML (options, callback) {
  const https = require('https');
  /* Add your code here */
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
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);