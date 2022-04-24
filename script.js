
function validate(a,b,c){
  console.log("hi");
  if(a.value == "admin" && b.value == "12345"){
    c();
  } else{
    alert("Enter a valid Username or Password")
  }
};

function todo(){
  window.open("todo.html");
};

