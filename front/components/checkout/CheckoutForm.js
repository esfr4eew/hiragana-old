function CheckoutForm() {
    return (
        <form className="row checkout-form">
            <div className="col-sm-5 col-12">
                <div className="checkout-names">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">first name <span>*</span> </div>
                        <input type="text" className="checkout-form__input" required />
                    </label>
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">last name <span>*</span></div>
                        <input type="text" className="checkout-form__input" required />
                    </label>
                </div>
                <div className="checkout-form__company">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">company</div>
                        <input type="text" className="checkout-form__input" />
                    </label>
                </div>
                <div className="checkout-form__coutry">
                    <div className="checkout-form__title">country <span>*</span></div>
                    <br />
                    <select className="checkout-form__input" required>
                        <option value="RU">Russia</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <div className="checkout-form__street">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">street address <span>*</span> </div>
                        <input type="text" className="checkout-form__input checkout-form__input--address" placeholder="HOUSE NUMBER and STREET NAME" required />
                        <input type="text" className="checkout-form__input checkout-form__input--address" placeholder="APPARTMENT, SUITE, UNIT, ETC  (OPTIONAL)" />
                    </label>
                </div>
                <div className="checkout-form__city">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">town / city <span>*</span> </div>
                        <input type="text" className="checkout-form__input" required />
                    </label>
                </div>
                <div className="checkout-form__state">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">state / county <span>*</span> </div>
                        <input type="text" className="checkout-form__input" required />
                    </label>
                </div>
                <div className="checkout-form__code">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">postal / zip <span>*</span> </div>
                        <input type="text" className="checkout-form__input" required />
                    </label>
                </div>
                <div className="checkout-form__tel">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">Phone <span>*</span> </div>
                        <input type="tel" className="checkout-form__input" required />
                    </label>
                </div>
                <div className="checkout-form__email">
                    <label className="checkout-form__item">
                        <div className="checkout-form__title">Email address <span>*</span> </div>
                        <input type="email" className="checkout-form__input" required />
                    </label>
                </div>
            </div>

            <div className="col-sm-5 offset-sm-1 col-12">
                <div className="checkout-form__notes">
                    <label className="checkout-form__anotheraddr">
                        <input type="checkbox" />
                        <span className="checkout-form__title">Ship to a different address?</span>
                    </label>
                    <label className="checkout-form__area">
                        <div className="checkout-form__title">Order notes</div>
                        <textarea className="checkout-form__textarea" placeholder="NOTE ABOUT YOUR ORDER, e.g. special notes for delivery"></textarea>
                    </label>
                </div>
            </div>
        </form>
    );
}

export default CheckoutForm;