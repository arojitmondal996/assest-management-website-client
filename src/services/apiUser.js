import { toast } from "sonner";
import axiosSecure from "../utils/axiosSecure";

export const updateUser = async (value) => {
  toast.loading("Updating user...");
  try {
    const response = await axiosSecure.patch(`/users/${value.id}`, {
      displayName: value.displayName,
    });
    toast.success("User updated successfully");
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    throw new Error(error.response.data.message);
  } finally {
    toast.dismiss();
  }
};
