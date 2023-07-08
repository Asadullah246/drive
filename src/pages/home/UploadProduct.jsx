
import LoadingButton from "@mui/lab/LoadingButton";


const UploadProduct = () => {
  const upload = (e) => {
    e.preventDefault()
    // console.log(e.target.category.value);

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const sub_category = form.sub_category.value;
    const sub_sub_category = form.sub_sub_category.value;
    const price = form.price.value;
    const uploader = form.uploader.value;
    const description = form.description.value;
    const learning_subject = form.learning_subject.value;
    const image = form.image.value;
    const document = form.document.value;
    const documents = {
      name,
      category,
      sub_category,
      sub_sub_category,
      price,
      uploader,
      description,
      learning_subject,
      image,
      document
    }
    console.log(documents);

  }
  return (
    <div>
      <h4 className="text-3xl"> Upload Document</h4>
      <div className=" w-full lg:w-[600px]">
        <form action="" className="my-8 w-full uploadForm" onSubmit={upload}>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Doc Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="name"
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
              name="sub_category"
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
              name="sub_sub_category"
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
              name="price"
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
              name="uploader"
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
              name="description"
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
                name="learning_subject"
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
              Image :{" "}
            </label>
            <input
              type="file"
              name="image"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Document :{" "}
            </label>
            <input
              type="text"
              name="document"
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
