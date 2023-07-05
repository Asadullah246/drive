import cardImg1 from '../assets/CardImage/shop2.jpg'

const Card = () => {
    return (
        <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 justify-center">
            <div className="mb-8">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <h3>Author: Asadullah</h3>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Rating: 5 star</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <h3>Author: Asadullah</h3>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Rating: 5 star</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-8">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={cardImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <h3>Author: Asadullah</h3>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Rating: 5 star</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
