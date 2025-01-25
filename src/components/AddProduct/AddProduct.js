import Modal from "../UI/Modal";
import "./AddProduct.css";

function AddProduct({ showAddProduct, onCloseAddProduct }) {
  return (
    <Modal show={showAddProduct} onClose={onCloseAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={() => {}} className="add-product-form">
          <label className="form-label">Enter Product Name</label>
          <input className="form-input" />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
