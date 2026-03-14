function signup(){

let name = document.getElementById("full-name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

firebase.auth().createUserWithEmailAndPassword(email,password)
.then((userCredential)=>{

let user = userCredential.user;

firebase.firestore().collection("users").doc(user.uid).set({
    name: name,
    email: email,
    role: "user"
});

alert("Account created");

window.location.href="/dashboard";

})
.catch((error)=>{
alert(error.message);
});

}