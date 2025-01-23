import productsData from "../../data/products.json"    // Array of objects
import "./Products.css"

// const Image = require("../../assets/black_shoes.png")  // for getting modified path images

function Product({id, name, image}) {
    return (
        <div key={id} className="product">
            <img src={require(`../../assets/${image}`)} alt={name} />
            <div className="product-name">{name}</div>
            <button>Add to Cart</button>
        </div>
    )
}

// map (objects se product)
function Products() {
    return (
        <div className="products-container">
            {
                productsData.map((product) => (
                    <Product key={product.id} id={product.id} name={product.name} image={product.image} />
                ))
            }
        </div>
    )
}

export default Products;