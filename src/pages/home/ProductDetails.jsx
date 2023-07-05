// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LearningDetails from '../../components/LearningDetails';
import image from "../../assets/CardImage/download.jpg"
import { Rating } from "@mui/material";
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';

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
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquam porro, iste dolore ratione quasi voluptatibus, obcaecati pariatur doloremque amet ab maiores esse consequuntur dolor, voluptas aliquid sequi atque in repellat nisi id molestias architecto corporis alias? Reprehenderit, ducimus minus laudantium nostrum, ullam nulla, pariatur cupiditate recusandae similique magni eius?</p>
                        <Rating name="read-only" value={value} readOnly
                        // onChange={(event, newValue) => {
                        //     setValue(newValue);
                        // }}
                        />
                        <p>Lates Update: 3/2023</p>
                        <div className="flex mt-2">
                            <LoadingButton loading={false} variant="contained">
                                Submit
                            </LoadingButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
