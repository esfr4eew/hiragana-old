function Exclusive({ exclusive }) {
    return (
        <div className="cards">
            <div className="cards-container">
                <h1 className="cards__title">
                    {exclusive.title}
                </h1>
                <div className="cards__body">
                    {exclusive.images && exclusive.images.map(src => {
                        return (
                            <div className="exclusive-container" key={src}>
                                <img src={process.env.NEXT_PUBLIC_API_HOST + src} alt="exclusive car" className="cards__image" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Exclusive;