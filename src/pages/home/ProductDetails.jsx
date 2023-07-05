import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LearningDetails from '../../components/LearningDetails';
import image from "../../assets/CardImage/download.jpg"

const ProductDetails = () => {
    return (
        <div>
            <LearningDetails/>
            <h2>This is product details page</h2>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                            <CheckCircleOutlineIcon style={{color:"#1976D2"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
