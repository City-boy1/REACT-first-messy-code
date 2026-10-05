import { useState } from "react";   
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function CreateBook(){
    const navigate = useNavigate();
    const [newBook, setNewBook] = useState({
        title: "",
        author: "",
        publishedYear: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };  

    async function  handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3000/books", newBook);
            setNewBook({
                title: "",
                author: "",
                publishedYear: ""
            });
            console.log(res.data);
            navigate("/"); 
        } catch (error) {
            console.error("Error creating book:", error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <main className="form-container">
            <Link className="operation" to="/" style={{fontSize:"30px"}}>
                            <button>⬅</button>
            </Link>
            <h1>Create Book</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input name="title" type="text" placeholder="Title" onChange={handleChange}/>
                <label htmlFor="author">Author</label>
                <input name="author" type="text" placeholder="Author" onChange={handleChange}/>
                <label htmlFor="publishedYear">Year Published</label>
                <input name="publishedYear" type="number" placeholder="Year Published" onChange={handleChange}/>
                <button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create Book"}
                </button>
            </form>
        </main>
    )
}