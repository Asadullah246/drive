import LoadingButton from "@mui/lab/LoadingButton";
const UploadProduct = () => {
    const upload=(e)=>{
        e.preventDefault() 
        console.log(e.target.category.value);
    }
  return (
    <div>
      <h4 className="text-3xl"> Upload Document</h4>
      <div className=" w-full lg:w-[600px]">
        <form action="" className="my-8 w-full" onSubmit={upload}>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Doc Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Category :{" "}
            </label>
            <input
              type="text"
              name="category"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Sub category :{" "}
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Sub sub category :{" "}
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              price :{" "}
            </label>
            <input
              type="number"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Uploader :{" "}
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Description :{" "}
            </label>
            <textarea
              type="text"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>

          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Learning subjects :{" "}
            </label>
            <div className="w-2/3">
              <textarea
                type="text"
                name="name"
                id=""
                className="w-full border-2 rounded-md p-1"
              />{" "}
              <br />
              <small className="text-red-500 ">
                Use * to write new subject
              </small>
            </div>
          </div>

          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Document :{" "}
            </label>
            <input
              type="file"
              name="name"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>

        <div>
        <LoadingButton loading={false} variant="contained" type="submit">
            Submit
          </LoadingButton>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
