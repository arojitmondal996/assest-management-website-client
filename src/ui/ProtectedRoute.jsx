import { styled } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import useAuth from "../features/authentication/useAuth";
import Loading from "./Loading";

const FullPage = styled("div")(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useAuth();

  // 2) If there is no authenticated user, redirect to the login page
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3) While Loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Loading />
      </FullPage>
    );

  // 4) If there is an authenticated user, render the children
  return children;
}
