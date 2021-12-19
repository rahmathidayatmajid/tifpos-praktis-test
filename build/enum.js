"use strict";
//enum
//numeric enum
// enum month {
//     JAN = 1,
//     FEB,
//     MAR,
//     APR,
//     MEI
// }
// console.log(month); 
//string enum
var month;
(function (month) {
    month["JAN"] = "January";
    month["FEB"] = "February";
    month["MAR"] = "Maret";
    month["APR"] = "April";
    month["MEI"] = "Mei";
})(month || (month = {}));
console.log(month.MAR);
