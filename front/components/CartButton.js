import Link from "next/link";

function CartButton({ itemInCart, addToCart }) {
    return (
        <>
            {itemInCart ? <Link href="/cart">
                <button className="category-item__add category-item-add-cart">
                    <img src="/static/images/basket-icon.png" alt="basket icon" />
                    <span>Buy</span>
                </button>
            </Link> : <button className="category-item__add" onClick={addToCart}>
                <img src="/static/images/basket-icon.png" alt="basket icon" />
            </button>}
        </>
    );
}

export default CartButton;