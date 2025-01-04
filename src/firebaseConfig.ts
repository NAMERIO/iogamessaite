import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_auth_domain",
    projectId: "your_project_id",
    storageBucket: "your_storage_bucket",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id",
    measurementId: "111"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
