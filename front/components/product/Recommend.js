import { useContext, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './ButtonGroup';
import { AppContext } from "../../context";
import Link from 'next/link';

function Recommend() {
    const { shopItems } = useContext(AppContext)
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(shopItems);
    }, [shopItems])
    
    return (
        <div className="recommend">
            {items && items.length > 0 && <div className="container recommend-container">
                <h3 className="recommend__title">YOU MAY ALSO LIKE</h3>
                <div className="recommend-items">
                    <div className="recommend-items__container">
                        <Carousel responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} arrows={false} swipeable={true} draggable={false}>
                            {items.map(item => {
                                return (
                                    <Link href={`/products/${item.id}`} key={item.id}>
                                        <div className="custom-carousel-item">
                                            <div className="category-item-container recommend-item-container">
                                                <div className="category-item recommend-item">
                                                    <div className="category-item__images">
                                                        <img src={process.env.NEXT_PUBLIC_API_HOST + item.attributes.logo.data.attributes.url} alt="car 1"
                                                            className="category-item__image category-item__image--active" />
                                                    </div>
                                                    <div className="category-item__name">{item.attributes.name}</div>
                                                    <div className="category-item__rating">
                                                        <div className="category-item__stars">
                                                            <span className="category-item__star">
                                                                <img src="/static/images/star.png" alt="" className="" />
                                                            </span>
                                                            <span className="category-item__star">
                                                                <img src="/static/images/star.png" alt="" className="" />
                                                            </span>
                                                            <span className="category-item__star">
                                                                <img src="/static/images/star.png" alt="" className="" />
                                                            </span>
                                                            <span className="category-item__star">
                                                                <img src="/static/images/star.png" alt="" className="" />
                                                            </span>
                                                            <span className="category-item__star">
                                                                <img src="/static/images/star.png" alt="" className="" />
                                                            </span>
                                                        </div>
                                                        <span className="category-item__stat">({item.attributes.rating})</span>
                                                    </div>
                                                    <div className="category-item__offer">
                                                        <div className="category-item__prices">
                                                            <div className="category-item__oldprice">{item.attributes.oldprice}</div>
                                                            <div className="category-item__price">{item.attributes.price}</div>
                                                        </div>
                                                        <button className="category-item__add">
                                                            <img src="/static/images/basket-icon.png" alt="basket icon" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>}
        </div>
    );
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default Recommend;