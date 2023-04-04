function validateRegistration() {
    const username = document.getElementById("register-username");
    const password = document.getElementById("register-password");
    const confirmPassword = document.getElementById("register-confirm-password");
    const birthday = document.getElementById("register-birthday");
    const acceptTos = document.getElementById("accept-tos");
    const acceptPrivacy = document.getElementById("accept-privacy");
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  
    if (username.value.length < 6) {
      alert("Username must be at least 6 characters long.");
      return false;
    }
  
    if (!passwordRegex.test(password.value)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.");
      return false;
      }
      
      if (password.value !== confirmPassword.value) {
      alert("Passwords do not match.");
      return false;
      }
      
      const currentDate = new Date();
      const userBirthday = new Date(birthday.value);
      const ageDifference = currentDate - userBirthday;
      const age = new Date(ageDifference).getUTCFullYear() - 1970;
      
      if (age < 13) {
      alert("You must be at least 13 years old to register.");
      return false;
      }
      
      if (!acceptTos.checked || !acceptPrivacy.checked) {
      alert("You must accept the Terms of Service and the Privacy Policy.");
      return false;
      }
      
      return true;
      }
  
  
  