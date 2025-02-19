import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeEmployee as removeEmployeeApi } from "../../services/apiHr";

export default function useRemoveEmployee() {
  const queryClient = useQueryClient();
  const { mutate: removeEmployee, isPending } = useMutation({
    mutationKey: "employees",
    mutationFn: (value) => removeEmployeeApi(value),
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
    },
  });

  return { removeEmployee, isPending };
}
