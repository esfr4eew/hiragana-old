import axios from "axios";
import { useEffect, useState } from 'react';

// function Reviews({ reviews }) {
function Reviews() {
    const [reviews, setReviews] = useState([])
    const [listLen, setListLen] = useState(4);

    useEffect(()=>{
        const fetchComments = async () => {
            const { data } = await axios.get('http://localhost:1337/api/comments?populate=*');
            setReviews(newestSort(data.data));
        }
        fetchComments();
    },[])

    const newestSort = (replies) => {
        return replies.sort((a,b) => {
            return new Date(b.attributes.date) - new Date(a.attributes.date)
        })
    }

    return (
        <div className="reviews">
            <div className="container">
                <h2 className="section__title reviews__title">last reviews
                </h2>
                <div className="row">
                    {reviews.length && reviews.slice(0, listLen).map(item => {
                        return (
                            <figure className="col-6 col-sm-4 col-md-3 review" key={item.id}>
                                <img src="static/images/review-item-1.jpg" alt="review item" className="review__image" />
                                <figcaption className="review-desc">
                                    <div className="review-user">
                                        <img src="static/images/review-user-1.jpg" alt="review user photo"
                                            className="review-user__image" />
                                        <span className="review-user__name">{item.attributes.user}</span>
                                    </div>
                                    <p className="review-desc__comment">
                                        {item.attributes.commentBody}
                                    </p>
                                </figcaption>
                            </figure>
                        )
                    })}
                    {/* {reviews.items && reviews.items.slice(0, listLen).map(item => {
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
                    })} */}
                </div>
                {/* {listLen === 4 && <button className="reviews__button" onClick={() => setListLen(reviews.items.length)}>show more</button>} */}
                {listLen === 4 && <button className="reviews__button" onClick={() => setListLen(reviews.length)}>show more</button>}
            </div>
        </div>
    );
}

export default Reviews;