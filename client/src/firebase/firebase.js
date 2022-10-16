import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getDatabase(app);
const auth = getAuth();

export const upload = async (item) => {
  if (!item.file) return "";
  const fileName = Date.now().toString() + item.file.name;
  const storageRef = ref(storage, "images/" + fileName);

  const uploadTask = uploadBytesResumable(storageRef, item.file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {}
  );
  await uploadTask;

  let downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
  return downloadUrl;
};
