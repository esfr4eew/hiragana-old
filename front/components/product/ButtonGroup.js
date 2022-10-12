function NextButton({onClick}) {
    return (
        <button className="recommend-carousel-arrow recommend-carousel-arrow--next" onClick={() => onClick()}>
            <img src="/static/images/card-arrow-right.png" alt="next slide arrow" />
        </button>
    );
}

function PrevButton({onClick}) {
    return (
        <button className="recommend-carousel-arrow recommend-carousel-arrow--prev" onClick={() => onClick()}>
            <img src="/static/images/card-arrow-left.png" alt="prev slide arrow" />
        </button>
    );
}

function ButtonGroup({ next, previous, goToSlide, ...rest }) {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <PrevButton className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <NextButton onClick={() => next()} />
        </div>
    );
};

export default ButtonGroup;