import { toast } from "sonner";
import axiosSecure from "../utils/axiosSecure";

export const getAssets = async (queries) => {
  const { search, status, type, quantity } = queries;
  try {
    const response = await axiosSecure.get(
      `/hr/products?stockStatus=${status}&assetType=${type}&name=${search}&sort=${quantity}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch assets:", error);
    throw error;
  }
};

export const addAsset = async (asset) => {
  toast.loading("Adding asset...");
  try {
    const response = await axiosSecure.post("/hr/products", {
      ...asset,
      quantity: parseInt(asset.quantity),
    });

    toast.success("Asset added successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to add asset");
    console.error("Failed to add asset:", error);
    throw error;
  } finally {
    toast.dismiss();
  }
};

export const deleteAsset = async (assetId) => {
  toast.loading("Asset deleting...");
  try {
    const response = await axiosSecure.delete(`/hr/products/${assetId}`);
    toast.dismiss();
    toast.success("Asset deleted successfully.");
    return response.data;
  } catch (error) {
    toast.dismiss();
    toast.error("Failed to delete asset.");
    throw error;
  } finally {
    toast.dismiss();
  }
};

export const getAllAvailableEmployees = async () => {
  try {
    const response = await axiosSecure.get("/users");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    throw error;
  }
};

export const addEmployee = async (employee) => {
  console.log("employee", employee);
  toast.loading("Adding employee...");
  try {
    const response = await axiosSecure.patch("/hr/affiliate", {
      employees: employee,
    });

    toast.success("Employee added successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to add employee");
    console.error("Failed to add employee:", error);
    throw error;
  } finally {
    toast.dismiss();
  }
};

export const getMyEmployees = async () => {
  try {
    const response = await axiosSecure.get("/hr/affiliate");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    throw error;
  }
};

export const removeEmployee = async (employeeId) => {
  toast.loading("Removing employee...");
  try {
    const response = await axiosSecure.patch(`/hr/affiliate/${employeeId}`);

    toast.success("Employee removed successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to remove employee");
    console.error("Failed to remove employee:", error);
    throw error;
  } finally {
    toast.dismiss();
  }
};
