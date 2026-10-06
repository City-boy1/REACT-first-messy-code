import { createContext, useState } from "react";

export const AuthContext = createContext(); 
export function AuthProvider({ children }) {
        const [user,setUser] = useState({
            name:"",
            isAuth:false
        })
        const login = (name) => {
            setUser({
                name:name,
                isAuth:true
            })
        }
        const logout = () => {
            setUser({
                name:"",
                isAuth:false
            })
        }

        return(
            <AuthContext.Provider value={{ user, logout, login }}>
                {children}
            </AuthContext.Provider>
        )
    }