// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA3u_PaiNu_XdmGO4mNw3WXzE8CRJRxmik",
    authDomain: "tnvs-site.firebaseapp.com",
    projectId: "tnvs-site",
    storageBucket: "tnvs-site.firebasestorage.app",
    messagingSenderId: "278029964442",
    appId: "1:278029964442:web:f961a26ca0b20ea61b7b23",
    measurementId: "G-HZ3DZ31081"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);