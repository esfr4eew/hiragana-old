import Image from "next/future/image";
import Link from "next/link";

function CartButton({ itemInCart, addToCart }) {
    return (
        <div>
            {itemInCart ? <Link href="/cart">
                <button className="category-item__add category-item-add-cart">
                    <Image src="/static/images/basket-icon.png" alt="basket icon" width={15} height={15}></Image>
                    <span>Buy</span>
                </button>
            </Link> : <button className="category-item__add" onClick={addToCart}>
                <Image src="/static/images/basket-icon.png" alt="basket icon" width={15} height={15}></Image>
                
            </button>}
        </div>
    );
}

export default CartButton;