import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";

function Item({id}) {
    const { shopItems } = useContext(AppContext);
    const [product, setProduct] = useState(null)
    const [topImageIndex, setTopImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        shopItems && setProduct(shopItems.find(item => item.id == id));
    }, [shopItems, id])

    const incrementQuantity = () => setQuantity(++quantity);

    const decrementQuantity = () => {
        if (quantity === 1) return;
        setQuantity(--quantity);
    }

    return (
        <>
            {product && <div className="good">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 offset-sm-1 col-12 offset-0 good-preview">
                            <div className="good-preview-container">
                                <img src={process.env.NEXT_PUBLIC_API_HOST + product.attributes.imageList.data[topImageIndex].attributes.url} alt="osaka jdm" className="good__image" />
                            </div>
                            <div className="thumbnails">
                                {product.attributes.imageList.data.map((imageData, i) => {
                                    return (
                                        <button className={`thumbnails__button ${topImageIndex === i ? "thumbnails__button--active" : ""} `} key={imageData.id} onClick={() => setTopImageIndex(i)}>
                                            <img src={process.env.NEXT_PUBLIC_API_HOST + imageData.attributes.url} alt="osaka jdm thumbnail"
                                                className="thumbnails__image" />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-sm-5 col-12 good-info">
                            <div className="good__name">{product.attributes.name}</div>
                            <div className="good__price">{product.attributes.price}</div>
                            <form className="good-form" onSubmit={(e) => e.preventDefault()}>
                                <fieldset className="good-form__group">
                                    <label className="good-form__label">
                                        <div className="good-form__param">size</div>
                                        <select className="good-form__select">
                                            {product.attributes.sizes.map(size => {
                                                return (
                                                    <option key={size.id} value={size.sizeShirt} className="good-form__option">{size.sizeShirt}</option>
                                                )
                                            })}
                                        </select>
                                    </label>
                                    <label className="good-form__label">
                                        <div className="good-form__param">quantity</div>
                                        <div className="good-form__quantity-group">
                                            <button type="button" className="good-form__quantity-action good-form__subtraction" onClick={decrementQuantity}>-</button>
                                            <span className="good-form__quantity">{quantity}</span>
                                            <button type="button" className="good-form__quantity-action good-form__addition" onClick={incrementQuantity}>+</button>
                                        </div>
                                    </label>
                                </fieldset>
                                <div className="good-form__buttons">
                                    <a href="#" className="good-form__button good-form__buy">Buy it now</a>
                                    <a href="#" className="good-form__button good-form__add">
                                        <img src="/static/images/good-basket.png" alt="basket icon" />
                                        <span>Add to cart</span></a>
                                </div>

                            </form>
                            <p className="good__hint">
                                {product.attributes.hint}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 offset-sm-1 col-12">
                            <div className="good-desc">
                                {product.attributes.description.map(item => {
                                    return (
                                        <div key={item.id}>
                                            {item.text && <p className="good-desc__item">{item.text}</p>}
                                            {item.coloredList && <ul className="list-desc">
                                                {item.coloredList.split('\n').map((li,i) => {
                                                    return (
                                                        <li key={i} className="list-desc__item">
                                                            {li}
                                                        </li>
                                                    )
                                                })
                                                }
                                            </ul>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Item;