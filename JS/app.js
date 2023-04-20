import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyCODow7HLMRU3ik_9glYxoxjE2R6prKjq8",
   authDomain: "recycle-machine-23716.firebaseapp.com",
   projectId: "recycle-machine-23716",
   storageBucket: "recycle-machine-23716.appspot.com",
   messagingSenderId: "715253109818",
   appId: "1:715253109818:web:8dae7aa5ed3ada676e1103",
   measurementId: "G-DEQYWJ115S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("registerForm");
const authLoginRegis = document.getElementById("authLoginRegis");
const profile = document.getElementById("profile");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const email = form.email.value;
   const password = form.password.value;
   createUserWithEmailAndPassword(auth, email, password)
   .then((result) => {
      alert("สมัครสมาชิกสำเร็จ");
   }).catch((err) => {
      alert("สมัครสมาชิกไม่สำเร็จ");
   });
});

onAuthStateChanged(auth, (user) => {
   if (user) {
      // window.location.replace("index.html");
      profile.style.display = "block";
      authLoginRegis.style.display = "none";
   } else {
      profile.style.display = "none";
      authLoginRegis.style.display = "block";
   }
});