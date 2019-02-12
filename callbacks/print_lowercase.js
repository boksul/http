var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
  /* Write your code here! */

}

getHTML(requestOptions, printLowerCase);