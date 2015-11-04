var moment = require('moment-timezone');
moment().tz("America/Los_Angeles").format();

console.log(Date.now());
console.log(moment().tz("America/Los_Angeles").format() + " PST");
console.log(moment().tz("America/Denver").format() + " MST");
