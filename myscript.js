let Btn = document.getElementById("btn");
let NameInput = document.getElementById("nameinput");
let EmailInput = document.getElementById("emailinput");

let Handlesubmit = () => {
  let name = NameInput.value;  
  let email = EmailInput.value;  
  console.log("Name: ", name);
  console.log("Email: ", email);
  NameInput.value = "";  
  EmailInput.value = "";  
};

Btn.addEventListener("click", Handlesubmit);
