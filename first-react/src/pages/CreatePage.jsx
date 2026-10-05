import { useState } from "react"
import { useToast } from "../context/ToastContext"

export default function CreatePage() {

    const { showToast } = useToast()

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        imgUrl: "",
    })

    async function createProduct() {

        if (
            !newProduct.name ||
            !newProduct.price ||
            !newProduct.imgUrl
        ) {
            showToast(
                "Please fill in all fields.",
                "warning"
            )

            return
        }

        try {

            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })

            setNewProduct({
                name: "",
                price: "",
                imgUrl: "",
            })

            const data = await res.json()

            if (!res.ok) {

                showToast(
                    data.message || "Failed to create product.",
                    "error"
                )

                return
            }

            showToast(
                "Product created successfully!",
                "success"
            )

        } catch (error) {
            console.log(`message: ${error}`)
            showToast(
                "Unable to connect to the server.",
                "error"
            )

        }
    }

    async function handleProduct(e) {
        e.preventDefault()

        await createProduct()
    }

    return (
        <main className="create-page">

            <h1>Create New Product</h1>

            <form
                className="product-card"
                onSubmit={handleProduct}
            >

                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) =>
                        setNewProduct({
                            ...newProduct,
                            name: e.target.value
                        })
                    }
                />

                <input
                    type="number"
                    placeholder="Product Price"
                    value={newProduct.price}
                    onChange={(e) =>
                        setNewProduct({
                            ...newProduct,
                            price: e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Product URL"
                    value={newProduct.imgUrl}
                    onChange={(e) =>
                        setNewProduct({
                            ...newProduct,
                            imgUrl: e.target.value
                        })
                    }
                />

                <button type="submit">
                    Add Product
                </button>

            </form>

        </main>
    )
}