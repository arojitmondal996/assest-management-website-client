import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import ErrorComponent from "./components/ErrorComponent";
import RoleBasedRoutes from "./components/RoleBasedRoutes";
import EmployeeForm from "./pages/EmployeeForm";
import Home from "./pages/Home";
import HRManagerForm from "./pages/HRManagerForm";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
            <Route path="dashboard/*" element={<RoleBasedRoutes />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="join-as-hr-manager" element={<HRManagerForm />} />
          <Route path="join-as-employee" element={<EmployeeForm />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>

      <Toaster richColors />
    </QueryClientProvider>
  );
}
