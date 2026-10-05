import { Link } from "react-router-dom";

export default function Table({books}){
    return(
        <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Year</th>
                        <th>Operations</th>
                    </tr>
                    </thead>
                    <tbody>
                        {books.map((b,i)=>(
                            <tr key={b._id}>
                                <td>{i+1}</td>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.publishedYear}</td>
                                <td>
                                    <div className="operations">
                                        <Link to={`/viewbook/${b._id}`}  className="operation">❕</Link>
                                        <Link to={`/edit/${b._id}`} className="operation">✏</Link>
                                        <Link to={`/delete/${b._id}`} className="operation">🗑</Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    )
}