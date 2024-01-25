for(var i=1; i<=100; i++){

   if(i%3 == 0){
        i*i;
        console.log('Fizz');
   } if(i%5 == 0){
    console.log('Buzz');
   }
    if(i%3 == 0 && i%5 == 0){
    console.log('FizzBuzz');
   }
   else{
    console.log(i);
   }
}


for(var i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i);
    }
}

for(var i=100; i>=0; i--){
   if(i%3==0){
    console.log(i);
   }
}


var sum=0;
for(var i=1; i<=100; i++ ){
    sum+=i;

}
console.log(sum);



var multi=1;

for(var i=1; i<=12; i++){
  multi*=i;
}
console.log(multi);