import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { logout as logoutApi } from "../../services/apiAuth";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", {
        replace: true,
      });
    },
    onError: (err) => {
      console.log("ERROR:", err);
      toast.error("there is an error logging out");
    },
  });
  return { isPending, logout };
}
