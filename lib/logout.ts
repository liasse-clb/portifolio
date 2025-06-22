// lib/logout.ts
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { myAppHook } from '@/lib/context/AppUtils';

import { supabase } from './supabase';

export const useLogout = () => {
  const router = useRouter();
  const { setIsLoggedIn, setAuthToken, setUserProfile } = myAppHook();

  const logout = async () => {
    await supabase.auth.signOut();

    localStorage.removeItem('access_token');
    localStorage.removeItem('user_profile');

    setIsLoggedIn(false);
    setAuthToken(null);
    setUserProfile(null);

    toast.success('Você saiu da conta.');
    router.push('/auth/login');
  };

  return logout;
};
