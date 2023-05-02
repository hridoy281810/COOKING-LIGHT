// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:import.meta.env.VITE_APIKEY,
//     authDomain:import.meta.env.VITE_AUTHDOMAIN,
//     projectId:import.meta.env.VITE_PROJECTID,
//     storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//     appId:import.meta.env.VITE_APPID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQnRn3CTz7HqEVCWheBvXIWjLO4S3GgYY",
  authDomain: "assignment-ten-client-e9e17.firebaseapp.com",
  projectId: "assignment-ten-client-e9e17",
  storageBucket: "assignment-ten-client-e9e17.appspot.com",
  messagingSenderId: "671663814838",
  appId: "1:671663814838:web:3d9a87977a3532476ece17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;