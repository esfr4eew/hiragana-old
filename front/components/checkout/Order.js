function Order() {
    return (
        <div className="row">
            <div className="col-sm-6 col-12">
                <div className="order-info">
                    <h1 className="checkout__title">YOUR ORDER</h1>
                    <div className="order-table">
                        <div className="order-table__row order-table__row--header">
                            <span className="order-table__field">Product</span>
                            <span className="order-table__field">Total</span>
                        </div>
                        <div className="order-table__row">
                            <span className="order-table__field">Civic for Race use only 5' Sticker  ×3	</span>
                            <span className="order-table__field order-table__field--price">$590.00</span>
                        </div>
                        <div className="order-table__row">
                            <span className="order-table__field">SUBTOTAL</span>
                            <span className="order-table__field order-table__field--price">$590.00</span>
                        </div>
                        <div className="order-table__row">
                            <span className="order-table__field">TOTAL</span>
                            <span className="order-table__field order-table__field--price">$590.00</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;