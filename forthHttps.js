function getHTML (options, callback) {
  var allData="";
  var https = require('https')
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      allData+=data;
    })
    .on('end',function(){
      callback(allData)
      // console.log(allData);

    });

  });

}
  /* Add your code here */


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



getHTML(requestOptions, printHTML);



// 5. function sayHello(str){
//   6. console.log("the value is:",str);
// }

// 2. function printCities(callback, array){
//   3. for(var i = 0; i<=array.length-1; i++){
//     4. callback(array[i]);
//   }
// }

// var cities = ["toronto","vancouver","langley"];

// 1. printCities(sayHello,cities);