import { useQuery } from "@tanstack/react-query";
import { getAllAvailableEmployees } from "../../services/apiHr";

export default function useGetAvailableEmployees() {
  const {
    data: availableEmployees,
    isLoading,
    error,
  } = useQuery({
    queryKey: "availableEmployees",
    queryFn: getAllAvailableEmployees,
  });
  return { availableEmployees, isLoading, error };
}
