import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../context/ToastContext"

export default function HomePage(){
    const { showToast } = useToast()
    const [Products , setProducts] = useState([])
    const [loading , setLoading ] = useState(true)
    const[showEditModal , setShowEditModal] = useState(false)
    const[showDeleteModal , setShowDeleteModal] = useState(false)
    const[activeProduct, setActiveProduct] = useState(null)
    const[editForm,setEditForm] = useState({
        name:"",
        price:"",
        imgUrl:""
    })

    async function fetchProducts(){
        try{
            const res = await fetch('/api/products');
            const data = await res.json()
            if(!res.ok){
                throw new Error("Message: Failed to fetch")
            }
            setProducts(data)

        } catch(err){
            console.error(err)
            showToast("Unable to load products","error")
        } finally{
            setLoading(false)
        }

    }

    async function fetchDelete() {
        try{
            const res = await fetch(`/api/products/${activeProduct._id}`,{
                method: 'DELETE',
            })
            if(!res.ok){
                const err = res.json()
                throw new Error("Message: An error occured")
                showToast(`${err.message}`,"error")
                return;
            }
            setProducts(prev => prev.filter(t =>t._id !== activeProduct._id))
            setShowDeleteModal(false)
            setActiveProduct(null)
            showToast("Product deleted successfully")
        }catch(err){
            console.error(err);
            showToast(`${err}`,"error")
        }
    }
 

    useEffect(()=>{
        fetchProducts()
    },[])

    if(loading){
        return (
        <section className="products-section">
        <div className="skelton-grid">
            {Array.from({length:6}).map((_, i)=>(
                <div key={i} className="skeleton-card">
                    <div className="skeleton-img"></div>
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line short"></div>
                </div>
            ))}
            </div>
            </section>
        )
    }

    function openDeleteModal(product){
        setActiveProduct(product)
        setShowDeleteModal(true)
    }
    function openEditModal(product){
        setActiveProduct(product)
        setEditForm({
            name:product.name,
            price:product.price,
            imgUrl:product.imgUrl
        })
        setShowEditModal(true)
    }
    return(
        <main className="home-page">
            <section className="products-section">
               <div className="products-heading">
                <h2>Current Products 🚀</h2>
               </div>
               {
                Products.length === 0 ? (
                    <div className="product-state empty-state">
                        <p>No products found 😢</p>
                        <Link to="/create">Add new product</Link>
                    </div>
                ):(
                    <div className="products-grid">
                        {Products.map(p=>{
                            const id = p._id;
                            return(
                                <article key={id} className="product-item">
                                <div className="product-image-container">
                                <img src={p.imgUrl} alt={p.name} className="product-image"/>
                                </div>
                                <div className="product-info">
                                    <h3>{p.name}</h3>
                                    <p className="product-price">${p.price}</p>
                                </div>
                                <div className="product-actions">
                                    <button className="edit-button" onClick={()=>openEditModal(p)}>✏️</button>
                                    <button className="delete-button" onClick={()=>openDeleteModal(p)}>🗑️</button>
                                </div>
                            </article>)
                        })}
                    </div>
                )
               }
               
            </section>
            {showDeleteModal && (
                <div className="modal-backdrop" onClick={()=>setShowDeleteModal(false)}>
                <div className="modal delete-modal" onClick={e=> e.stopPropagation()}>
                <div className="delete-head">
                    <h2>Delete {activeProduct?.name}</h2>
                    <p>This action cannot be undone</p>
                </div>
                <div className="modal-actions">
                    <button onClick={()=>setShowDeleteModal(false)} className="btn-cancel">Cancel</button>
                    <button onClick={fetchDelete} className="btn-delete">Yes, Delete</button>
                </div>
            </div>
            </div>
            )}
            {showEditModal &&(
                <div className="modal-backdrop" onClick={()=>setShowEditModal(false)}>
                <div className="modal edit-modal" onClick={e=> e.stopPropagation()}>
                    <h2>Edit {activeProduct.name}</h2>
                    <input type="text" value={editForm.name} onChange={e=> setEditForm({...editForm,name: e.target.value})} />
                    <input type="number" value={editForm.price} onChange={e=> setEditForm({...editForm,price: e.target.value})} />
                    <input type="text" value={editForm.imgUrl} onChange={e=> setEditForm({...editForm,imgUrl: e.target.value})} />

                    <div className="modal-actions">
                    <button onClick={()=>setShowEditModal(false)} className="btn-cancel">Cancel</button>
                    <button onClick={console.log(editForm)} className="btn-save">Save</button>
                    </div>
                </div>
                </div>
            )}
            
        </main>
    )
}