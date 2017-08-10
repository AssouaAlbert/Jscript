document.getElementById("demo6").innerHTML = 5 + 6; 
function add1()
  {  
              document.getElementById("demo7").innerHTML = " demo7 (5 + 6) = " + (5+6);
  }
        /* This line of code adds a single object called person and it's properties are firstname, last name , age and eyecolor */
var person = {firstName: "John", lastName:"Doe", age:50, eyeColor:"blue"};
document.getElementById("demo8").innerHTML = person.firstName + " is " + person.age + " years old.";