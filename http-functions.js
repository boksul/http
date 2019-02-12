module.exports = function getHTML (options, callback) {
    var allData="";
  var https = require('https')
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      allData+=data;
    })
    .on('end',function(){
      callback(allData)
    });

  });
};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};



module.exports(requestOptions, printHTML);