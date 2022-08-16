
// 1-vazifa

let sum = /(\w+)\s(\w+)/;
let str = "Shahboz Nurmanov";
let newstr = str.replace(sum, "$2, $1");
console.log(newstr);


// 2-vazifa

let allArrey = [2, 4, 3, 9, 25];
let infoArrey = [];
let one = 1;
let twe = 2;

function number() {
  for (let i = 0; i < allArrey.length; i++) {
    if ((Math.sqrt(allArrey[i]) % one ) == 0 ) {
      infoArrey.push(Math.sqrt(allArrey[i]));
    }
    else{
      infoArrey.push(Math.pow(allArrey[i], twe));

    }
  }
}
number();

console.log(infoArrey);


// 3-vazifa

var lastName = "ShahbozNur";
var r = ""
for (var i = 0; i < lastName.length; i++) {
  var c = lastName.charAt(i);
  r += c + c;
}

console.log(r)
