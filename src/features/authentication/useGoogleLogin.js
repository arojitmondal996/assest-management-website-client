import { useMutation } from "@tanstack/react-query";
import {
  browserLocalPersistence,
  deleteUser,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "sonner";
import axiosSecure from "../../utils/axiosSecure";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";

const googleLogin = async () => {
  toast.loading("Logging in with Google...");
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    await setPersistence(auth, browserLocalPersistence);

    if (!result.user) {
      return Promise.reject(new Error("Error creating user"));
    }

    await axiosSecure.post("/users/employee", {
      uid: result.user.uid,
      displayName: result.user.displayName,
      email: result.user.email,
    });

    toast.success("Google login successful.");
    return result.user;
  } catch (error) {
    console.error(error);
    if (error?.response && error?.response?.data?.message) {
      await deleteUser(auth.currentUser);
      toast.error(error.response.data.message);
      return Promise.reject(new Error(error.response.data.message));
    }
    toast.error(error.message);
    throw error;
  } finally {
    toast.dismiss();
  }
};

export const useGoogleLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "googleLogin",
    mutationFn: googleLogin,
    onSuccess(){
      navigate("/dashboard")
    }
  });
};
