function ajax(){
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var response = JSON.parse(this.responseText);
        var output = "";
        for(var i=0; i<response.length;i++){
          if(response[i].completed == false){
          output += `<li><input type="checkbox" id="check" onchange="checkAddress(this); checkbox()">&nbsp ${response[i].title}</li>`;
          }
          else if(response[i].completed == true){
            output += `<li><input type="checkbox" checked disabled>&nbsp ${response[i].title}</li>`;
          }
        }
        document.getElementById('list').innerHTML=output;
      }; 
    };

  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xmlhttp.send();

};
let i=0;
    function checkAddress(checkbox){
     
      if (checkbox.checked)
      {
      i++;
      console.log(i);
      }
      else{
        i--;
        console.log(i); 
      }
      return i;
    };
    
    function checkbox(){
      if(i==5){
        alert("Congrats. 5 Tasks have been Successfully Completed");
      }
    };

  var promise = new Promise(function(resolve,reject) {
    console.log(i);
    if(i == 5){
      resolve("Congrats. 5 Tasks have been Successfully Completed");
    }
    else{
      reject("error");
    }
  });

  promise
  .then(function(r){
      alert(r);
      console.log(r);
    })
  .catch(function(e){
  console.log(e);
  });



  