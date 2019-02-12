function getAndPrintHTML(options) {
  var allData="";
  var https = require('https')
  /* Add your code here */
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      allData+=data;
      //console.log("test ",data);
      // forEach((data) => {
      //   var newData = data;
      //   console.log(newData);
      // });
    })
    .on('end',function(){
      console.log(allData);
    });

  });

}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

