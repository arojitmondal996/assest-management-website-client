import { useMutation } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import axiosSecure from "../../utils/axiosSecure";
import { auth } from "../../utils/firebase";

const employeeRegister = async (value) => {
  toast.loading("Loading...");
  try {
    // Do something with form data
    // console.log(error);
    const { displayName, email, password } = value;

    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Set the user's display name
    await updateProfile(result.user, {
      displayName,
    });

    if (!result.user) {
      return Promise.reject(new Error("Error creating user"));
    }

    await axiosSecure.post("/users/employee", {
      uid: result.user.uid,
      displayName,
      email,
      birthDate: value.birthDate,
    });

    return toast.success("Employee registration successful.");
  } catch (error) {
    console.error(error);
    if (error?.response && error?.response?.data?.message) {
      await deleteUser(auth.currentUser);
      toast.error(error.response.data.message);
      return Promise.reject(new Error(error.response.data.message));
    }
    toast.error(error.message);
    return Promise.reject(error);
  } finally {
    toast.dismiss();
  }
};

export default function useEmployeeRegister() {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "currentUser",
    mutationFn: (value) => employeeRegister(value),
    onSuccess: () => {
      // Do something on success
      navigate("/dashboard/employee");
    },
  });
}
