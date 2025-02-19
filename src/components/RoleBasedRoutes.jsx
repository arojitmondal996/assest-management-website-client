import { Navigate, Route, Routes } from "react-router";
import useAuth from "../features/authentication/useAuth";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import MyAssets from "../pages/employee/MyAssets";
import MyTeam from "../pages/employee/MyTeam";
import RequestForAnAsset from "../pages/employee/RequestForAnAsset";
import AddAsset from "../pages/hr/AddAsset";
import AddEmployee from "../pages/hr/AddEmployee";
import AllRequests from "../pages/hr/AllRequests";
import AssetList from "../pages/hr/AssetList";
import HrDashboard from "../pages/hr/HrDashboard";
import MyEmployeeList from "../pages/hr/MyEmployeeList";
import Profile from "../pages/Profile";
import Unauthorized from "../pages/Unauthorized";
import Loading from "../ui/Loading";

const RoleBasedRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      {user.role === "hr-manager" && (
        <Route>
          <Route path="/hr-manager" element={<HrDashboard />} />
          <Route path="/hr-manager/assets-list" element={<AssetList />} />
          <Route path="/hr-manager/add-an-asset" element={<AddAsset />} />
          <Route path="/hr-manager/all-requests" element={<AllRequests />} />
          <Route
            path="/hr-manager/my-employee-list"
            element={<MyEmployeeList />}
          />
          <Route path="/hr-manager/add-an-employee" element={<AddEmployee />} />
          <Route path="/hr-manager/profile" element={<Profile />} />
        </Route>
      )}
      {user.role === "employee" && (
        <Route>
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/employee/my-assets" element={<MyAssets />} />
          <Route path="/employee/my-team" element={<MyTeam />} />
          <Route
            path="/employee/request-for-an-asset"
            element={<RequestForAnAsset />}
          />
          <Route path="/employee/profile" element={<Profile />} />
        </Route>
      )}

      <Route path="*" element={<Unauthorized />} />
    </Routes>
  );
};

export default RoleBasedRoutes;
