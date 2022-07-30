import admin from "firebase-admin";
import {
  applicationDefault,
  initializeApp as initializeAdminApp,
} from "firebase-admin/app";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BIN,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID
};
// Initialize Firebase
if (!admin.apps.length) {
  initializeAdminApp({
    credential: applicationDefault(),
    databaseURL: "https://undoing-ruin.us-east1.firebaseio.com",
  });
}

const db = admin.firestore();
const adminAuth = admin.auth();
const Firebase = initializeApp(firebaseConfig);
const storage = getStorage(Firebase);

async function signIn(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

async function getSessionToken(idToken) {
  const decodedToken = await adminAuth.verifyIdToken(idToken);
  if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
    throw new Error("Recent sign in required");
  }
  const twoWeeks = 60 * 60 * 24 * 14 * 1000;
  return adminAuth.createSessionCookie(idToken, { expiresIn: twoWeeks });
}

async function signOutFirebase() {
  await signOut(getAuth());
}

export { getSessionToken, signOutFirebase, signIn, adminAuth, db, storage }