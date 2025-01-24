import Modal from "../UI/Modal";

function Cart({ showCart, closeCart, children }) {
    if(!showCart) {
        return null;
    }

    return (
        <Modal show={showCart} onClose={closeCart}>
            Hello from Cart
        </Modal>
    )
}

export default Cart;