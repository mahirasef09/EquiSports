import { createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo = {
        setUser,
        createNewUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;