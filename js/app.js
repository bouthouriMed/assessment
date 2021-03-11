// App initiliazer
const initApp = () => {
  // Initializes the app, registers the button click listener

  const button = document.getElementById("button");
  button &&
    button.addEventListener("click", (e) => {
      e.preventDefault();
      convert();
    });
};

// The actual convert function
function convert() {
  var bigNumArry = new Array(
    "",
    " thousand",
    " million",
    " billion",
    " trillion",
    " quadrillion",
    " quintillion"
  );

  var output = "";

  var numString = document.getElementById("number").value;

  var finalOutput = new Array();

  if (numString == "0") {
    document.getElementById("output").innerHTML = "Zero";
    return;
  }

  if (numString == 0) {
    document.getElementById("output").innerHTML = "Please enter a valid number";
    return;
  }

  var i = numString.length;
  i = i - 1;

  // Cut the number to groups of three digits and add them to the Array (for 4+ digits numbers)
  while (numString.length > 3) {
    var triDig = new Array(3);
    triDig[2] = numString.charAt(numString.length - 1);
    triDig[1] = numString.charAt(numString.length - 2);
    triDig[0] = numString.charAt(numString.length - 3);

    var varToAdd = triDig[0] + triDig[1] + triDig[2];
    finalOutput.push(varToAdd);
    i--;
    numString = numString.substring(0, numString.length - 3);
  }

  //   For -3 digits numbers, add them directly to the array
  finalOutput.push(numString);
  finalOutput.reverse();

  console.log(finalOutput);

  // Convert each group of three digits to an English word
  // If all digits are zero the numToWordsConverter
  // Function return the string "dontAddBigSufix"
  for (let j = 0; j < finalOutput.length; j++) {
    finalOutput[j] = numToWord(parseInt(finalOutput[j]));
  }

  console.log(finalOutput);

  var bigScaleCounter = 0; //this int mark the million billion trillion... Arry

  for (let b = finalOutput.length - 1; b >= 0; b--) {
    console.log(b);
    if (finalOutput[b] != "dontAddBigSufix") {
      finalOutput[b] = finalOutput[b] + bigNumArry[bigScaleCounter] + " , ";
      bigScaleCounter++;
    } else {
      //replace the string at finlOP[b] from "dontAddBigSufix" to empty String.
      finalOutput[b] = " ";
      bigScaleCounter++; //advance the counter
    }
  }

  // Convert The output Array to more printable string
  for (let n = 0; n < finalOutput.length; n++) {
    output += finalOutput[n];
  }

  document.getElementById("output").innerHTML = output; //print the output
}

// Function to convert numbers from 1 to 999 to words
function numToWord(num) {
  var ones = new Array(
    "",
    " one",
    " two",
    " three",
    " four",
    " five",
    " six",
    " seven",
    " eight",
    " nine",
    " ten",
    " eleven",
    " twelve",
    " thirteen",
    " fourteen",
    " fifteen",
    " sixteen",
    " seventeen",
    " eighteen",
    " nineteen"
  );
  var tens = new Array(
    "",
    "",
    " twenty",
    " thirty",
    " forty",
    " fifty",
    " sixty",
    " seventy",
    " eighty",
    " ninety"
  );
  var hundred = " hundred";
  var output = "";
  var numString = num.toString();

  if (num == 0) {
    return "dontAddBigSufix";
  }
  //the case of 10, 11, 12 ,13, .... 19
  if (num < 20) {
    output = ones[num];
    return output;
  }

  //100 and more
  if (numString.length == 3) {
    output = ones[parseInt(numString.charAt(0))] + hundred;
    output += tens[parseInt(numString.charAt(1))];
    output += ones[parseInt(numString.charAt(2))];
    return output;
  }

  output += tens[parseInt(numString.charAt(0))];
  output += ones[parseInt(numString.charAt(1))];
  console.log(output);
  return output;
}

// Init the app
initApp();

module.exports = { numToWord };
