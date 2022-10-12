import { useState } from 'react';

function Reviews({ reviews }) {
    const [listLen, setListLen] = useState(4);
    return (
        <div className="reviews">
            <div className="container">
                <h2 className="section__title reviews__title">{reviews.title}
                </h2>
                <div className="row">
                    {reviews.items && reviews.items.slice(0, listLen).map(item => {
                        return (
                            <figure className="col-6 col-sm-4 col-md-3 review" key={item.id}>
                                <img src="static/images/review-item-1.jpg" alt="review item" className="review__image" />
                                <figcaption className="review-desc">
                                    <div className="review-user">
                                        <img src="static/images/review-user-1.jpg" alt="review user photo"
                                            className="review-user__image" />
                                        <span className="review-user__name">{item.name}</span>
                                    </div>
                                    <p className="review-desc__comment">
                                        {item.body}
                                    </p>
                                </figcaption>
                            </figure>
                        )
                    })}
                </div>
                {listLen === 4 && <button className="reviews__button" onClick={() => setListLen(reviews.items.length)}>show more</button>}
            </div>
        </div>
    );
}

export default Reviews;