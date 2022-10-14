import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { useShopItemsContext } from '../context/shopItemsContext';
import { useRouter } from 'next/router'
import axios from 'axios';
const paths = ['feedback', 'categories', 'shipping', 'moneyback'];

function Header() {
    const { cartData } = useCartContext();
    const { shopItems } = useShopItemsContext();;
    const searchRef = useRef(null);
    const [listItems, setListItems] = useState([]);
    const router = useRouter()
    const [nav, setNav] = useState([])

    useEffect(() => {
        const fetchNav = async () => {
            const {data} = await axios.get(process.env.NEXT_PUBLIC_API_HOST + '/api/index-page?populate[0]=HeaderLinks');
            setNav(data.data.attributes.HeaderLinks)
        }
        fetchNav();
    }, [])


    const changeSearch = e => {
        if (searchRef.current.value.length < 1) {
            setListItems([]);
            return
        }
        const v = shopItems.filter(item => item.attributes.name.toLowerCase().startsWith(searchRef.current.value.toLowerCase()));
        setListItems(v)
    }

    const listItemClickHandler = () => {
        setListItems([])
        searchRef.current.value = ''
    }

    const headerMenu = useRef();

    const toggleNavMenu = () => {
        headerMenu.current.classList.toggle('header-nav--visible')
        document.body.classList.toggle('navbar-visible')
    }

    const toRoute = (path) => {
        document.body.classList.remove('navbar-visible');
        headerMenu.current.classList.remove('header-nav--visible')
        router.push(path)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="row header-row">
                    <div className="col-3 col-md-3 header-logo">
                        <a href="/" className="header-logo__title">
                            <span className="header-logo__title--bold">HIRAGANA.</span>STYLE</a>
                    </div>
                    <nav className="col-md-5 header-nav" ref={headerMenu}>
                        {nav.map((el) => {
                            return <a className="header-nav__item" onClick={() => toRoute(el.linkUrl)} key={el.id}>{el.linkName}</a>
                        })}
                        {/* <Link href="/feedback">
                            <a className="header-nav__item">feedback</a>
                        </Link>
                        <Link href="/categories" className="header-nav__item">
                            <a className="header-nav__item">categories</a>
                        </Link>
                        <Link href="/shipping" className="header-nav__item">
                            <a className="header-nav__item">shipping</a>
                        </Link>
                        <Link href="/moneyback" className="header-nav__item">
                            <a className="header-nav__item">moneyback</a>
                        </Link> */}
                    </nav>
                    <form className="col-5 col-sm-6 offset-sm-1 col-md-3 offset-md-0 col-lg-3 header-search">
                        <label className="header-search__label">
                            <input type="search" className="header-search__input" ref={searchRef} onChange={changeSearch} />
                        </label>
                        {listItems.length > 0 && <ul className="header-search-items">
                            {listItems.map(item =>
                                <li key={item.id} className="header-search-item" onClick={listItemClickHandler}>
                                    <Link href={`/products/${item.id}`}>
                                        <div>
                                            <img className="search-item-image" src={process.env.NEXT_PUBLIC_API_HOST + item.attributes.logo.data.attributes.url} />
                                            <span>{item.attributes.name}</span>
                                        </div>
                                    </Link>
                                </li>)
                            }
                        </ul>}
                    </form>
                    <div className="col-2 col-md-1 col-lg-1 header-user">
                        {/* <a href="#" className="header-user__item">
                            <img src="/static/images/user-icon.png" className="header-user__image" alt="user icon" />
                        </a> */}
                        <Link href="/cart">
                            <a className="header-user__item header-basket">
                                <img src="/static/images/basket-icon.png" className="header-user__image" alt="basket icon" />
                                <span className="header-basket__count">{cartData && cartData.cartItems.length}</span>
                            </a>
                        </Link>
                        <div className="header-user__item header-burger" onClick={toggleNavMenu}>
                            <span className="header-burger__item"></span>
                            <span className="header-burger__item"></span>
                            <span className="header-burger__item"></span>
                            <span className="header-burger__item"></span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}

// export async function getServerSideProps() {
//     const { data } = await axios.get(process.env.NEXT_PUBLIC_API_HOST + '/api/shop-items')
//     return { props: { data: [1,2,3] } }
//   }

export default Header;