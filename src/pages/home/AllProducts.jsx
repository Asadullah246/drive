import { Rating } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import image from '../../assets/CardImage/download.jpg'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
// import { useState } from "react";

const AllProducts = () => {
    const [value, setValue] = useState(4);
    const [beforeRating, setbeForeRating] = useState(5);
    return (
        <div>
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
                                        <button><CheckBoxIcon className="text-blue-600 me-4" /></button>
                                        <button><CancelIcon className="text-blue-600" /></button>
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
                        {/* row 2 */}
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
                                        <button><CheckBoxIcon className="text-blue-600 me-4" /></button>
                                        <button><CancelIcon className="text-blue-600" /></button>
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
                        {/* row 3 */}
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
                                        <button><CheckBoxIcon className="text-blue-600 me-4" /></button>
                                        <button><CancelIcon className="text-blue-600" /></button>
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