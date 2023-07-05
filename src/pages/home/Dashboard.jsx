import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Dashboard = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChangeC1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
           {[...Array(4)].map((a,index)=>{
            return (
                <FormControl sx={{ m: 1,  }} key={index}>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple={false}
                  value={personName}
                  onChange={handleChangeC1}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )
           })
           }

            </div>

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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
