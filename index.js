
// Attempting to print to console the user name (and eventually password) that gets submitted on Sign Up sheet
console.log(document.getelementbyid('userName').value);

function testFunction() {

for (let i=0; i<10; i++) {
    console.log("x")
    }  
};


// this is fron the "Sign up new users" code snippet here: https://firebase.google.com/docs/auth/web/start#web-version-9 
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });