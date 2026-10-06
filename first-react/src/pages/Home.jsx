import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function homepage() {
    const { user } = useContext(AuthContext);

    return (
        <main className="home-page" style={{
            padding:"0 1.5rem"
        }}>
            <h1>Home</h1>
            {user.isAuth ? (
                <p>Welcome back, {user.name}!</p>
            ) : (
                <p>You are not logged in.Please go to the <Link to="/login">Login</Link> page to log back in.</p>
            )}
        </main>
    )
}