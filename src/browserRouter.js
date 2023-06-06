import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import {
  Login,
  Dashboard,
  ComplaintsByCCID,
  ManageComplaint,
  GovernmentCenters,
  Representatives,
} from "./pages";
import { AdminLayout } from "./components/Layout";
import ComplaintsByConstituency from "./pages/ComplaintsByConstituency";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<ComplaintsByConstituency />} />
        <Route path="/complaints/cc/:id" element={<ComplaintsByCCID />} />
        <Route path="/complaint/:id" element={<ManageComplaint />} />
        <Route path="/government-centers/" element={<GovernmentCenters />} />
        <Route path="/representatives/" element={<Representatives />} />
      </Route>

      <Route>
        <Route index path="/" element={<Navigate to="/login-signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </>
  )
);

export default router;
