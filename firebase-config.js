
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANj6t_0ZK1O081-MidGvq_5TuXZtXZUtQ",
  authDomain: "candidateportal-3c671.firebaseapp.com",
  projectId: "candidateportal-3c671",
  storageBucket: "candidateportal-3c671.firebasestorage.app",
  messagingSenderId: "71599460872",
  appId: "1:71599460872:web:e48b29fc659b60d49b77bd",
  measurementId: "G-T561E43LL6"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("email").value = user.email;
  } else {
    window.location.href = "login.html";
  }
});
