import { useMutation } from "@tanstack/react-query";
import { addAsset as addAssetsApi } from "../../services/apiHr";

export default function useAddAsset() {
  const { mutate: addAsset, isPending } = useMutation({
    mutationKey: "addAsset",
    mutationFn: (newAsset) => addAssetsApi(newAsset),
  });
  return {
    addAsset,
    isPending,
  };
}
