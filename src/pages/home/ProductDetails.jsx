// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LearningDetails from '../../components/LearningDetails';
import image from "../../assets/CardImage/download.jpg"
import { Button, Rating } from "@mui/material";
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import testImage from "../../assets/CardImage/download.jpg";
import Reviews from '../../components/Reviews';

const data =
{
    id: 1,
    name: "product 1",
    category: "cat 1",
    sub_category: "sub cat-10",
    sub_sub_category: "sub sub cat-1",
    price: 300,
    uploader: "Miras",
    description: "this is a test product",
    review: [], // atar bodol nise rating disi
    image: testImage,
    learning_subject: [],
    total_view: 10,

    // ami add korlam 
    regular_price: 500,
    status: 'In Stock',
    rating: 4,
}



const ProductDetails = () => {
    const [value, setValue] = useState(2);

    return (
        <div>
            {/* <LearningDetails /> */}
            <div className='max-w-6xl mx-auto'>
                <div className='flex '>
                    <div>
                        <img className='w-80 me-8' src={data.image} alt="product image" />
                    </div>
                    <div className='ms-3'>
                        <h2 className='text-4xl '>{data.name}</h2>
                        <div className='lg:flex mt-4'>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Price: <span className='text-black font-semibold'>{data.price} ৳</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Uploader: <span className='text-black font-semibold'>{data.uploader} ৳</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Status: <span className='text-black font-semibold'>{data.status}</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Category: <span className='text-black font-semibold'>{data.category}</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Sub Category: <span className='text-black font-semibold'>{data.sub_category}</span></h3>
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-xl font-semibold'>Details:</h2>

                            <h3>Uploader: <span className='font-semibold'>{data.uploader}</span></h3>
                            <div className='flex'>
                                <h2>Rating:</h2>
                                <Rating name="read-only" value={data.rating} readOnly
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                />
                            </div>
                            <h2>Total Views: <span className='font-semibold'>{data.total_view}</span></h2>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl font-semibold'>Payment options</h2>
                            <div className='flex border-2 border-orange-300 p-2 mt-4 items-center'>
                                <div>
                                    <input className='bg-gray-500 p-4' type="checkbox" name="payment" id="" />
                                </div>
                                <div className='ms-4'>
                                    <p className='font-bold'>{data.price}৳</p>
                                    <p>Cash Discount Price</p>
                                    <p>Online / Cash Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 mt-8 p-0'>
                <div className='max-w-xl mx-auto justify-center flex pt-8'>
                    <span className='me-2'>
                        <Button variant="contained" color="success">
                            What You'll Learn
                        </Button>
                    </span>
                    <span className='me-2'>
                        <Button variant="contained" color="success">
                            Reviews
                        </Button>
                    </span>
                </div>
                <div className='max-w-6xl mx-auto'>
                    <div className='pt-8'>
                        <LearningDetails />
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 p-0'>
                <div className='max-w-6xl mx-auto'>
                    <div className='pt-8 pb-10'>
                        <Reviews/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
