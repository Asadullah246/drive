import image from '../assets/CardImage/shop2.jpg'

const MyOwn = () => {
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
                                            <div className="text-sm opacity-50">
                                                <h3>Total Hours: 10</h3>
                                                <h3>Update: 12/2023</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
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