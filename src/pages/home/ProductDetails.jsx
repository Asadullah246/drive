// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LearningDetails from '../../components/LearningDetails';
import image from "../../assets/CardImage/download.jpg"
import { Button, Rating } from "@mui/material";
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import testImage from "../../assets/CardImage/download.jpg";
import Reviews from '../../components/Reviews';
import pdfFile from "../../assets/testing.jpg"

const data =
{
    id: 1,
    name: "product 1",
    category: "cat 1",
    sub_category: "sub cat-10",
    sub_sub_category: "sub sub cat-1",
    price: 300,
    uploader: "Miras",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure autem porro nesciunt minus maxime odio adipisci repellat maiores at! ",
    review: [],
    image: testImage,
    learning_subject: [],
    total_view: 10,
    regular_price: 500,
    rating: 4,
}



const ProductDetails = () => {
    const [value, setValue] = useState(2);

    return (
        <div>
            {/* <LearningDetails /> */}
            <div className='max-w-6xl mx-auto'>
                <div className='flex gap-8 w-full md:w-4/5  '>
                    <div>

                        <img className='w-[500px] h-auto me-8 rounded-md' src={data.image} alt="product image" />
                    </div>
                    <div className='ms-3'>
                        <h2 className='text-4xl '>{data.name}</h2>
                        <div className='lg:flex mt-4'>
                            {/* <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Price: <span className='text-black font-semibold'>{data.price} ৳</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Uploader: <span className='text-black font-semibold'>{data.uploader} ৳</span></h3>
                            <h3 className='bg-slate-200 rounded-full px-2 me-2 mt-2'>Status: <span className='text-black font-semibold'>{data.status}</span></h3> */}
                            <h3 className='bg-slate-200 text-[#1976D2] rounded-full px-2 me-2 mt-2'>Category: <span className='text-[#1976D2] font-semibold'>{data.category}</span></h3>
                            <h3 className='bg-slate-200 text-[#1976D2] rounded-full px-2 me-2 mt-2'>Sub Category: <span className='text-[#1976D2] font-semibold'>{data.sub_category}</span></h3>
                        </div>
                        <div className='mt-4'>
                            <p>{data.description}</p>
                            {/* <h2 className='text-xl font-semibold'>Details:</h2> */}

                            {/* <h3>Uploader: <span className='font-semibold'>{data.uploader}</span></h3> */}
                            <div className='flex  mt-4 items-center '>
                                <h2 className='mr-4'>Rating:</h2>
                                {/* <Rating name="read-only" value={data.rating} readOnly /> */}
                               <div className='mb-[-9px]'> <Rating name="read-only" value={data.rating} style={{fontSize:"1.1em ", color:"#1976D2 "}} readOnly /></div>
                                <p>(7)</p>
                            </div>
                            <h2>Total Views: <span className='font-semibold'>{data.total_view}</span></h2>
                        </div>
                        {/* <div className='mt-6'>
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
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 mt-8 p-0'>
                <div className='max-w-xl mx-auto justify-center flex pt-8'>
                    <span className='me-2'>
                        {/* <Button variant="contained" color="success" style={{paddingLeft:"50px",  paddingRight:"50px"}}>
                            Download
                        </Button> */}
                        <a href={pdfFile}  download className='bg-[#1976D2] text-white rounded-md py-2 font-bold text-lg  px-14 ' >Download </a>
                    </span>
                    {/* <span className='me-2'>
                        <Button variant="contained" color="success">
                            Reviews
                        </Button>
                    </span> */}
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
