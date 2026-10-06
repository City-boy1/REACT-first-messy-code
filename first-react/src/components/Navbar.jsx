import { Link } from "react-router-dom";   
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 

export default function Navbar(){
    const { user, logout } = useContext(AuthContext);
    return(
        <header style={{
            padding:"1rem 1.5rem",
            marginBottom:"1rem",
            borderBottom:"1px solid #e5e7eb",
            display:"flex",
            justifyContent:"space-between",
        }}>
        <nav style={{
            display:"flex",
            gap:"1rem",
        }}>
            <Link to="/" style={{textDecoration:"none"}}>Home</Link>
            <Link to="/profile" style={{textDecoration:"none"}}>Profile</Link>
        </nav>
        {!user.isAuth? (<Link to="/login" style={{textDecoration:"none"}}               >Login</Link>) :(
            <button onClick={logout} style={{
                padding:"0.5rem 1rem",
                backgroundColor:"#49484a",
                color:"white",
                border:"none",
                borderRadius:"0.5rem",
            }}>Logout</button>
        )}
        </header>
    )
}