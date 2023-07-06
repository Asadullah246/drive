import {  Rating } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import image from '../../assets/CardImage/download.jpg'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import testImage from '../../assets/CardImage/download.jpg'
import { useState } from "react";
import Swal from "sweetalert2";
// import { useState } from "react";

// data for modal 
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
    // review: [], // nise korsi nite ta delete kore diyo 
    image: testImage,
    learning_subject: [],
    total_view: 10,

    // ami add korlam 
    regular_price: 500,
    status: 'In Stock',
    rating: 4,

    // reviews 
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi commodi hic nam placeat voluptates cupiditate nostrum eius rem rerum.",
    author: "Jakir",
    time: "on Feb 2023"


}
// modal inside the function 
{/* modal */ }
{/* Open the modal using ID.showModal() method */ }
{/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button> */ }
// <dialog id="my_modal_1" className="modal">
//     <form method="dialog" className="modal-box ">
//     <h3 className="font-bold text-lg mb-4">Item Name: {data.name}</h3>
//         <img src={data.image} alt="" />
//         <p className="mt-2">Category: {data.category}</p>
//         <p>Sub-Category: <span className="font-semibold">{data.sub_category}</span></p>
//         <p>Price: <span className="font-semibold">{data.price}</span></p>
//         <p>Uploader: <span className="font-semibold">{data.uploader}</span></p>
//         <p>Status: <span className="font-semibold">{data.status}</span></p>
//         <h2 className="font-semibold">Click For Decline:  <button><CancelIcon className="text-blue-600 me-4" /></button></h2>
//         <div className="modal-action">
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn">Close</button>
//         </div>
//     </form>
// </dialog>



const AllProducts = () => {
    const [value, setValue] = useState(4);
   const handleApproved =()=>{
    Swal.fire({
        title: 'Do You Want to Approve?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Approved Successfully!',
            'Your file has been Approved.',
            'success'
          )
        }
      })
   }
    return (
        <div>
            {/* modal */}
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box ">
                    <h3 className="font-bold text-lg mb-4">Item Name: {data.name}</h3>
                    <img src={data.image} alt="" />
                    <h2 className="font-semibold">Click For Decline:  <button><CancelIcon className="text-blue-600 me-4" /></button></h2>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask w-12 h-12">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="flex">
                                            <div>
                                                <h3>Best seller: Asadullah</h3>
                                            </div>
                                            <div className="text-sm opacity-50">Total Hours: 10</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex justify-between">
                                    <Rating name="read-only" value={value} readOnly
                                    // onChange={(event, newValue) => {
                                    //     setValue(newValue);
                                    // }}
                                    />
                                    <div>
                                        <button onClick={handleApproved}><CheckBoxIcon className="text-blue-600 me-4" /></button>
                                        <button onClick={() => window.my_modal_1.showModal()}><CancelIcon className="text-blue-600" /></button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex justify-center align-middle">
                                    <GroupIcon />
                                    <h2>500</h2>
                                </div>
                            </td>
                            <th>
                                <div>
                                    <button> <FavoriteBorderIcon /></button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;