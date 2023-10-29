import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbaropen from "./componets/navbar/Navbaropen";
import Navbarclose from "./componets/navbar/Navbarclose";
import Privacy from "./componets/Privacy";
import Upsc2023 from "./screen/Upsc2023";
import Navbarback from "./componets/navbar/Navbarback";
import Navbarback2 from "./componets/navbar/Navbarback2";
import Upsc2022 from "./screen/Upsc2022/Upsc2022";
import Home from "./componets/Home";
import Upsc2022Paper1 from "./screen/Upsc2022/mains/Upsc2022Paper1";
import Upsc2022Paper2 from "./screen/Upsc2022/mains/Upsc2022Paper2";
import Upsc2022Paper3 from "./screen/Upsc2022/mains/Upsc2022Paper3";
import Upsc2022Paper4 from "./screen/Upsc2022/mains/Upsc2022Paper4";
import Upsc2022Paper5 from "./screen/Upsc2022/mains/Upsc2022Paper5";
import Upsc2022Paper6 from "./screen/Upsc2022/mains/Upsc2022Paper6";
import Upsc2022Paper7 from "./screen/Upsc2022/mains/Upsc2022Paper7";
import Upsc2022Paper8 from "./screen/Upsc2022/mains/Upsc2022Paper8";
import Upsc2022Paper9 from "./screen/Upsc2022/mains/Upsc2022Paper9";
import Upsc2022Paper10 from "./screen/Upsc2022/mains/Upsc2022Paper10";
import Upsc2021 from "./screen/Upsc2021";
import Upsc2020 from "./screen/Upsc2020";
import Upsc2019 from "./screen/Upsc2019";
import Upsc2018 from "./screen/Upsc2018";
import Upsc2017 from "./screen/Upsc2017";
import Upsc2016 from "./screen/Upsc2016";
import Upsc2014 from "./screen/Upsc2014";
import Upsc2015 from "./screen/Upsc2015";
import Upsc2013 from "./screen/Upsc2013";
import Upsc2012 from "./screen/Upsc2012";
import Upsc2011 from "./screen/Upsc2011";
import Upsc2010 from "./screen/Upsc2010";
import Upsc2009 from "./screen/Upsc2009";
import Upsc2008 from "./screen/Upsc2008";
import Upsc2007 from "./screen/Upsc2007";
import Upsc2006 from "./screen/Upsc2006";
import Upsc2005 from "./screen/Upsc2005";
import Upsc2004 from "./screen/Upsc2004";
import Upsc2003 from "./screen/Upsc2003";
import Upsc2002 from "./screen/Upsc2002";
import Upsc2001 from "./screen/Upsc2001";
import Upsc2000 from "./screen/Upsc2000";
import Upsc1999 from "./screen/Upsc1999";
import Upsc1998 from "./screen/Upsc1998";
import Upsc1997 from "./screen/Upsc1997";
import Upsc1996 from "./screen/Upsc1996";
import Upsc1995 from "./screen/Upsc1995";
import Upsc1994 from "./screen/Upsc1994";
import Upsc1993 from "./screen/Upsc1993";
import Upsc1992 from "./screen/Upsc1992";
import Upsc1991 from "./screen/Upsc1991";
import Upsc1990 from "./screen/Upsc1990";
import Upsc23 from "./componets/upsc/Upsc23";
import Upsc22_1 from "./componets/upsc/upsc22/Upsc22_1";
import Upsc22_2 from "./componets/upsc/upsc22/Upsc22_2";
import Upsc22_3 from "./componets/upsc/upsc22/Upsc22_3";
import Upsc22_4 from "./componets/upsc/upsc22/Upsc22_4";
import Upsc22_5 from "./componets/upsc/upsc22/Upsc22_5";
import Upsc22_6 from "./componets/upsc/upsc22/Upsc22_6";
import Upsc22_7 from "./componets/upsc/upsc22/Upsc22_7";
import Upsc22_8 from "./componets/upsc/upsc22/Upsc22_8";
import Upsc22_9 from "./componets/upsc/upsc22/Upsc22_9";
import Upsc22_10 from "./componets/upsc/upsc22/Upsc22_10";
import Upsc21 from "./componets/upsc/Upsc21";
import Upsc20 from "./componets/upsc/Upsc20";
import Upsc19 from "./componets/upsc/Upsc19";
import Upsc18 from "./componets/upsc/Upsc18";
import Upsc17 from "./componets/upsc/Upsc17";
import Upsc16 from "./componets/upsc/Upsc16";
import Upsc15 from "./componets/upsc/Upsc15";
import Upsc14 from "./componets/upsc/Upsc14";
import Upsc13 from "./componets/upsc/Upsc13";
import Upsc12 from "./componets/upsc/Upsc12";
import Upsc11 from "./componets/upsc/Upsc11";
import Upsc10 from "./componets/upsc/Upsc10";
import Upsc09 from "./componets/upsc/Upsc09";
import Upsc08 from "./componets/upsc/Upsc08";
import Upsc07 from "./componets/upsc/Upsc07";
import Upsc06 from "./componets/upsc/Upsc06";
import Upsc05 from "./componets/upsc/Upsc05";
import Upsc04 from "./componets/upsc/Upsc04";
import Upsc03 from "./componets/upsc/Upsc03";
import Upsc02 from "./componets/upsc/Upsc02";
import Upsc01 from "./componets/upsc/Upsc01";
import Upsc00 from "./componets/upsc/Upsc00";
import Upsc99 from "./componets/upsc/Upsc99";
import Upsc98 from "./componets/upsc/Upsc98";
import Upsc97 from "./componets/upsc/Upsc97";
import Upsc96 from "./componets/upsc/Upsc96";
import Upsc95 from "./componets/upsc/Upsc95";
import Upsc94 from "./componets/upsc/Upsc94";
import Upsc93 from "./componets/upsc/Upsc93";
import Upsc92 from "./componets/upsc/Upsc92";
import Upsc91 from "./componets/upsc/Upsc91";
import Upsc90 from "./componets/upsc/Upsc90";
import Syllabus from "./screen/Syllabus";
import SyllabusPdf from "./componets/upsc/SyllabusPdf";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/navopen",
    element: <Navbaropen></Navbaropen>,
  },
  {
    path: "/navclose",
    element: <Navbarclose></Navbarclose>,
  },
  {
    path: "/privacy",
    element: <Privacy></Privacy>,
  },

  {
    path: "/23",
    element: <Upsc2023></Upsc2023>,
  },
  {
    path: "/navback",
    element: <Navbarback></Navbarback>,
  },
  {
    path: "/navback2",
    element: <Navbarback2></Navbarback2>,
  },
  {
    path: "/22",
    element: <Upsc2022></Upsc2022>,
  },
  {
    path: "/22Paper1",
    element: <Upsc2022Paper1></Upsc2022Paper1>,
  },
  {
    path: "/22Paper2",
    element: <Upsc2022Paper2></Upsc2022Paper2>,
  },
  {
    path: "/22Paper3",
    element: <Upsc2022Paper3></Upsc2022Paper3>,
  },
  {
    path: "/22Paper4",
    element: <Upsc2022Paper4></Upsc2022Paper4>,
  },
  {
    path: "/22Paper5",
    element: <Upsc2022Paper5></Upsc2022Paper5>,
  },
  {
    path: "/22Paper6",
    element: <Upsc2022Paper6></Upsc2022Paper6>,
  },
  {
    path: "/22Paper7",
    element: <Upsc2022Paper7></Upsc2022Paper7>,
  },
  {
    path: "/22Paper8",
    element: <Upsc2022Paper8></Upsc2022Paper8>,
  },
  {
    path: "/22Paper9",
    element: <Upsc2022Paper9></Upsc2022Paper9>,
  },
  {
    path: "/22Paper10",
    element: <Upsc2022Paper10></Upsc2022Paper10>,
  },
  {
    path: "/21",
    element: <Upsc2021></Upsc2021>,
  },
  {
    path: "/20",
    element: <Upsc2020></Upsc2020>,
  },
  {
    path: "/19",
    element: <Upsc2019></Upsc2019>,
  },
  {
    path: "/18",
    element: <Upsc2018></Upsc2018>,
  },
  {
    path: "/17",
    element: <Upsc2017></Upsc2017>,
  },
  {
    path: "/16",
    element: <Upsc2016></Upsc2016>,
  },
  {
    path: "/15",
    element: <Upsc2015></Upsc2015>,
  },
  {
    path: "/14",
    element: <Upsc2014></Upsc2014>,
  },
  { 
    path: "/13",
    element: <Upsc2013></Upsc2013>,
  },
  { 
    path: "/12",
    element: <Upsc2012></Upsc2012>,
  },
  { 
    path: "/11",
    element: <Upsc2011></Upsc2011>,
  },
  { 
    path: "/10",
    element: <Upsc2010></Upsc2010>,
  },
  { 
    path: "/09",
    element: <Upsc2009></Upsc2009>,
  },
  { 
    path: "/08",
    element: <Upsc2008 />,
  },
  { 
    path: "/07",
    element: <Upsc2007 />,
  },
  { 
    path: "/06",
    element: <Upsc2006 />,
  },
  { 
    path: "/05",
    element: <Upsc2005 />,
  },
  { 
    path: "/04",
    element: <Upsc2004 />,
  },
  { 
    path: "/03",
    element: <Upsc2003 />,
  },
  { 
    path: "/02",
    element: <Upsc2002 />,
  },
  { 
    path: "/01",
    element: <Upsc2001 />,
  },
  { 
    path: "/00",
    element: <Upsc2000 />,
  },
  { 
    path: "/99",
    element: <Upsc1999 />,
  },
  { 
    path: "/98",
    element: <Upsc1998 />,
  },
  { 
    path: "/97",
    element: <Upsc1997 />,
  },
  { 
    path: "/96",
    element: <Upsc1996 />,
  },
  { 
    path: "/95",
    element: <Upsc1995 />,
  },
  { 
    path: "/94",
    element: <Upsc1994 />,
  },
  { 
    path: "/93",
    element: <Upsc1993 />,
  },
  { 
    path: "/92",
    element: <Upsc1992 />,
  },
  { 
    path: "/91",
    element: <Upsc1991 />,
  },
  { 
    path: "/90",
    element: <Upsc1990 />,
  },
  { 
    path: "/023",
    element: <Upsc23 />,
  },
  { 
    path: "/22_1",
    element: <Upsc22_1 />,
  },
  { 
    path: "/22_2",
    element: <Upsc22_2 />,
  },
  { 
    path: "/22_3",
    element: <Upsc22_3 />,
  },
  { 
    path: "/22_4",
    element: <Upsc22_4 />,
  },
  { 
    path: "/22_5",
    element: <Upsc22_5 />,
  },
  { 
    path: "/22_6",
    element: <Upsc22_6 />,
  },
  { 
    path: "/22_7",
    element: <Upsc22_7 />,
  },
  { 
    path: "/22_8",
    element: <Upsc22_8 />,
  },
  { 
    path: "/22_9",
    element: <Upsc22_9 />,
  },
  { 
    path: "/22_10",
    element: <Upsc22_10 />,
  },
  { 
    path: "/021",
    element: <Upsc21 />,
  },
  { 
    path: "/020",
    element: <Upsc20 />,
  },
  { 
    path: "/019",
    element: <Upsc19 />,
  },
  { 
    path: "/018",
    element: <Upsc18 />,
  },
  { 
    path: "/017",
    element: <Upsc17 />,
  },
  { 
    path: "/016",
    element: <Upsc16 />,
  },
  { 
    path: "/015",
    element: <Upsc15 />,
  },
  { 
    path: "/014",
    element: <Upsc14 />,
  },
  { 
    path: "/013",
    element: <Upsc13 />,
  },
  { 
    path: "/012",
    element: <Upsc12 />,
  },
  { 
    path: "/011",
    element: <Upsc11 />,
  },
  { 
    path: "/010",
    element: <Upsc10 />,
  },
  { 
    path: "/009",
    element: <Upsc09 />,
  },
  { 
    path: "/008",
    element: <Upsc08 />,
  },
  { 
    path: "/007",
    element: <Upsc07 />,
  },
  { 
    path: "/006",
    element: <Upsc06 />,
  },
  { 
    path: "/005",
    element: <Upsc05 />,
  },
  { 
    path: "/004",
    element: <Upsc04 />,
  },
  { 
    path: "/003",
    element: <Upsc03 />,
  },
  { 
    path: "/002",
    element: <Upsc02 />,
  },
  { 
    path: "/001",
    element: <Upsc01 />,
  },
  { 
    path: "/000",
    element: <Upsc00 />,
  },
  { 
    path: "/099",
    element: <Upsc99 />,
  },
  { 
    path: "/098",
    element: <Upsc98 />,
  },
  { 
    path: "/097",
    element: <Upsc97 />,
  },
  { 
    path: "/096",
    element: <Upsc96 />,
  },
  { 
    path: "/095",
    element: <Upsc95 />,
  },
  { 
    path: "/094",
    element: <Upsc94 />,
  },
  { 
    path: "/093",
    element: <Upsc93 />,
  },
  { 
    path: "/092",
    element: <Upsc92 />,
  },
  { 
    path: "/091",
    element: <Upsc91 />,
  },
  { 
    path: "/syllabus",
    element: <Syllabus />,
  },
  { 
    path: "/syllabuspdf",
    element: <SyllabusPdf />,
  },
  { 
    path: "/090",
    element: <Upsc90 />,
  },
  
  
  
  
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
