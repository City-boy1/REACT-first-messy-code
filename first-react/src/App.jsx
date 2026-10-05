// import { useState } from "react"
// import { Route, Routes } from "react-router-dom"

// import HomePage from "./pages/HomePage"
// import CreatePage from "./pages/CreatePage"
// import Navbar from "./components/Navbar"

// import "./App.css"

// export default function App() {

//     const [colorMode, setColorMode] = useState("dark")

//     function toggleMode() {
//         setColorMode(prevMode =>
//             prevMode === "light" ? "dark" : "light"
//         )
//     }

//     return (
//         <div className={`app ${colorMode}`}>

//             <Navbar
//                 colorMode={colorMode}
//                 toggleMode={toggleMode}
//             />

//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/create" element={<CreatePage />} />
//             </Routes>

//         </div>
//     )
// }

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ViewBooks from "./pages2/Homepage";
import EditBook from "./pages2/Editpage";
import CreateBook from "./pages2/Createpage";
import Viewbook from "./pages2/Viewbook";
import DeleteBook from "./pages2/Deletepage";
import Navbar from './components2/Navbar'
export default function App(){
    return(
        <div className="app">
        <Routes>
            <Route path="/" element={<ViewBooks/>}/>
            <Route path="/create" element={<CreateBook/>}/>
            <Route path="/viewbook/:id" element={<Viewbook/>}/>
            <Route path="/edit/:id" element={<EditBook/>}/>
            <Route path="/delete/:id" element={<DeleteBook/>}/>
        </Routes>
        </div>
    )
}