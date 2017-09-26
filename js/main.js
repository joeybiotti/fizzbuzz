console.log("main.js")

//Basic FizzBuzz Solution

console.log("FizzBuzz Solution");

for (var i = 1; i < 100; i++) {
  if(i % 3 == 0 && i % 5 == 0)
      console.log("FizzBuzz");
    else if(i % 3 == 0)
      console.log("Fizz");
    else if (i % 5 == 0)
      console.log("Buzz");
    else
      console.log(i);
}

console.log("*****");

for (var i = 1; i <= 20; i++)
{
  if(i % 15 == 0)
    console.log("FizzBuzz");
  else if(i % 3 == 0)
    console.log("Fizz");
  else if( i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}

//Slightly Shorter Solution

for (var i = 1; i <= 20; i++) {
  console.log(!(i % 15)&&"FizzBuzz" ||  !(i % 3)&& "Fizz" || !(i % 5) && "Buzz" || i);
}

// // Used output var to simplify even more

console.log("Used Vars");

for(i = 1; i <= 20; i++){
  var numbers = ""

  if(i % 3 == 0){
    numbers += "Fizz";
  }
  if( i % 5 == 0){
    numbers += "Buzz";
  }
  console.log(numbers || i);
}

// //Another attempt

console.log("Answers Var");

for (var i = 1; i <= 20; i++) {
  var answer = ""

  if(i % 3 == 0){
    answer += "Fizz";
  }
  if(i % 5 == 0){
    answer += "Buzz";
  }
  console.log(answer || i);
}

//More Practice

console.log("Another attempt");

for (var i = 0; i <= 100; i++) {
  console.log(!(i % 15) && "FizzBuzz" || !(i % 3) && "Fizz" || !(i % 5) && "Buzz" || i);
}

// Writing it the old way again.

for (var i = 0; i <= 100; i++) {
  if(i % 15 == 0){
    console.log("FizzBuzz");
  }else if(i % 3 == 0){
    console.log("Fizz");
  }else if(i % 5 == 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}
