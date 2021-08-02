// var num1 = "99.5";
// var num2 = 15;
// console.log(num1 + num2);


var num = [99, 98, 97, 96, 95, 94, 93, 92, 91, 90];
var numLen = num.length;

console.log('The Lenght of the num array: ', numLen);

// Array Print with while loop
console.log('Array print with while loop');
var i = 0;
while(i < numLen){
    console.log(num[i]);
    i++;
}

// Array print with for loop
console.log('Array print with for loop');
for(i=0; i<numLen; i++){
    console.log(num[i]);
}

var items = ['bottle', 'mobile', 'books', 'watch', 'tissue', 'keyboard', 'mouse'];

for(i=0; i<items.length; i++){
    var item = items[i];
    console.log(item);
}