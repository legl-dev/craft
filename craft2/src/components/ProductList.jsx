const ProductsList = ({ products, editRow, deleteProduct}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 ? (
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><img src={product.image} alt={product.name}/></td>
                            
                            <td>
                                <button onClick={() => editRow(product)}>Edit</button>
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </td>

                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Products</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default ProductsList;