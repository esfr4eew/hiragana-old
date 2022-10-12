function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="footer-logo">
                            <a href="#" className="header-logo__title footer-logo__title">
                                <span className="header-logo__title--bold">HIRAGANA.</span>STYLE</a>
                        </div>
                        <p className="footer__subscribe">Subscribe to get special offers, free giveaways, and once-in-a-lifetime
                            deals</p>
                        <form className="footer-form">
                            <label className="footer-form__label">
                                <input type="email" className="footer-form__input" placeholder="Enter your email" />
                            </label>
                        </form>
                        <div className="footer-social">
                            <a href="#" className="footer-social__pinterest">
                                <img src="/static/images/pinterest-icon.png" alt="pinterest icon" />
                            </a>
                            <a href="#" className="footer-social__pinterest">
                                <img src="/static/images/instagram-icon.png" alt="instagram icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-4 offset-md-2 col-5 offset-1">
                        <nav className="footer-nav">
                            <div className="footer-nav__col">
                                <a href="#" className="footer-nav__link">PRIVACY POLICY</a>
                                <a href="#" className="footer-nav__link">DELIVERY POLICY</a>
                                <a href="#" className="footer-nav__link">CATEGORIES</a>
                            </div>
                            <div className="footer-nav__col">
                                <a href="#" className="footer-nav__link">SIZE GUIDE</a>
                                <a href="#" className="footer-nav__link">ABOUTS US</a>
                                <a href="#" className="footer-nav__link">ITEMS QUALITY</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-4 offset-lg-1 col-6">
                        <div className="footer-about">
                            <div className="footer-about__title">About</div>
                            <p className="footer-about__desc">
                                We are a creative and passionate team.
                                <br />
                                We strive to provide the best products and services to our clients.
                                <br />
                                We stand by our core values which files our company culture of working hard while enjoying
                                what we do day in and day out:
                                <br />
                                - We insist on mutual respect company wide.
                                <br />
                                - We are honest at all times
                                <br />
                                - We follow the motto "surprise & delight".
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-etc">
                    <a href="#" className="footer-etc__paypal">
                        <img src="/static/images/paypal-icon.png" alt="paypal" />
                    </a>
                    <div className="footer-etc__rights">© 2021 HIRAGANA.STYLE</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;