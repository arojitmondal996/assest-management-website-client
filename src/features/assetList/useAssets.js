import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getAssets } from "../../services/apiHr";

export default function useAssets() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("assetsQ");
  const status = searchParams.get("status");
  const type = searchParams.get("type");
  const quantity = searchParams.get("quantity");

  const {
    data: assets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["assets", { search, status, type, quantity }],
    queryFn: () => getAssets({ search, status, type, quantity }),
  });
  return { assets, isLoading, error };
}
