/*Which day of month was many days ago?
importance: 4
Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:

P.S. The function should not modify the given date.
*/

function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

/*Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.*/
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
//here we pass 0 in day to give the day before
console.log(getLastDayOfMonth(2020, 2)); //31
console.log(getLastDayOfMonth(2012, 1)); //29
console.log(getLastDayOfMonth(2013, 3)); //30

/*
How many seconds have passed today?
Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)
The function should work in any day. That is, it should not have a hard-coded value of “today”.
*/
function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday()); //65671
/*
Format the relative date
importance: 4
Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
*/

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;
  let diffday = Math.round(diffHour / 24);
  let diffMounth = Math.round(diffday / 31);

  // formatting
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (diffSec < 1) {
    return "right now";
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`;
  } else if (diffday < 1) {
    return `${hour} hour. ago`;
  } else if (diffMounth < 1) {
    return `${diffday} day, ${hour} hour. ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 4 ** 5 * 30 * 1000)));
console.log(formatDate(new Date(new Date() - 8086400 * 1000)));
