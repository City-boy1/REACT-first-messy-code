import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Viewbook(){
    const [book,setBook] = useState({})
    const [loading,setLoading]= useState(true)
    const {id} = useParams()

    useEffect(()=>{
        async function fetchBook(){
            try{
            const res = await fetch(`http://localhost:3000/books/${id}`)
            const data = await res.json();
            if(!res.ok){
                throw new Error("Failed to fetch. Check Your internet connection")
            }
            setLoading(false)
            setBook(data)
            console.log(data)
        }catch(err){
            setLoading(false)
        console.log(err)
        }
    }
        fetchBook()
    },[id])
    if(loading){
        return <div>Loading...</div>
    }
    return(
        
        <section>
            <div style={{display:"flex",alignItems:"center", gap:"30px"}}>
                <Link className="operation" to="/" style={{fontSize:"30px"}}>
                <button>⬅</button>
                </Link>
            <h2>Info on {book.title}</h2>
            </div>
            <div style={{border:"1px solid blue",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px", width:"fit-content",padding:"20px"}}>
                <div>
                <span>Id: {book._id}</span>
                </div>
                <div>
                <span>Title: {book.title}</span>
                </div>
                <div>
                <span>Author: {book.author}</span>
                </div>
                <div>
                <span>Published Year: {book.publishedYear}</span>
                </div> 
                <div>
                <span>Created At: {book.createdAt}</span>
                </div>
                <div>
                <span>Updated At: {book.updatedAt}</span>
                </div>
            </div>
        </section>
    )
}