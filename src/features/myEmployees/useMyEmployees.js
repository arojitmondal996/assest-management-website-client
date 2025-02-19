import { useQuery } from "@tanstack/react-query";
import { getMyEmployees } from "../../services/apiHr";

export default function useMyEmployees() {
  const {
    data: employees,
    isLoading,
    error,
  } = useQuery({
    queryKey: "employees",
    queryFn: getMyEmployees,
  });

  return { employees, isLoading, error };
}
