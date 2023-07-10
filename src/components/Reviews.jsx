import { Rating } from "@mui/material";
import testImage from "../assets/CardImage/download.jpg";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const Reviews = ({ p }) => {
  const [value, setValue] = useState(4);
  const [beforeRating, setbeForeRating] = useState(5);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value2, setValue2] = useState(2);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ textAlign: "center ", marginBottom: "20px " }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Give review
          </Typography>
          <form action="">
            <div className="flex justify-between items-center gap-3 mb-6 ">
              <label className="w-1/3" htmlFor="">
                Name
              </label>
              <input
                className="w-[70%] border-2 border-gray-400   rounded-md py-1 px-2"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="flex justify-between items-center gap-3 mb-6 ">
              <label className="w-1/3" htmlFor="">
                Email
              </label>
              <input
                className="w-[70%] border-2 border-gray-400   rounded-md py-1 px-2"
                type="email"
                name="name"
                id=""
              />
            </div>
            <div className="flex justify-between items-center gap-3 mb-6 ">
              <label className="w-1/3" htmlFor="">
                Review
              </label>
              <textarea
                className="w-[70%] border-2 border-gray-400   rounded-md py-1 px-2"
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="flex justify-between items-center gap-3 mb-6 ">
              <label className="w-1/3" htmlFor="">
                Rating
              </label>
              <Rating
                name="simple-controlled"
                value={value2}
                onChange={(event, newValue) => {
                  setValue2(newValue);
                }}
              />
            </div>
          </form>
        </Box>
      </Modal>
      <div className=" mt-4 border-2 border-black-700  p-4">
        <div className="">
          <h2 className="text-xl font-semibold">
            Reviews:{" "}
            <Rating
              name="read-only"
              value={4}
              style={{
                fontSize: "1em ",
                color: "#1976D2 ",
                marginBottom: "-20px ",
              }}
              readOnly
            />{" "}
            ({data.rating})
          </h2>
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
            <Button onClick={handleOpen} variant="contained">
              Write a Review
            </Button>
          </div>
          <div className="pb-6">
            <hr className="border-yellow-400 h-4 " />
            <div className="flex gap-4 items-start ">
              <div>
                <Avatar sx={{ bgcolor: "#1976D2" }}>OP</Avatar>
              </div>
              <div>
                <h6 className="font-bold">Miras</h6>
                <Rating
                  name="read-only"
                  value={beforeRating}
                  style={{ fontSize: "1.1em ", color: "#1976D2 " }}
                  readOnly
                />
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
                <Rating
                  name="read-only"
                  value={beforeRating}
                  style={{ fontSize: "1.1em ", color: "#1976D2 " }}
                  readOnly
                />
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
                <Rating
                  name="read-only"
                  value={beforeRating}
                  style={{ fontSize: "1.1em ", color: "#1976D2 " }}
                  readOnly
                />
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
