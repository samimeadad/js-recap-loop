// Find ODD and EVEN numbers with for loop

var num = 1;

console.log('Print all Even numbers from 1 to 20');
for(;num <= 20; num++){
    if(num % 2 == 0){
        console.log(num);
    }
}

console.log('Print all Odd numbers from 1 to 20');
for(num = 1; num <= 20; num++){
    if(num % 2 != 0){
        console.log(num);
    }
}