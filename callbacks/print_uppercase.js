var getHTML = require('./http-functions');


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
  /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);