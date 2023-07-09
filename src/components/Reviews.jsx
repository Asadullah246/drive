import { Button, Rating } from "@mui/material";
import testImage from "../assets/CardImage/download.jpg";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

const data = {
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
  status: "In Stock",
  rating: 4,

  // reviews
  descriptions:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi commodi hic nam placeat voluptates cupiditate nostrum eius rem rerum.",
  author: "Jakir",
  time: "on Feb 2023",
};

const Reviews = () => {
  const [value, setValue] = useState(4);
  const [beforeRating, setbeForeRating] = useState(5);
  return (
    <div>
      <div className=" mt-4 border-2 border-black-700  p-4">
        <div className="">
          <h2 className="text-xl font-semibold">Reviews:   <Rating name="read-only" value={4} style={{fontSize:"1em ", color:"#1976D2 ", marginBottom:"-20px "}} readOnly /> ({data.rating})</h2>
          <p>
            Get specific details about this product from customers who own it.
          </p>
          {/* <div className="flex">
            <Rating
              name="read-only"
              value={value}
              readOnly
              // onChange={(event, newValue) => {
              //     setValue(newValue);
              // }}
            />
            <h3 className="font-semibold">Out of</h3>
            <Rating
              name="read-only"
              value={beforeRating}
              readOnly
              // onChange={(event, newValue) => {
              //     setValue(newValue);
              // }}
            />
          </div> */}
          <div className="mt-3 mb-8">
            <Button variant="contained">Write a Review</Button>
          </div>
          <div className="pb-6">
            <hr className="border-yellow-400 h-4 " />
            <div className="flex gap-4 items-start ">
              <div>
                <Avatar sx={{ bgcolor: "#1976D2" }}>OP</Avatar>
              </div>
              <div>
                <h6 className="font-bold">Miras</h6>
                <Rating name="read-only" value={beforeRating} style={{fontSize:"1.1em ", color:"#1976D2 "}} readOnly />
                <p>{data.descriptions}</p>
                <div className="flex">

                  <p className="text-gray-500">{data.time}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-6">
            <hr className="border-yellow-400 h-4" />
            <div className="flex gap-4 items-start ">
              <div>
                <Avatar sx={{ bgcolor: "#1976D2" }}>Rk</Avatar>
              </div>
              <div>
                <h6 className="font-bold">Rayhan</h6>
                <Rating name="read-only" value={beforeRating} style={{fontSize:"1.1em ", color:"#1976D2 "}} readOnly />
                <p>{data.descriptions}</p>
                <div className="flex">

                  <p className="text-gray-500">{data.time}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-6">
            <hr className="border-yellow-400 h-4" />
            <div className="flex gap-4 items-start ">
              <div>
                <Avatar sx={{ bgcolor: "#1976D2" }}>SK</Avatar>
              </div>
              <div>
                <h6 className="font-bold">Sagor</h6>
                <Rating name="read-only" value={beforeRating} style={{fontSize:"1.1em ", color:"#1976D2 "}} readOnly />
                <p>{data.descriptions}</p>
                <div className="flex">
                  {/* <p className="text-gray-500 me-2">By</p>
                  <p>
                    <span className="font-semibold text-violet-700 me-2">
                      {data.author}
                    </span>
                  </p> */} 
                  <p className="text-gray-500">{data.time}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reviews;
