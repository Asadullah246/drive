import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {

  return (
    <div>
      {/* dashboard  */}
      <div className="bg-blue-900 h-[50px] md:h-[80px] w-full fixed top-0 left-0 z-50 flex items-center justify-start  ">
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden ml-2">
          <MenuIcon style={{ color: "white" }} />
        </label>
      </div>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          <div className=" h-[50px] md:h-[80px] w-full "></div>

          <div className="p-8 mt-6">
            {/* filter section  */}



            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side  ">
          <div className="relative ">
            <div className="h-[50px] md:h-[80px] w-full "></div>
          </div>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#E8EAED]  text-black ">
            {/* Sidebar content here */}

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category-1">Category 1</Link>
            </li>
            <li>
              <Link to="/details">details</Link>
            </li>
            <li>
              <Link to="/upload">Upload Document</Link>
            </li>
            <li>
              <Link to="/mydoc">My Documents</Link>
            </li>
            <li>
              <Link to="/allfiles">All Files</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
