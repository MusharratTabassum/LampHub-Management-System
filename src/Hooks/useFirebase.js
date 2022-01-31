import initializeAuthentication from "../firebase/firebase.init";
import { useEffect, useState } from "react";
import {
    getAuth, signInWithPopup,
    GoogleAuthProvider, signOut,
    onAuthStateChanged, createUserWithEmailAndPassword,
    sendPasswordResetEmail, sendEmailVerification,
    updateProfile, signInWithEmailAndPassword
} from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    //Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;

    }, []);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUserRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password should be more than 6 characters");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must contain 2 upper case');
            return;
        }
        else {
            newUserRegistration(email, password);
        }
    }
    const newUserRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();

                // ...
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
        alert('An email has been sent.Check your email to verify.')
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                // ..
            });

    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    //Login withemail and password

    const handleUserLogin = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password should be more than 6 characters");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must contain 2 upper case');
            return;
        }
        else {
            loginProcess(email, password);

        }
    }

    const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        })
    }

    return {
        handleGoogleSignIn,
        logOut,
        user,
        isLoading,
        handleUserRegistration,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        error,
        handleResetPassword,
        handleUserLogin

    }

}

export default useFirebase;