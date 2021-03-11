

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




module.exports = {numToWord};
