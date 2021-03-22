import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_FB_KEY,
  authDomain: process.env.VUE_APP_AUTH_FB_DOMAIN,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  appId: process.env.VUE_APP_FB_APP_ID,
};
