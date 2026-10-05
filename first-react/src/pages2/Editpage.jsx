import { useState, useEffect } from "react";   
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function EditBook(){
    const navigate = useNavigate();
    const { id } = useParams(); 
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
    useEffect(() => {
        async function fetchBook() {
            try {
                const res = await axios.get(`http://localhost:3000/books/${id}`);
                setNewBook(res.data);
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        fetchBook();
    }, [id]);

    async function  handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if(!newBook.title || !newBook.author || !newBook.publishedYear){
            alert("Please fill in all fields")
            setLoading(false)
            return
        }
        try {
            const res = await axios.put(`http://localhost:3000/books/${id}`, newBook);
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
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input name="title" type="text" placeholder="Title" onChange={handleChange} value={newBook.title}/>
                <label htmlFor="author">Author</label>
                <input name="author" type="text" placeholder="Author" onChange={handleChange} value={newBook.author}/>
                <label htmlFor="publishedYear">Year Published</label>
                <input name="publishedYear" type="number" placeholder="Year Published" onChange={handleChange} value={newBook.publishedYear}/>
                <button type="submit" disabled={loading}>
                    {loading ? "Updating..." : "Update Book"}
                </button>
            </form>
        </main>
    )
}