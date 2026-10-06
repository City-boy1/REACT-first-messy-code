import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export default function LoginPage() {   
    const [name,setName] = useState("")
    const { login, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(name)
        navigate("/profile")
    }

    return(
        <main style={{
            padding:"0 1.5rem",
            width:"100%",
            minHeight: "100vh",
            boxSizing:"border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{
            display:"flex",
            flexDirection:"column",
            gap:"1rem",
            width:"100%",
            maxWidth:"400px",
            backgroundColor:"#f3f4f6",
            padding:"1rem 1.5rem",
            borderRadius:"0.5rem",
        }}>

            <label htmlFor="name" style={{
                color:"#374151",
            }}>Username:
            <input type="text" placeholder="Username" name="name" value={name} onChange={(e) => setName(e.target.value)} style={{
                width:"100%",
                padding:"0.5rem 1rem",
                boxSizing:"border-box",
                borderRadius:"0.5rem",
                border:"1px solid #e5e7eb",
                outline:"none",
                marginTop:"0.5rem",
            }}/>
            </label>
            <button type="submit" style={{
                padding:"0.5rem 1rem",
                backgroundColor:"#49484a",
                color:"white",
                borderRadius:"0.5rem",
            }}>Login</button>
            {user.isAuth && <p style={{
                color:"#10b981",
            }}>Welcome, {user.name}!</p>}
        </form>
        </main>
    )
}