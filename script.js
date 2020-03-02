let city1 = "Missouri";
let city2 = "Maryville";
console.log(city1.length);
console.log(city2.length);

function myFunction() {

   return  Math.min(city1.length, city2.length);
   }
   document.getElementById("myFunction").innerHTML = (Math.min(city1.length, city2.length)) ;
