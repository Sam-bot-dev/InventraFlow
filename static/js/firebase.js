// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWB8mVtPoWIUUFkMX5QZQiFKHYPOK_BRg",
  authDomain: "inventry-8bd08.firebaseapp.com",
  projectId: "inventry-8bd08",
  storageBucket: "inventry-8bd08.firebasestorage.app",
  messagingSenderId: "837943106556",
  appId: "1:837943106556:web:28c785d3c8ec0d1d96b079"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();