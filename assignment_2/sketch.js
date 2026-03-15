


  let name= prompt("what is your name?");
  alert ("hi, "+ name + "!");
  let age=Number(prompt("how old are you " + name + " ?"));
  alert("thanks! i'll keep that in mind.")

  let num1= Number(prompt("what is your favorite number?"));
  alert("wow! "+ num1+ " is my favorite number too!");
  let num2= Number(prompt("what is your second favorite number?"));
  
  alert(num1+ " + " + num2 +" = "+ (num1 + num2)); //plus
  alert("let me show you other cool things with your favorite numbers!");
  alert(num1+ " - " + num2 +" = "+ (num1 - num2)); //minus
  alert(num1+ " / " + num2 +" = "+ (num1/num2)); //divide
  alert(num1+ " * " + num2 +" = "+ (num1*num2)); //multiply
  alert(num1+ " % " + num2 +" = "+ (num1 % num2)); //modulus

  alert("fun fact, "+ num1+ " squared is " + (num1*num1));
  alert("also, "+ num2+ " squared is " + (num2*num2) + "!"); 

  let num3= Number(prompt("if you want, you can enter a number with a decimal!"));
  alert("the negative of "+ num3+ " is " + (-1*num3)); //negative
  alert("sin of "+ num3+ " is " + (Math.sin(num3))); //sin
  alert("cos of "+ num3+ " is " + (Math.cos(num3))); //cos
  alert(num3+ " rounded is " + (Math.round(num3))); //rounded

  alert("thanks for your help! for fun, here is the sum of all your numbers divided by your age: " + ((num1+num2)/age));
  