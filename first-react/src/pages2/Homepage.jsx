import { useEffect, useState } from "react"
import add from '../assets/add.svg'
import Table from "../components2/Layout/Table";
import Card from "../components2/Layout/Card";
import { Link } from "react-router-dom";

export default function ViewBooks(){
    const [books,setBooks] = useState([]);
    const [Loading, setIsLoading] = useState(true)
    const [layout, setLayout] = useState("table")

    async function fetchBooks(){
        try{
            const data = await fetch("http://localhost:3000/books")
            const res = await data.json()
            setIsLoading(false)
            setBooks(res)
        }catch(err){
            setIsLoading(true)
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchBooks()
    },[])

    return(
        <section>
            <div className="head">
            <h1>Book List</h1>
            <div className="layout-buttons" >
                <button onClick={()=>setLayout("table")}>Table</button>
                <button onClick={()=>setLayout("card")}>Card</button>
            </div>
            <Link to="/create">
            <img src={add} alt="add-book" height="35px"/>
            </Link>
            </div>
            {Loading? (
                <div>Loading...</div>
            ):(
              layout === "table" ? (
                <Table books={books} />
              ):(
                <Card books={books} />
              )
            )
        }
        </section>
    )
}