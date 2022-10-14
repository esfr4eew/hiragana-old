import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';

function Footer() {
    const [footerData, setFooterData] = useState(null)
    useEffect(() => {
        const fetchFooter = async () => {
            const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + "/api/index-page?populate[0]=HeaderLinks&populate[1]=Footer&populate[2]=Footer.navigationLinks");
            console.log(data.data.attributes.Footer);
            setFooterData(data.data.attributes.Footer);
        }
        fetchFooter();
    }, [])
    return (
        <footer className="footer">
            {footerData && <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="footer-logo">
                            <a href="#" className="header-logo__title footer-logo__title">
                                <span className="header-logo__title--bold">{footerData.footerTitle.split('.')[0]}.</span>{footerData.footerTitle.split('.')[1]}</a>
                        </div>
                        <p className="footer__subscribe">{footerData.titleDescription}</p>
                        <form className="footer-form">
                            <label className="footer-form__label">
                                <input type="email" className="footer-form__input" placeholder="Enter your email" />
                            </label>
                        </form>
                        <div className="footer-social">
                            <a href={footerData.pinterestLink} className="footer-social__pinterest">
                                <img src="/static/images/pinterest-icon.png" alt="pinterest icon" />
                            </a>
                            <a href={footerData.instagramLink} className="footer-social__pinterest">
                                <img src="/static/images/instagram-icon.png" alt="instagram icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-4 offset-md-2 col-5 offset-1">
                        <nav className="footer-nav">
                            <div className="footer-nav__col">
                                {footerData.navigationLinks.map(item => {
                                    return (<Link href={item.linkUrl} key={item.id}>
                                        <a className="footer-nav__link">{item.linkName}</a>
                                    </Link>)
                                })}
                            </div>
                            {/* <div className="footer-nav__col">
                                <a href="#" className="footer-nav__link">PRIVACY POLICY</a>
                                <a href="#" className="footer-nav__link">DELIVERY POLICY</a>
                                <Link href={"/categories"}>
                                    <a className="footer-nav__link">CATEGORIES</a>
                                </Link>
                            </div>
                            <div className="footer-nav__col">
                                <a href="#" className="footer-nav__link">SIZE GUIDE</a>
                                <a href="#" className="footer-nav__link">ABOUTS US</a>
                                <Link href={"/quality"}>
                                    <a className="footer-nav__link">ITEMS QUALITY</a>
                                </Link>
                            </div> */}
                        </nav>
                    </div>
                    <div className="col-lg-4 offset-lg-1 col-6">
                        <div className="footer-about">
                            <div className="footer-about__title">About</div>
                            <pre className="footer-about__desc">
                                {footerData.aboutDescription}
                            </pre>
                            {/* <p className="footer-about__desc">
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
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="footer-etc">
                    <a href="#" className="footer-etc__paypal">
                        <img src="/static/images/paypal-icon.png" alt="paypal" />
                    </a>
                    <div className="footer-etc__rights">© {new Date().getYear() + 1900} {footerData.footerTitle}</div>
                </div>
            </div>}
        </footer>
    );
}

export default Footer;