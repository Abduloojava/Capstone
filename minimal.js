

document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload
  
  let name = this.name.value;
  let email = this.email.value;
  let password = this.password.value;
  let msg = document.getElementById("msg");

  console.log(name, email, password); // check what you typed

  if(name == "" || email == "" || password == ""){
    msg.style.color = "red";
    msg.textContent = "Please fill all fields";
    return;
  }
  if(password.length < 6){
    msg.style.color = "red";
    msg.textContent = "Password must be 6+ characters";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Sign up successful! Redirecting...";

  setTimeout(function(){
    window.location.href = "login.html"; // GO TO NEXT PAGE
  }, 1000);
});