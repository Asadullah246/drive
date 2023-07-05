
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      {/* dashboard  */}

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-6 mt-8 ">
            <div className='w-full flex justify-start items-center mb-6 gap-6'>
                <input type="text" name="" id="" className='w-1/2 p-2 border-2 rounded-md ' placeholder='search here' />
                <button className='border-2 rounded-md '>Search</button>
            </div>
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-purple-900  text-white">
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
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
