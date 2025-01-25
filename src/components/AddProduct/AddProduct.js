import { useRef } from "react";
import Modal from "../UI/Modal";
import "./AddProduct.css";

function AddProduct({ showAddProduct, onCloseAddProduct, onAddProduct }) {
    const nameRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const nameValue = nameRef.current.value;
        // console.log(nameValue);
        onAddProduct(nameValue);
    }

  return (
    <Modal show={showAddProduct} onClose={onCloseAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label className="form-label">Enter Product Name</label>
          <input ref={nameRef} className="form-input" />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
