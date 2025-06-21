'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { myAppHook } from '../auth/context/AppUtils';

import { supabase } from '@/pages/lib/supabase';

export default function useProtectedRoute() {
  const router = useRouter();
  const { isLoggedIn, setUserProfile } = myAppHook();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isLoggedIn) {
        router.push('/auth/login');

        return;
      }

      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.push('/auth/login');

        return;
      }

      setUserProfile(data.user);
      localStorage.setItem('user_profile', JSON.stringify(data.user));
    };

    checkAuth();
  }, [isLoggedIn]);
}
