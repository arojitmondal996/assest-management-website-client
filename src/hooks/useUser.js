import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../utils/axiosSecure";

const fetchUser = async () => {
  try {
    const { data } = await axiosSecure.get("user.json");
    if (data && data.user) {
      return { ...data.user, isAuthenticated: true };
    } else {
      throw new Error("User data is not in the expected format");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export default function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}
