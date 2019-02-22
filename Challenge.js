// Challenge 1
function test65(numb1 ,numb2)
{
if ((numb1 + numb2 === 65)||(numb1 === 65 || numb2 === 65)) {
console.log(true);
}else
{
console.log(false);
}
}
test65(65,15);

function test65(numb1 ,numb2)
{
if ((numb1 + numb2 === 65)||(numb1 === 65 || numb2 === 65)) {
console.log(true);
}else
{
console.log(false);
}
}
test65(20,20);

function test65(numb1 ,numb2)
{
if ((numb1 + numb2 === 65)||(numb1 === 65 || numb2 === 65)) {
console.log(true);
}else
{
console.log(false);
}
}
test65(2,65);

//Challenge 2
var side1 = 7;
var side2 = 8;
var side3 = 9;
var s = (side1 + side2 + side3)/;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

//Challenge 3
function testGreaterThan(val) {
  if (val > 100)
    return "Over 100";

  if (val > 10)
    return "Over 10";

  return "10 or Under";
testGreaterThan(val)
//Challenge 4
function convert_time(num)
{
  var hours = Math.floor (num/60);
  var minutes = num % 60;
  return hours + minutes;
}
console.log(convert_time(300));
console.log(convert_time(50));
console.log(convert_time(1998));

//Challenge 5
function findCommonCharacters(input1, input2) {
  var one = input1.replace(/ /g, "");
  var two = input2.replace(/ /g, "");
  var result = [];
  for (var i = 0; i < one.length; i++) {
  if (two.indexOf(one[i]) === -1) {
    result.push(one[i]);
  }
  }
  return result.join("");
  console.log(findCommonCharacters(""));
}
