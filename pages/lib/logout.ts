// lib/logout.ts
import { supabase } from "@/pages/lib/supabase";
import { myAppHook } from "../auth/context/AppUtils";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const useLogout = () => {
  const router = useRouter();
  const {
    setIsLoggedIn,
    setAuthToken,
    setUserProfile,
  } = myAppHook();

  const logout = async () => {

    await supabase.auth.signOut();

    localStorage.removeItem("access_token");
    localStorage.removeItem("user_profile");

    setIsLoggedIn(false);
    setAuthToken(null);
    setUserProfile(null);

    toast.success("Você saiu da conta.");
    router.push("/auth/login");
  };

  return logout;
};
