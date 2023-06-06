import {
  AiOutlineApartment,
  AiOutlineDashboard,
  AiOutlineMail,
  AiOutlineReconciliation,
  AiOutlineUser,
} from "react-icons/ai";

const routes = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <AiOutlineDashboard />,
  },
  {
    key: "governmentCenters",
    label: "Government Centers",
    path: "/government-centers",
    icon: <AiOutlineApartment />,
  },
  {
    key: "representatives",
    label: "Representatives",
    path: "/representatives",
    icon: <AiOutlineUser />,
  },
];

export default routes;
