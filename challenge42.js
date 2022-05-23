/*Description // 7kyu List Filtering
Description
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
  return l.filter((el) => typeof el === "number");
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

//output : [ 1, 2, 123 ]

async function LoadJson(url) {
  let response = await fetch(url);
  if (response.status === 200) {
    let json = await response.json();
    return json;
  }
  // try {
  //   let scr = await response.json();
  //   return scr;
  // } catch (e) {
  //   throw new Error(response.status);
  // }
  throw new Error(response.status);
}

LoadJson("http://javascript.info/no-such-user.json").catch(console.error);
