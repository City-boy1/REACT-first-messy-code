import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
export default function ProfilePage() {
    const { user } = useContext(AuthContext)

    return (
        <main className="profile-page" style={{
            padding:"0 1.5rem"
        }}>
            <h1>Profile</h1>
            <p>This is the profile page.</p>
            <p>Hi, {user.name ? user.name : "Guest"}!</p>
        </main>
    )
}