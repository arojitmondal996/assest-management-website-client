import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAsset as deleteAssetApi } from "../../services/apiHr";

export default function useDeleteAsset() {
  const queryClient = useQueryClient();
  const { mutate: deleteAsset, isPending } = useMutation({
    mutationKey: ["assets"],
    mutationFn: (value) => deleteAssetApi(value),
    onSuccess: () => {
      queryClient.invalidateQueries("assets");
    },
  });
  return {
    deleteAsset,
    isPending,
  };
}
