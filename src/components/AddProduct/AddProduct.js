import { useRef, useState } from "react";
import Modal from "../UI/Modal";
import "./AddProduct.css";

function AddProduct({ showAddProduct, onCloseAddProduct, onAddProduct }) {
  const [productName, setProductName] = useState("");
  // const nameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // const nameValue = nameRef.current.value;
    // console.log(nameValue);

    onAddProduct(productName);
  }

  const handleProductNameChange = (event) => {
    const enteredName = event.target.value;
    // console.log(enteredName);
    setProductName(enteredName);
  };

  return (
    <Modal show={showAddProduct} onClose={onCloseAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label className="form-label">Enter Product Name</label>
          {/* <input ref={nameRef} className="form-input" /> */}
          <input
            className="form-input"
            value={productName}  // Not needed, but we do so as a good practice (2-way Binding)
            onChange={handleProductNameChange}
          />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
