import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const Firebase = {
  API: 'https://apicenter--api-center-6acf0.us-central1.hosted.app/'
};

const firebaseConfig = {
  apiKey: "AIzaSyDDAxR8koHRTwu3t4u5hgjtunhTLV1lP-w",
  authDomain: "api-center-6acf0.firebaseapp.com",
  databaseURL: "https://api-center-6acf0-default-rtdb.firebaseio.com",
  projectId: "api-center-6acf0",
  storageBucket: "api-center-6acf0.appspot.com",
  messagingSenderId: "222552119966",
  appId: "1:222552119966:web:724f06daaa39aeefd0798f",
  measurementId: "G-3XQRRVJK1L"
};

export default Firebase;

export const findUserByUid = async (uid: string) => {
  const userCollection = collection(db, "user_data");
  const q = query(userCollection, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return userData;
  } else {
      return null;
  }
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);