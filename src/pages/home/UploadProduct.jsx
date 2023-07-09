
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import { useEffect, useState } from "react";
import base from "../../components/Database";
import ToastSuccess, { ToastError } from "../../components/Toast";


const UploadProduct = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [thumb, setThumb]=useState(null)
  const [allFiles, setAllFiles]=useState([])

  useEffect(() => {
    axios
      .get(`${base}/files`)
      .then(function (response) {
        // console.log("re", response)
        setAllFiles(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log("allfiles", allFiles);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  const handleFileCSingle= (event) => {
    setThumb(event.target.files[0]);
  };
  console.log("file",thumb, selectedFiles);

    const upload=(e)=>{
        e.preventDefault()
      const t=e.target ;
        const body ={
          doc_name:t.doc_name.value,
          category:t.category.value,
          sub_category:t.sub_category.value,
          sub_sub_category:t.sub_sub_category.value,
          price:t.price.value,
          uploader_name:t.uploader_name.value,
          desc:t.desc.value,
          l_subject:t.l_subject.value,
          thumb:t.category.file,
          files:t.category,
        }
        console.log("body", body);

        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('files', selectedFiles[i]);
        }
        formData.append('thumb', thumb);
        formData.append('doc_name', body.doc_name);
        formData.append('category', body.category);
        formData.append('sub_category', body.sub_category);
        formData.append('sub_sub_category', body.sub_sub_category);
        formData.append('price', body.price);
        formData.append('uploader_name', body.uploader_name);
        formData.append('desc', body.desc);
        formData.append('l_subject', body.l_subject);


        axios
        .post(`${base}/files`, formData)
        .then(function (response) {
          // setRefreshP(!refreshP);
          ToastSuccess("Successfully updated");
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error?.message);
          ToastError(error?.message);
        });
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
              name="doc_name"
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
              name="uploader_name"
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
              name="desc"
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
                name="l_subject"
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
              Thumbnails :{" "}
            </label>
            <input
            onChange={handleFileCSingle}
              type="file"
              name="thumb"
              id=""
              className="w-2/3 border-2 rounded-md p-1"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-4 mb-4">
            <label className="w-1/3" htmlFor="">
              Document :{" "}
            </label>
            <input
            onChange={handleFileChange}
              type="file"
              multiple
              name="files"
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
