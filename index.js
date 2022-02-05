function printConsole() {

      var nameInput = document.getElementById('uname');
      var passwordInput = document.getElementById('password');
  
      document.querySelector('form.pure-form').addEventListener('submit', function (e) {
  
      //prevent the normal submission of the form
      e.preventDefault();
  
      console.log(nameInput.value);    
      console.log(passwordInput.value);
  });
  }

// this is fron the "Sign up new users" code snippet here: https://firebase.google.com/docs/auth/web/start#web-version-9 
    
    // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });