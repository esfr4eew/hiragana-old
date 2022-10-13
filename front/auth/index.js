import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const getCartItems = async (userId) => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/api/carts?filters[userId][$eq]=${userId}&populate[0]=cartItems.shop_item&populate[1]=cartItems.shop_item.sizes&populate[2]=cartItems.shop_item.logo`)
    return { cartItems: data.data[0].attributes.cartItems.map(item => ({id: item.id, quantity: item.quantity, size: item.size, shop_item: item.shop_item.data.id})), cartId: data.data[0].id };
}

const createCart = async (userId) => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_API_HOST + "/api/carts", { data: { userId } })
    return { cartItems: [], cartId: data.data.id }
}

export const editCart = async (userId, cartId, cartItems) => {
    const res = await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/carts/${cartId}`, { data: {userId, cartItems} });
    console.log(res.data);
}

export const auth = async () => {
    const userId = localStorage.getItem('hiragana');
    if (userId) {
        const cartData = await getCartItems(userId);
        return { userId, cartData };

    }
    const uuid = uuidv4()
    const newUserId = localStorage.setItem('hiragana', uuid);
    const cartData = await createCart(uuid);
    return { userId: newUserId, cartData };
}

export const newOrder = async (data) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_API_HOST + "/api/orders", { data })
}

export const useCoupon = async (coupon) => {
    const res = await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/coupons/${coupon.id}`, {data: {...coupon.attributes, isActive: false}})
}

/*
export const getCartItems = async (id) => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/api/carts?filters[userId][$eq]=${id}&populate[0]=CartItem.shop_item&populate[1]=CartItem.shop_item.sizes&populate[2]=CartItem.shop_item.logo`)
    return { userId: data.data[0].attributes.userId, cartItems: data.data[0].attributes.CartItem || [], cartId: data.data[0].id };
}

const register = async () => {
    const userId = uuidv4();
    localStorage.setItem('hiragana', userId)
    const { data } = await axios.post(process.env.NEXT_PUBLIC_API_HOST + "/api/carts?populate=*", {
        data: {
            userId
        }
    })
    return { userId: data.data.attributes.userId, cartItems: data.data.attributes.CartItem, cartId: data.data.id }
}
export const auth = async () => {
    const userId = localStorage.getItem('hiragana');
    return userId ? await getCartItems(userId) : await register();
}

export const removeCartItem = async (id, data) => {
    const res = await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/carts/${id}`, { data });
    console.log(res.data);
    // const res = await axios.post(process.env.NEXT_PUBLIC_API_HOST + `/api/carts`, { data: {userId:"1", CartItem: [{size:'S', shop_item: 1}]} });
}

export const addCartItem = async (userId, cartItem) => {
    // const res = await axios.post(process.env.NEXT_PUBLIC_API_HOST + `/api/carts`, { data: { userId, CartItem: [cartItem] } });
    const res = await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/carts/${id}`, { data });
    console.log(res.data);
}
*/