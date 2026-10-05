import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function DeleteBook(){
    const {id} = useParams()
    const navigate = useNavigate()
    async function handleDelete(){
        try{
            const res = await axios.delete(`http://localhost:3000/books/${id}`)
            if(res.status === 200){
                alert("Book deleted successfully")
                navigate("/")
            }
        }catch(error){
            alert("Error deleting book")
            console.error("Error deleting book:", error)
            navigate("/")
        }
    }
    function cancelDelete(){
        navigate("/")   
    }
    return(
        <main>
            <h2>Are you sure you want to delete this book?</h2>
            <span>This action cannot be undone.</span>
            <div className="buttons">
                <button onClick={handleDelete}>Yes, Delete</button>
                <button onClick={cancelDelete}>No, Keep</button>
            </div>
        </main>
    )
}