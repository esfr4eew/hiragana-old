import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const getCartItems = async () => {
    const userId = localStorage.getItem('hiragana');
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/api/carts?filters[userId][$eq]=${userId}&populate[0]=cartItems.shop_item&populate[1]=cartItems.shop_item.sizes&populate[2]=cartItems.shop_item.logo`)
    if (data.data.length) return { cartItems: data.data[0].attributes.cartItems.map(item => ({ id: item.id, quantity: item.quantity, size: item.size, shop_item: item.shop_item.data.id })), cartId: data.data[0].id };
    return { cartItems: [], cartId: null }
}

const createCart = async (userId) => {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_API_HOST + "/api/carts", { data: { userId } })
    return { cartItems: [], cartId: data.data.id }
}

const getCartId = async () => {
    const userId = localStorage.getItem('hiragana');
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/api/carts?filters[userId]=${userId}`);
    return data.data[0].id;
}

export const editCart = async (userId, cartId, cartItems) => {
    let id = cartId || await getCartId();
    await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/carts/${id}`, { data: { userId, cartItems } });
}

export const initCartData = async () => {
    const userId = localStorage.getItem('hiragana');
    const cartData = await getCartItems(userId);
    return { userId, cartData };
}

export const auth = async () => {
    const userId = localStorage.getItem('hiragana');
    if (!userId) {
        const uuid = uuidv4()
        localStorage.setItem('hiragana', uuid);
        await createRating();
        await createCart(uuid);
    }

}

export const newOrder = async (data) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_API_HOST + "/api/orders", { data })
}

export const updateCoupon = async (coupon) => {
    const res = await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/coupons/${coupon.id}`, { data: { ...coupon.attributes, isActive: false } })
}

export const getRating = async () => {
    const userId = localStorage.getItem('hiragana');
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + `/api/ratings?filters[userId][$eq]=${userId}&populate[0]=rating&populate[1]=rating.shop_item`)
    const rating = data.data;
    if (rating.length) return { id: rating[0].id, rating: rating[0].attributes.rating.map(item => ({ ...item, shop_item: item.shop_item.data.id })) }
    return { id: null, rating: [] }
}

const getRatingId = async () => {
    const userId = localStorage.getItem('hiragana');
    const {data} = await axios.get(process.env.NEXT_PUBLIC_API_HOST +`/api/ratings?filters[userId]=${userId}`);
    return data.data[0].id;
}

export const updateRating = async (id, rating) => {
    const ratingId = id || await getRatingId();
    const userId = localStorage.getItem('hiragana');
    const res = await axios.put(process.env.NEXT_PUBLIC_API_HOST + `/api/ratings/${ratingId}`, { data: { userId, rating } })
}

export const createRating = async () => {
    const userId = localStorage.getItem('hiragana');
    const { data } = await axios.post(process.env.NEXT_PUBLIC_API_HOST + `/api/ratings/`, { data: { userId } })
    return data.data.id;
}