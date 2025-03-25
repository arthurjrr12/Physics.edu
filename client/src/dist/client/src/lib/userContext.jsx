import { createContext, useContext, useState } from "react";
const UserContext = createContext(undefined);
export function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const [currentPath, setCurrentPath] = useState(null);
    const [userProgress, setUserProgress] = useState({
        engineering: 0,
        healthcare: 0,
        aviation: 0
    });
    const login = (email) => {
        setIsLoggedIn(true);
        setUserEmail(email);
    };
    const logout = () => {
        setIsLoggedIn(false);
        setUserEmail(null);
    };
    const updateProgress = (pathId, increment) => {
        setUserProgress((prev) => {
            const currentProgress = prev[pathId] || 0;
            const newProgress = Math.min(currentProgress + increment, 100);
            return { ...prev, [pathId]: newProgress };
        });
    };
    return (<UserContext.Provider value={{
            isLoggedIn,
            userEmail,
            currentPath,
            userProgress,
            login,
            logout,
            setCurrentPath,
            updateProgress
        }}>
      {children}
    </UserContext.Provider>);
}
export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
