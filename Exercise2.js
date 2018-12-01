// function balikString(str){
//     var word = "";
//     for(var i = str[0].length-1 ; i>=0; i--){
//         word+=str[0][i]
//     }
//     return word
// }

// console.log(balikString(['hello world!']));

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8'