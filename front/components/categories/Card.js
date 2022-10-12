import Link from "next/link";
import { useState } from "react";

function Card({ item }) {
    const [activeImageIndex, setActiveImageIdnex] = useState(0);
    const [k, setK] = useState(0);
    const len = item.attributes.imageList.data.length;
    const prevImage = () => {
        setK(k - 1);
        setActiveImageIdnex(Math.abs((k - 1) % len))
    };
    const nextImage = () => {
        setK(k + 1);
        setActiveImageIdnex(Math.abs((k + 1) % len));
    }
    {
        return (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                <div className="category-item">
                    <Link href={`/products/${item.id}`}>
                        <div className="category-item-container">
                            <div className="category-item__images">
                                {item.attributes.imageList.data.map((data, i) => {
                                    return (
                                        <img src={process.env.NEXT_PUBLIC_API_HOST + data.attributes.url} alt="car" className={`category-item__image ${i === activeImageIndex ? "category-item__image--active" : ""}`} key={data.id} />
                                    )
                                })}
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
                    </Link>
                    <div className="category-item__controls">
                        <button className="category-item__control" onClick={prevImage}>
                            <img src="/static/images/card-arrow-left.png" alt="prev slide arrow" />
                        </button>
                        <button className="category-item__control" onClick={nextImage}>
                            <img src="/static/images/card-arrow-right.png" alt="next slide arrow" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;