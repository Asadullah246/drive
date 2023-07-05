import cardImg1 from "../assets/CardImage/download.jpg";
import LoadingButton from "@mui/lab/LoadingButton";
const Card = () => {
  return (
    <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-8 ">
      {[...Array(6)].map((a, index) => {
        return (
          <div key={index} className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={cardImg1} alt="Shoes" className="w-full " />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                {/* <div className="badge badge-outline">Fashion</div> */}

                <LoadingButton loading={false} variant="contained">
                  Submit
                </LoadingButton>
                {/* <div className="badge badge-outline">Products</div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
