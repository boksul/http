var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse (html) {
  console.log(html.split("").reverse().join(""));
  /* Write your code here! */

}

getHTML(requestOptions, reverse);