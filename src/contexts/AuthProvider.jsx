import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../utils/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const gitProvider = new GithubAuthProvider();

const googleProvider = new GoogleAuthProvider();

export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfile = (name, photoUrl) => {
        return updateProfile(name, photoUrl)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, gitProvider)
    }

    const authinfo = {
      createUser,
      signIn,
      userProfile,
      signInWithGoogle,
      signInWithGithub,
    };

    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
       
    );
}

export default AuthProvider;
