import "./Header.css";

function Header({ openCart }) {

    return (
        <div className="header">
            <h1>React Store</h1>
            <div>
                <button className="yellow-button" onClick={openCart}>
                    Cart
                </button>
            </div>
        </div>
    )
}

// <Modal show={true or false} onClose={} >...</Modal>

export default Header;