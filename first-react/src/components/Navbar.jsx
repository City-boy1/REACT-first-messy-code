import { Link } from "react-router-dom"
import add from "../assets/add.svg"

export default function Navbar({ colorMode, toggleMode }) {

    return (
        <nav className="navbar">

            <div className="navbar-left">
                <Link
                    className="logo"
                    to="/"
                >
                    PRODUCT STORE 🛒
                </Link>
            </div>


            <div className="navbar-right">

                <Link to="/create">
                    <button className="nav-button">
                        <img src={add} alt="Add" />
                    </button>
                </Link>


                <button
                    className="nav-button"
                    onClick={toggleMode}
                    aria-label="Toggle color mode"
                >
                    {colorMode === "light" ? "🌙" : "☀"}
                </button>

            </div>

        </nav>
    )
}