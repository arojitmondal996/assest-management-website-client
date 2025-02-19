import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiUser";

export default function useUpdateUser() {
  const { mutate: updateUser, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: (value) => updateUserApi(value),
  });

  return { updateUser, isPending };
}
