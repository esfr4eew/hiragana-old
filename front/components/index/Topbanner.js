import Link from 'next/link';

const Carousel = require('react-responsive-carousel').Carousel;

function TopBanner({ carouselImages, topBanner }) {
    return (
        <div className="first-screen">
            <Carousel>
                {carouselImages && carouselImages.map(src => {
                    return <div key={src}><img src={process.env.NEXT_PUBLIC_API_HOST + src} /></div>
                })}
            </Carousel>
            <div className="container">
                <div className="first-screen__body">
                    <h1 className="first-screen__title">{topBanner.title}</h1>
                    <p className="first-screen__desc">{topBanner.description}</p>
                    <Link href="/categories">
                        <button className="first-screen__button">{topBanner.buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;