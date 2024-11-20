import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQqnQExjJIelStSYPh8lghWwzTIMNG5Uw",
  authDomain: "login-be0a2.firebaseapp.com",
  projectId: "login-be0a2",
  storageBucket: "login-be0a2.firebasestorage.app",
  messagingSenderId: "1042408496257",
  appId: "1:1042408496257:web:964baa89c4bef3ffd24180"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)
app.use(router)
app.mount('#app')

