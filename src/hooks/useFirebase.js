import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeauth from "../Firebase/firebase.init"

initializeauth();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleSignin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        googleSignin,
        logout,
        user
    }
}

export default useFirebase;