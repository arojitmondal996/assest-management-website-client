import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployee as addEmployeeApi } from "../../services/apiHr";

export default function useAddEmployee() {
  const queryClient = useQueryClient();
  const { mutate: addEmployee, isPending } = useMutation({
    mutationFn: (value) => addEmployeeApi(value),
    onSuccess: () => {
      queryClient.invalidateQueries("availableEmployees");
    },
  });

  return { addEmployee, isPending };
}
