import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const Firebase = {
  API: 'https://apicenter--api-center-6acf0.us-central1.hosted.app/'
};

const firebaseConfigProd = {
  apiKey: "AIzaSyDDAxR8koHRTwu3t4u5hgjtunhTLV1lP-w",
  authDomain: "api-center-6acf0.firebaseapp.com",
  databaseURL: "https://api-center-6acf0-default-rtdb.firebaseio.com",
  projectId: "api-center-6acf0",
  storageBucket: "api-center-6acf0.appspot.com",
  messagingSenderId: "222552119966",
  appId: "1:222552119966:web:724f06daaa39aeefd0798f",
  measurementId: "G-3XQRRVJK1L"
};

const firebaseConfigDev = {
  apiKey: "AIzaSyDDAxR8koHRTwu3t4u5hgjtunhTLV1lP-w",
  authDomain: "api-center-6acf0.firebaseapp.com",
  databaseURL: "https://api-center-6acf0-default-rtdb.firebaseio.com",
  projectId: "api-center-6acf0",
  storageBucket: "api-center-6acf0.appspot.com",
  messagingSenderId: "222552119966",
  appId: "1:222552119966:web:95ce80993176a729d0798f",
  measurementId: "G-EM5SG5HJ4V"
};

const firebaseConfig = process.env.NODE_ENV !== 'production' ? firebaseConfigProd : firebaseConfigDev;

export default Firebase;

export const UserData = {
  findUserByUid: async (uid: string) => {
    const userCollection = collection(db, "user_data");
    const q = query(userCollection, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        console.log('query', querySnapshot);
        return {...userData, id: querySnapshot.docs[0].id};
    } else {
        return null;
    }
  }
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const parseFirebaseError = (error: any) => {
  if (error.code === "auth/invalid-credential") {
    return 'Invalid Credential / User not exists.';
  } else if (error.code === 'auth/email-already-in-use') {
    return 'Email already exists.';
  } else if (error.code === 'auth/user-not-found') {
    return 'User not found.';
  } else if (error.code === 'auth/wrong-password') {
    return 'Wrong password.';
  } else {
    return error.message;
  }
}