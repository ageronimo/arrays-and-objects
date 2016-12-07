/*

  Angela Geronimo
  Arrays and Objects
  Dec. 5, 2016

*/


// ARRAYS
// 10 numbers, 5 names, 3 colors
// SYNTAX YO
var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zakattack", "Yolo Baggins", "Ohai", "Basic Jeff"];
var colors = ["light black", "ron burgandy", "highlighter"];
var adj = ["smart", "special", "yummy", "tiny", "ferocious"];
var slang = ["scrap", "kobe beef", "da kine", "li 'dat", "pau hana"];


// OBJECTS
var donut = {
  toppings : ["sprinkles", "chocolate frosting", "o'hare air"],
  filling : "jelly",
  shape : "square",
  count : 12
};


//----------------------------//


/*
  Create and name a function with one para. console.log adding two values from the
  numbers array via the parameter. Invoke the function and pass the numbers array.
*/

function random(para) {
  console.log(para[2]+para[5]);
}

random(numbers);


//----------------------------//


/*
 Create and name a function with one parameter. Create a for loop and set the length to
 the parameter's key with the value of the array. Console.log a sentence for each 
 value. Invoke your function and pass one of your objects
*/

/*
var i;

function thatsWhat(para) {
  for (i >= 0, i <= para.length, i++) {
    console.log("She said " + para[i]);
  }
}

thatsWhat(donut.toppings);
*/


//----------------------------//

/*
  Create and name a function with one parameters. Create a conditional that checks the 
  first parameter for true or false. If true, console.log a sentence that uses values
  from the parameter's strings and numbers. Else console.log a sentence that uses 
  different values from the parameter that are strings and numbers.
  Invoke your function and pass one of your objects
*/

function wow(one) {
  if (one.toppings[0] == "sprinkles") {
    console.log("She wanted " + one.toppings[0] + ", " + one.toppings[1] + ", and " + one.toppings[2] + ".");
  } else {
    console.log("She wanted " + one.count + " of all the " + one.filling + " donuts.")
  }
}

wow(donut);