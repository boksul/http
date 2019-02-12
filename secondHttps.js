var https = require('https');
function getAndPrintHTML () {

  var allData="";
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      allData+=data;
      //console.log("test ",data);
      // forEach((data) => {
      //   var newData = data;
      //   console.log(newData);
      // });
    });
    response.on('end',function(){
      console.log(allData);
    });
  });
  /* Add your code here */

}

getAndPrintHTML();