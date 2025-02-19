import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";
import axiosSecure from "../utils/axiosSecure";
import { auth } from "../utils/firebase"; // Adjust the import path as necessary

export const getCurrentUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (loggedInUser) => {
        try {
          if (loggedInUser) {
            const response = await axiosSecure.get("/auth/me");
            const serverUser = response.data.user;
            const user = { ...loggedInUser, ...serverUser };

            console.log("user", user);

            resolve(user);
          } else {
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      },
      (error) => {
        reject(error);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  });
};

export const login = async ({ email, password }) => {
  console.log(email, password);
  try {
    // Perform Firebase login
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    // Perform server login
    await axiosSecure.post("/auth/login", {
      email,
    });

    toast.success("Login successful.");
    return user;
  } catch (error) {
    console.error("Login failed:", error);

    // Handle Firebase errors
    if (error.code) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No user found with this email.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password.");
          break;
        case "auth/too-many-requests":
          toast.error("Too many login attempts. Please try again later.");
          break;
        default:
          toast.error("An error occurred during login.");
      }
    }

    // Handle server errors
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    }

    throw error;
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
    localStorage.removeItem("token");
    toast.success("Logout successful.");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
