

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



// 2. LOGIN
const loginForm = document.getElementById("login-form");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    let email = this.email.value.trim();
    let password = this.password.value;
    let msg = document.getElementById("msg");

    if(email == "" || password == ""){
      msg.style.color = "red"; msg.textContent = "Please fill all fields"; return;
    }

    msg.style.color = "green"; msg.textContent = "Login successful! Redirecting...";
    setTimeout(() => window.location.href = "register.html", 1000);
  });
}

// 3. REGISTRATION
const registerForm = document.getElementById("register-form");
if(registerForm){
  registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    let fullname = this.fullname.value.trim();
    let phone = this.phone.value.trim();
    let msg = document.getElementById("msg");

    if(fullname.length < 3){
      msg.style.color = "red"; msg.textContent = "Enter full name"; return;
    }
    if(phone.length < 10){
      msg.style.color = "red"; msg.textContent = "Enter valid phone"; return;
    }

    msg.style.color = "green"; msg.textContent = "Registration submitted! Redirecting...";
    setTimeout(() => window.location.href = "success.html", 1000);
  });
}