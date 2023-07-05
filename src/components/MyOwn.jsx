import { Rating } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import image from '../assets/CardImage/shop2.jpg'
import { useState } from "react";
// import { useState } from "react";

const MyOwn = () => {
    const [value, setValue] = useState(2);
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
                                                <h3>Best seller: </h3>
                                            </div>
                                            <div className="text-sm opacity-50">Total Hours: 10</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            <Rating name="read-only" value={value} readOnly
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                />
                            </td>
                            <td>
                                <GroupIcon/>
                            </td>
                            <th>
                                <FavoriteBorderIcon/>
                            </th>
                        </tr>
                    </tbody>

                    {/* foot */}
                    <tfoot>
                        <tr>
                            {/* <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th> */}
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyOwn;