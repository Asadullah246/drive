// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LearningDetails from '../../components/LearningDetails';
import image from "../../assets/CardImage/download.jpg"
import { Rating } from "@mui/material";
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import testImage from "../../assets/CardImage/download.jpg";

const data =
{
    id: 1,
    name: "product 1",
    category: "cat 1",
    sub_category: "sub cat-10",
    sub_sub_category: "sub sub cat-1",
    price: 300,
    uploader: "miras",
    description: "this is a test product",
    review: [],
    image: testImage,
    learning_subject: [],
    total_view: 10,

    // ami add korlam 
    regular_price: 500,
    status: 'In Stock',
}



const ProductDetails = () => {
    const [value, setValue] = useState(2);

    return (
        <div className='max-w-75vh'>
            {/* <LearningDetails /> */}
            <div>
                <div className='flex'>
                    <div>
                        <img className='w-80 me-8' src={data.image} alt="product image" />
                    </div>
                    <div className='ms-3'>
                        <h2 className='text-4xl '>{data.name}</h2>
                        <div className='lg:flex mt-4'>
                            <h3 className='bg-slate-200 rounded-full px-2 mx-1 mt-2'>Price: <span className='text-black font-semibold'>{data.price} ৳</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 mx-1 mt-2'>Uploader: <span className='text-black font-semibold'>{data.uploader} ৳</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 mx-1 mt-2'>Status: <span className='text-black font-semibold'>{data.status}</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 mx-1 mt-2'>Category: <span className='text-black font-semibold'>{data.category}</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 mx-1 mt-2'>Sub Category: <span className='text-black font-semibold'>{data.sub_category}</span></h3>
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-xl'>Key Features</h2>
                            <p>Model: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
