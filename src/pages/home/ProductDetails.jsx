// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LearningDetails from '../../components/LearningDetails';
import image from "../../assets/CardImage/download.jpg"
import { Rating } from "@mui/material";

const ProductDetails = () => {
    const [value, setValue] = useState(2);
    return (
        <div>
            <LearningDetails />
            <h2>This is product details page</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Rating name="read-only" value={value} readOnly
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                />
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
