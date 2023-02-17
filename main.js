//tugas 1.
var s = '';
for(var i = 0 ; i < 5; i++){
    for(var j = 0 ; j <= i ; j++){
        s+= '*';
    }
    s+= '\n';
}
for(var i = 4 ; i > 0; i--){
    for(var j = 0 ; j < i ; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);




//tugas 2.
let n = 5;
let string = "";

for (var i = 1; i <= n; i++) {

    for (var j = 1; j <= n - i; j++) {
        string += " ";
    }

    for (var k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);



//tugas 3.
for (var i = 1; i < 20; i++) {
    if (i % 3 == 0 && i % 5 == 0 ) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

