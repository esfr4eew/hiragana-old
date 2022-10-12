function Thanks({thanks}) {
    return (
        <div className="thanks" style={{background: 'no-repeat center/cover url(' + process.env.NEXT_PUBLIC_API_HOST + thanks.src + ')'}}>
            <h2 className="thanks__title">
                THANK YOU FOR ALL THE TRUST AND SUPPORT.
            </h2>
            <div className="thanks-controls">
            <a href={thanks.href} className="thanks__link">contact us</a>
                <a href="#" className="thanks__link thanks__link--shop">shop</a>
            </div>
        </div>
    );
}

export default Thanks;