import testImage from "../assets/CardImage/download.jpg";

const data =
{
    id: 1,
    name: "product 1",
    category: "cat 1",
    sub_category: "sub cat-10",
    sub_sub_category: "sub sub cat-1",
    price: 300,
    uploader: "Miras",
    description: "this is a test product",
    review: [], // atar bodol nise rating disi
    image: testImage,
    learning_subject: [],
    total_view: 10,

    // ami add korlam 
    regular_price: 500,
    status: 'In Stock',
    rating: 4,
}

const Reviews = () => {

    return (
        <div>
            <div className=" mt-4 border-2 border-black-700 p-4">
                <div className="flex justify-around">
                    <h2 className="text-4xl font-semibold">Reviews</h2>
                </div>
                
            </div>
        </div>
    );
};

export default Reviews;