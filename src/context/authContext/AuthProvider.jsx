import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
        const [loading, setLoading] = useState(true)
        const[user, setUser] = useState(null)

        const provider =new GoogleAuthProvider();
        const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }
        // sign in user
        const signInUser = (email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
        // sign in google
        const googleSignIn = () =>{
            setLoading(true);
            return signInWithPopup(auth, provider)
        }

        // sign out
        const userSignOut = () =>{
            setLoading(true)
            return signOut (auth)
        }

        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                setLoading(false)
                setUser(currentUser)
                console.log('user in the auth state change', currentUser);
                
            })
            return ()=>{
                unSubscribe();
            }
        },[])
    const authInfo ={
        loading,
        user,
        createUser,
        signInUser,
        googleSignIn,
        userSignOut
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    ); 
};

export default AuthProvider;