import ErrorComponent from "../components/ErrorComponent";
import Loading from "../components/Loading";
import RootLayout from "../components/RootLayout";
import AddAsset from "../pages/AddAsset";
import AddEmployee from "../pages/AddEmployee";
import AllRequests from "../pages/AllRequests";
import AssetList from "../pages/AssetList";
import Dashboard from "../pages/Dashboard";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import EmployeeForm from "../pages/EmployeeForm";
import EmployeeHome from "../pages/EmployeeHome";
import Home from "../pages/Home";
import HrManagerDashboard from "../pages/HrManagerDashboard";
import HRManagerForm from "../pages/HRManagerForm";
import HrManagerHome from "../pages/HrManagerHome";
import IncreaseLimit from "../pages/IncreaseLimit";
import Login from "../pages/Login";
import MyAssets from "../pages/MyAssets";
import MyEmployeeList from "../pages/MyEmployeeList";
import MyTeam from "../pages/MyTeam";
import Profile from "../pages/Profile";
import RequestForAnAsset from "../pages/RequestForAnAsset";

export default [
  {
    path: "/",
    element: <Home />,
    hydrateFallbackElement: <Loading />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "dashboard",
    element: <RootLayout />,
    hydrateFallbackElement: <Loading />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "employee",
        element: <EmployeeDashboard />,
        children: [
          {
            index: true,
            element: <EmployeeHome />,
          },
          {
            path: "request-for-an-asset",
            element: <RequestForAnAsset />,
          },
          {
            path: "my-team",
            element: <MyTeam />,
          },
          {
            path: "my-assets",
            element: <MyAssets />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "hr-manager",
        element: <HrManagerDashboard />,
        children: [
          {
            index: true,
            element: <HrManagerHome />,
          },
          {
            path: "assets-list",
            element: <AssetList />,
          },
          {
            path: "add-an-asset",
            element: <AddAsset />,
          },
          {
            path: "all-requests",
            element: <AllRequests />,
          },
          {
            path: "my-employee-list",
            element: <MyEmployeeList />,
          },
          {
            path: "add-an-employee",
            element: <AddEmployee />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "increase-limit",
            element: <IncreaseLimit />,
          },
        ],
      },
    ],
  },
  {
    path: "join-as-employee",
    element: <EmployeeForm />,
  },
  {
    path: "join-as-hr-manager",
    element: <HRManagerForm />,
  },
  {
    path: "login",
    element: <Login />,
  },
];
