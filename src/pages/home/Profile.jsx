import React, { useContext, useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Avatar from "@mui/material/Avatar";
import { AppContext } from "../../app.context";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import cardImg from "../../assets/CardImage/download.jpg";
import MyDoc from "./MyDoc";
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import base from "../../components/Database";
import ToastSuccess, { ToastError } from "../../components/Toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [user, setUser] = useState();
  const [myUpload, setMyUpload] = useState([]);
  const [a, setA] = useState([]);
  const [r, setR] = useState([]);
  const {  allFiles, users, uRef,setURef } =
    useContext(AppContext);
    const[u, setU]=useState()
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("driveUser"));
    if (getUser) {
      setU(getUser);
    }
  }, []);
  useEffect(() => {
    if (user) {
      const total = allFiles.filter((f) => f.uploader_email == user.email);
      setMyUpload(total);
    }
  }, [allFiles, user]);
  useEffect(() => {
    if (users && u) {
      const getU = users.find((f) => f.email == u.email);
      setUser(getU);
    }
  }, [users, u]);
  useEffect(() => {
    const ap = myUpload.filter((f) => f.status == "approved");
    setA(ap);
  }, [myUpload]);
  useEffect(() => {
    const ap = myUpload.filter((f) => f.status == "cancelled");
    setR(ap);
  }, [myUpload]);
  console.log("user", user );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateIn = (e) => {
    e.preventDefault();
    const t=e.target;
    const formData = new FormData();
    formData.append('thumb', t.thumb.files[0]);
    formData.append('name', t.name.value);
    formData.append('password', t.password.value);
    formData.append('number', t.number.value);

    axios
    .put(`${base}/member/update/${user._id}`, formData)
    .then(function (response) {
      ToastSuccess("profile updated");
      setURef(uRef)

      // console.log(response);
    })
    .catch(function (error) {
      ToastError(error?.message);
      console.log(error);
    });

  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="text-black text-xl font-bold mb-3 ">
            Update informations
          </h3>
          <form className="text-black " onSubmit={updateIn} action="">
            <div className="mb-2">
              <label htmlFor="">Name</label> <br />
              <input
                type="text"
                placeholder="df"
                name="name"
                id=""
                className="border-2 w-full border-black px-2 rounded-md "
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Password</label> <br />
              <input
                type="text"
                placeholder="df"
                name="password"
                id=""
                className="border-2 w-full border-black px-2 rounded-md "
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Phone Number</label> <br />
              <input
                type="number"
                placeholder="df"
                name="number"
                id=""
                className="border-2 w-full border-black px-2 rounded-md "
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Image</label> <br />
              <input
                type="file"
                placeholder="df"
                name="thumb"
                id=""
                className="border-2 w-full border-black px-2 rounded-md "
              />
            </div>
            <div>
              <LoadingButton
              type="submit"
                loading={false}
                variant="contained"
                // onClick={() => singleDetails(a._id)}
              >
                See Details
              </LoadingButton>
            </div>
          </form>
        </Box>
      </Modal>
      <div className="flex items-center flex-col md:flex-row ">
        <div className="w-full md:w-[40%] imgProfileDiv">
          {user?.thumb ? (
            <div className="w-2/3 mx-auto">
              <img src={`${base}/${user.thumb}`} alt="" className="w-full h-auto rounded-md " />
            </div>
          ) : (
            <div className="w-full">
              <Avatar
                sx={{
                  bgcolor: "#F000B8",
                  width: "300px",
                  height: "240px",
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                {user ? user.name?.substring(0, 2).toUpperCase() : "NO"}
              </Avatar>
            </div>
          )}
        </div>
        <div className="ml-0 md:ml-12 lg:ml-20 mt-8 md:mt-0 text-center md:text-left ">
          <h3 className="text-3xl font-bold mb-4 ">{user?.name}</h3>
          <p className="font-semibold ">
            Email : <span className="font-bold">{user?.email}</span>{" "}
          </p>
          <p className="font-semibold ">
            Points : <span className="font-bold">{user?.point}</span>{" "}
          </p>
          <p className="font-semibold ">
            Uploads : <span className="font-bold">{myUpload?.length}</span>{" "}
          </p>
          <p className="font-semibold ">
            Accepted : <span className="font-bold">{a?.length}</span>{" "}
          </p>
          <p className="font-semibold ">
            Rejects : <span className="font-bold">{r?.length}</span>
          </p>

          <div className="mt-4">
            <LoadingButton
              loading={false}
              variant="contained"
              // onClick={() => singleDetails(a._id)}
              onClick={handleOpen}
            >
              Update
            </LoadingButton>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-bold text-[#1976D2] uppercase mb-4">
          My Documents
        </h1>
        <MyDoc></MyDoc>
      </div>

      {/* <div className="w-fit mx-auto mt-6 mb-16 profileSciton">
        <Avatar sx={{bgcolor: "#F000B8", height:"3em", width:"3em "}}>{user?user.name?.substring(0, 2).toUpperCase():"NO"}</Avatar>
            <h1 className="text-3xl mt-2 font-bold ">{user?.name}</h1>
            <p className="text-base mt-2 font-bold ">{user?.email}</p>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        <div className="profileBox flex justify-center items-center text-center rounded-md  ">
          <div>
            <CloudUploadIcon style={{ fontSize: "6em", color: "#1E3A8A" }} />
            <h4 className="text-lg">My Upload</h4>
            <h4 className="text-2xl font-bold pb-2 text-[#1E3A8A] ">{myUpload?.length}</h4>
          </div>
        </div>
        <div className="profileBox flex justify-center items-center text-center rounded-md  ">
          <div>
            <ThumbUpAltIcon style={{ fontSize: "6em", color: "#1E3A8A" }} />
            <h4 className="text-lg">Accepted</h4>
            <h4 className="text-2xl font-bold pb-2 text-[#1E3A8A] ">{a?.length}</h4>
          </div>
        </div>
        <div className="profileBox flex justify-center items-center text-center rounded-md  ">
          <div>
            <ThumbDownAltIcon style={{ fontSize: "6em", color: "#1E3A8A" }} />
            <h4 className="text-lg">Rejected</h4>
            <h4 className="text-2xl font-bold pb-2 text-[#1E3A8A] ">{r?.length}</h4>
          </div>
        </div>
        <div className="profileBox flex justify-center items-center text-center rounded-md  ">
          <div>
            <PointOfSaleIcon style={{ fontSize: "6em", color: "#1E3A8A" }} />
            <h4 className="text-lg">Points</h4>
            <h4 className="text-2xl font-bold pb-2 text-[#1E3A8A] ">{user?.point}</h4>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
