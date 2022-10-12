import { useUserContext } from "../../context/userContext";
import CartItem from "./CartItem";

function CartItems() {
    // const { userData, setUserData } = useUserContext();

    // const removeItem = async (itemId) => {
    //     const ctxCartItems = userData.cartItems.filter(cartItem => cartItem.id !== itemId)
    //     const dbCartItems = userData.cartItems.filter(cartItem => cartItem.id !== itemId).map(item => item.shop_item.data).map(data => ({ shop_item: data.id, size: 'S', quantity: 1 }))
    //     setUserData({ ...userData, cartItems: ctxCartItems })
    //     await removeCartItem(userData.cartId, { CartItem: dbCartItems })
    // }

    return (
        <div className="col-xl-8 col-lg-9 col-12">
            {/* {userData && userData.cartItems.map(item => {
                return <CartItem item={item} key={item.id} />
            })} */}

        </div>
    );
}

export default CartItems;