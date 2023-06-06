import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";
import {
    LoginComponent,
    ManageComplaints
} from "./pages";
import {
    Admin,
    SocietyHead,
    SocietyStaff,
    SuperAdmin,
} from "./components/ProtectedLayout";
import Tutorial from "./pages/Tutorial/Tutorial";
import SocietyProfile from "./components/Profiles/societyProfile";
import { PhaseManagement } from "./pages/Phases/PhaseManagement";
import BankManagement from "./pages/Banks/BankManagement";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* -------  super admin ----- */}
            <Route element={<SuperAdmin />}>
                <Route
                    path="/super-admin/societies/search-list"
                    element={<SearchList />}
                />
                <Route index path="/super-admin/workplace" element={<WorkPlace />} />
                <Route path="/super-admin/projects" element={<Projects />} />
                <Route path="/super-admin/users" element={<Users />} />
                <Route path="/super-admin/customers" element={<CustomerManagment />} />
                <Route path="/super-admin/banks" element={<BankManagement />} />
                <Route
                    path="/super-admin/society/create"
                    element={<SocietyManagement />}
                />
                <Route
                    path="/super-admin/societies/profile/:id"
                    element={<SocietyProfile />}
                />
                <Route
                    path="/super-admin/societies/phases/:id"
                    element={<PhaseManagement />}
                />
                <Route
                    path="/super-admin/society/edit/:id"
                    element={<SocietyManagement />}
                />
                <Route path="/super-admin/tutorial" element={<Tutorial />} />
            </Route>
            {/* -------   admin ----- */}
            <Route element={<Admin />}>
                <Route path="/admin/workplace" element={<WorkPlace />} />
                <Route path="/admin/projects" element={<Projects />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/search-list" element={<SearchList />} />
                <Route path="/admin/tutorial" element={<Tutorial />} />
            </Route>
            {/* -------   Society head ----- */}
            <Route element={<SocietyHead />}>
                <Route path="/society-head/workplace" element={<WorkPlace />} />
                <Route path="/society-head/projects" element={<Projects />} />
                <Route path="/society-head/users" element={<Users />} />
                <Route path="/society-head/search-list" element={<SearchList />} />
                <Route path="/society-head/tutorial" element={<Tutorial />} />
            </Route>
            {/* -------  Society staff  ----- */}
            <Route element={<SocietyStaff />}>
                <Route path="/society-staff/workplace" element={<WorkPlace />} />
                <Route path="/society-staff/projects" element={<Projects />} />
                <Route path="/society-staff/users" element={<Users />} />
                <Route path="/society-staff/search-list" element={<SearchList />} />
                <Route path="/society-staff/tutorial" element={<Tutorial />} />
            </Route>

            {/* -------  non protected routes ----- */}
            <Route>
                <Route index path="/" element={<Navigate to="/login-signup" />} />
                <Route path="/login-signup" element={<LoginSignup />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </>
    )
);

export default router
