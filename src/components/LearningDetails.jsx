import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { LoadingButton } from '@mui/lab';

const LearningDetails = () => {
    return (
        <div>
            <div className=" mt-4 border-2 border-black-700 p-4">
                <div className="flex justify-around">
                    <h2 className="text-4xl font-semibold">What You'll learn</h2>
                </div>
                <div className="flex justify-evenly	mt-4">
                    <div>

                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="mt-4">
                            <LoadingButton loading={false} variant="contained">
                                Show More Details
                            </LoadingButton>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                        <div className="flex">
                            <CheckCircleOutlineIcon style={{ color: "#1976D2" }} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, autem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningDetails;