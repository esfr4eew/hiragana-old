function CartItems() {
    return (
        <div className="col-xl-8 col-lg-9 col-12">
            <div className="cart-item">
                <div className="cart-item__header">
                    <div className="cart-good">
                        <div className="cart-good__img">
                            <img src="/static/images/good-main-1.jpg" alt="osaka jdm" className="cart-good__image" />
                        </div>
                        <div className="cart-good__name">
                            <h1 className="cart-good__title">OSAKA JDM STICKER SUPER VER1 WHITE</h1>
                            <p className="cart-good__desc">
                                Size: width and height:12x12,5 inch
                            </p>
                            <p className="cart-good__desc">
                                Material:Sticker plates
                            </p>
                        </div>
                    </div>
                    <div className="cart-count">
                        <div className="good-form__quantity-group cart-count__group">
                            <button className="good-form__quantity-action good-form__subtraction">-</button>
                            <input type="number" className="good-form__quantity cart-count__quantity" />
                            <button className="good-form__quantity-action good-form__addition">+</button>
                        </div>
                        <div className="cart-count__info">
                            35$ per 1
                        </div>
                    </div>
                    <div className="cart-price">
                        $245.00
                    </div>
                </div>
                <div className="cart-item__footer">
                    <form className="cart-coupon">
                        <input type="text" className="cart-coupon__input" placeholder="COUPON CODE" />
                        <button type="submit" className="cart-coupon__submit">apply</button>
                    </form>
                    <button className="cart__action cart__favorites">add in favorites</button>
                    <button className="cart__action  cart__remove">remove</button>
                </div>
            </div>
            <div className="cart-item">
                <div className="cart-item__header">
                    <div className="cart-good">
                        <div className="cart-good__img">
                            <img src="/static/images/good-main-1.jpg" alt="osaka jdm" className="cart-good__image" />
                        </div>
                        <div className="cart-good__name">
                            <h1 className="cart-good__title">OSAKA JDM STICKER SUPER VER1 WHITE</h1>
                            <p className="cart-good__desc">
                                Size: width and height:12x12,5 inch
                            </p>
                            <p className="cart-good__desc">
                                Material:Sticker plates
                            </p>
                        </div>
                    </div>
                    <div className="cart-count">
                        <div className="good-form__quantity-group cart-count__group">
                            <button className="good-form__quantity-action good-form__subtraction">-</button>
                            <input type="number" className="good-form__quantity cart-count__quantity" />
                            <button className="good-form__quantity-action good-form__addition">+</button>
                        </div>
                        <div className="cart-count__info">
                            35$ per 1
                        </div>
                    </div>
                    <div className="cart-price">
                        $245.00
                    </div>
                </div>
                <div className="cart-item__footer">
                    <form className="cart-coupon">
                        <input type="text" className="cart-coupon__input" placeholder="COUPON CODE" />
                        <button type="submit" className="cart-coupon__submit">apply</button>
                    </form>
                    <button className="cart__action cart__favorites">add in favorites</button>
                    <button className="cart__action  cart__remove">remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;