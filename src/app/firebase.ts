import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_WjL_JdpB6HxyHh-34ws8gl-jq5Hxsno",
  authDomain: "soms-86f2f.firebaseapp.com",
  projectId: "soms-86f2f",
  storageBucket: "soms-86f2f.firebasestorage.app",
  messagingSenderId: "688114613064",
  appId: "1:688114613064:web:92bb3d86203fad3684117d",
  measurementId: "G-FKRD1VY0QQ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
