import { useMutation } from "@tanstack/react-query";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  updateProfile,
} from "firebase/auth";
import { useSearchParams } from "react-router";
import { toast } from "sonner";
import axiosSecure from "../../utils/axiosSecure";
import { auth } from "../../utils/firebase";

const hrRegister = async (value) => {
  toast.loading("Loading...");
  try {
    // Do something with form data
    // console.log(error);
    const { displayName, email, password, companyLogo } = value;

    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Set the user's display name
    await updateProfile(result.user, {
      displayName,
      photoURL: companyLogo,
    });

    if (!result.user) {
      return Promise.reject(new Error("Error creating user"));
    }

    await axiosSecure.post("/users/hr-manager", {
      uid: result.user.uid,
      displayName,
      email,
      companyName: value.companyName,
      companyLogo,
      birthDate: value.birthDate,
    });

    return toast.success("HR registration successful.");
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

export default function useHrRegister() {
  const [searchParams, setSearchParams] = useSearchParams();
  return useMutation({
    mutationKey: "currentUser",
    mutationFn: (value) => hrRegister(value),
    onSuccess: () => {
      // Navigate to the next step
      searchParams.set("activeStep", 2);
      setSearchParams(searchParams);
    },
  });
}
