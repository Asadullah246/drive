import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const removeDuplicate = (arr) => {
  // const uniqueArray = [...new Set(arr)];
  const uniqueCategories = Array.from(new Set(arr.map((s) => s.category)));
  console.log("uni", uniqueCategories);
  return uniqueCategories;
};

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
const productData = [
  {
    id: 1,
    name: "product 1",
    category: "cat 1",
    "sub-category": "sub cat-1",
    "sub-sub-category": "sub sub cat-1",
    price: 300,
    uploader: "miras",
    description: "this is a test product",
    review: [],
    image: "./assets/CardImage",
    "learning-subject": [],
    "total-view": 10,
  },
  {
    id: 2,
    name: "product 2",
    category: "cat 2",
    "sub-category": "sub cat-2",
    "sub-sub-category": "sub sub cat-2",
    price: 700,
    uploader: "asad",
    description: "this is a test product",
    review: [],
    image: "./assets/CardImage",
    "learning-subject": [],
    "total-view": 10,
  },
  {
    id: 2,
    name: "product 3",
    category: "cat 2",
    "sub-category": "sub cat-2",
    "sub-sub-category": "sub sub cat-2",
    price: 700,
    uploader: "asad",
    description: "this is a test product",
    review: [],
    image: "./assets/CardImage",
    "learning-subject": [],
    "total-view": 10,
  },
  {
    id: 2,
    name: "product 4",
    category: "cat 1",
    "sub-category": "sub cat-1",
    "sub-sub-category": "sub sub cat-4",
    price: 700,
    uploader: "asad",
    description: "this is a test product",
    review: [],
    image: "./assets/CardImage",
    "learning-subject": [],
    "total-view": 10,
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const [personName1, setPersonName1] = useState([]);
  const [personName2, setPersonName2] = useState([]);
  const [personName3, setPersonName3] = useState([]);
  const [pageR, setPageR] = useState(false);
  const [allData, setAllData] = useState([]);
  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [setCat3, setCat3setCat3] = useState([]);

  useEffect(() => {
    setAllData(productData);
  }, []);

  const handleChangeC1 = (event) => {
    const {
      target: { value },
    } = event;
    console.log("value", value);
    setPersonName1(
      value
      // On autofill we get a stringified value.
      //   typeof value === "string" ? value.split(",") : value
    );
    if (value == "") {
      setCat1(allData);
    } else {
      const filtered = allData.filter((f) => f.category == value);
      setCat1(filtered);
    }
  };
  const handleChangeC2 = (event) => {
    const {
      target: { value },
    } = event;
    console.log("value", value);
    setPersonName2(
      value
      // On autofill we get a stringified value.
      //   typeof value === "string" ? value.split(",") : value
    );

    if (value == "") {
      setCat2(cat1);
    } else {
      const filtered = cat1.filter((f) => f.category == value);
      setCat2(filtered);
    }
  };

  const handleChangeC3 = (event) => {
    const {
      target: { value },
    } = event;
    console.log("value", value);
    setPersonName3(
      value
      // On autofill we get a stringified value.
      //   typeof value === "string" ? value.split(",") : value
    );

    if (value == "") {
      setCat3(cat2);
    } else {
      const filtered = cat2.filter((f) => f.category == value);
      setCat3(filtered);
    }
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

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4 ">
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple={false}
                  value={personName1}
                  onChange={handleChangeC1}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem
                    //   key={s}
                    value={""}
                    style={getStyles("", personName1, theme)}
                  >
                    Select
                  </MenuItem>
                  {removeDuplicate(allData)?.map((s) => (
                    <MenuItem
                      key={s}
                      value={s}
                      style={getStyles(s, personName1, theme)}
                    >
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">
                  Sub Category
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple={false}
                  value={personName2}
                  onChange={handleChangeC2}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem
                    //   key={s}
                    value={""}
                    style={getStyles("", personName2, theme)}
                  >
                    Select
                  </MenuItem>

                  {removeDuplicate(cat1)?.map((s) => (
                    <MenuItem
                      key={s}
                      value={s}
                      style={getStyles(s, personName2, theme)}
                    >
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">
                  Sub sub Category
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple={false}
                  value={personName3}
                  onChange={handleChangeC3}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  <MenuItem
                    //   key={s}
                    value={""}
                    style={getStyles("", personName3, theme)}
                  >
                    Select
                  </MenuItem>

                  {removeDuplicate(cat2)?.map((s) => (
                    <MenuItem
                      key={s}
                      value={s}
                      style={getStyles(s, personName3, theme)}
                    >
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div>
                <LoadingButton loading={false} variant="contained">
                  Search
                </LoadingButton>
              </div>
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
