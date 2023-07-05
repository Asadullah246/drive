import { Rating } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import cardImg1 from "../assets/CardImage/download.jpg";
import { useContext, useState } from "react";
import { AppContext } from "../app.context";

const Card = () => {
    const [value, setValue] = useState(2);
    const { allData2, setAllData2 } = useContext(AppContext);
    console.log("all", allData2);
    return (
        <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-8 ">
            {
                allData2?.map((a, index) => {
                    return (
                        <div key={index} className="card  bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={a.image} 
                                    alt="Shoes"
                                    className="w-full "
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {a.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <Rating name="read-only" value={value} readOnly
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                />
                                <p>{a.description}</p>
                                <div className="card-actions justify-start">
                                    {/* <div className="badge badge-outline">Fashion</div> */}
                                    <div>
                                        <LoadingButton loading={false} variant="contained">
                                            See Details
                                        </LoadingButton>
                                    </div>
                                    {/* <div className="badge badge-outline">Products</div> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Card;
