import { Link } from "react-router-dom";    

export default function Card({books}){
    return(
        <section className="card-container">
            {books.map((book) => (
                <div key={book._id} className="card">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Published Year: {book.publishedYear}</p>
                    <div className="operations">
                        <Link to={`/viewbook/${book._id}`}  className="operation">❕</Link>
                        <Link to={`/edit/${book._id}`} className="operation">✏</Link>
                        <Link to={`/delete/${book._id}`} className="operation">🗑</Link>
                    </div>
                </div>
            ))}
        </section>
    )
}