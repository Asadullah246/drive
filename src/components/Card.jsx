import { Rating } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import cardImg1 from "../assets/CardImage/download.jpg";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app.context";
import { useNavigate } from "react-router-dom";
import base from "./Database";

const Card = () => {
    const [value, setValue] = useState(2);
    const { allData2, setAllData2 } = useContext(AppContext);
    const navigate=useNavigate()
    const [allRating, setAllRating] = useState([]);
    const [av, setAv] = useState(5);

    useEffect(() => {
        if (allRating) {
          getAv(allRating);
        }
      }, [allRating]);

      const getAv = (r) => {
        let all = 0;
        if (!Array.isArray(r)) {
          setAv(0);
          return;
        }
        r.map((a) => {
          return (all += Number(a.rating));
        });
        setAv(all / r.length);
      };

    const singleDetails=(id)=>{
        console.log("id", id);
        navigate(`/${id}`)
    }
    return (
        <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-8 ">
            {
                allData2?.map((a, index) => {
                    return (
                        <div key={index} className="card  bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={`${base}/${a.thumb}`}
                                    alt="doc"
                                    className="w-full h-[200px]"
                                />
                            </figure>
                            <div className="card-body px-3 pt-1 pb-2">
                                <h4 className="card-title text-base font-bold ">
                                    {a.doc_name.slice(0,20)}...
                                    {/* <div className="badge badge-secondary">NEW</div> */}
                                </h4>
                                <Rating name="read-only" value={av} style={{fontSize:"1.2em"}} readOnly
                                // onChange={(event, newValue) => {
                                //     setValue(newValue);
                                // }}
                                />
                                <p className="text-sm mb-0 pb-0 ">{a.desc.substring(0, 50)}</p>
                                <div className="card-actions justify-start">
                                    {/* <div className="badge badge-outline">Fashion</div> */}
                                    <div>
                                        <LoadingButton loading={false} variant="contained" onClick={()=>singleDetails(a._id)} >
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
