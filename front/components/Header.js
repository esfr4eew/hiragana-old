import Link from 'next/link'
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../context';

function Header() {
    const { shopItems } = useContext(AppContext);
    const searchRef = useRef(null);
    const [listItems, setListItems] = useState([]);

    const changeSearch = e => {
        if(searchRef.current.value.length < 1) {
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
    
    return (
        <header className="header">
            <div className="container">
                <div className="row header-row">
                    <div className="col-3 col-md-3 header-logo">
                        <a href="/" className="header-logo__title">
                            <span className="header-logo__title--bold">HIRAGANA.</span>STYLE</a>
                    </div>
                    <nav className="col-md-5 header-nav">
                        <Link href="/feedback">
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
                        </Link>
                    </nav>
                    <form className="col-4 col-sm-5 offset-sm-1 col-md-2 offset-md-0 col-lg-3 header-search">
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
                    <div className="col-3 col-md-2 col-lg-1 header-user">
                        <a href="#" className="header-user__item">
                            <img src="/static/images/user-icon.png" className="header-user__image" alt="user icon" />
                        </a>
                        <Link href="/cart">
                            <a className="header-user__item header-basket">
                                <img src="/static/images/basket-icon.png" className="header-user__image" alt="basket icon" />
                                <span className="header-basket__count">3</span>
                            </a>
                        </Link>
                        <div className="header-user__item header-burger">
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