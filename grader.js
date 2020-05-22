function grade(marks)  {
  var grd = "";
  if(marks<=100 && marks==80){
    grd = "A";
  }
  if(marks<=79 && marks==60){
    grd = "B";
  }
  if(marks<=59 && marks==40){
    grd = "C";
  }
  if(marks<=39 && marks>=20){
    grd = "D";
  }
  if(marks<=20 && marks>0){
    grd = "E";
  }
  else{
    "i dont reckon that grade";
  }

  return grd;
}
var g = prompt("Please enter your marks");
var numG = parseInt(g);
alert("Your grade is"+grade(numG));
