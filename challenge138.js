/* Description //7kyu //Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeUrlAnchor(url) {
  return url.includes("#") ? url.slice(0, url.indexOf("#")) : url;
}
//other solution
function removeUrlAnchor(url) {
  return url.split("#")[0];
}
console.log(removeUrlAnchor("www.codewars.com#about")); //www.codewars.com
console.log(removeUrlAnchor("www.codewars.com?about")); //www.codewars.com?about
console.log(removeUrlAnchor("www.codewars.com/code#info")); //www.codewars.com/code
