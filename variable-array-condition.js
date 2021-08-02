var bottleColor = "blue";   //string type variable
var waterQuantity = 2;  //number type variable
var isFull = false; //boolean type variable


//array
var items = ['bottle', 'mug', 'paper', 'clip'];
console.log(items);
console.log(items.indexOf('clip'));
items.push('logens');
items.push('watch');
console.log(items);
items.pop();
console.log(items);
items.shift();
console.log(items);
items.unshift('Plate');
console.log(items);
items[3] = 'Stepler';
console.log(items);

var arrayLength = items.length;

if(arrayLength >= 5){
    console.log("You have too many items");
}
else{
    console.log("You are OK with your items");
}