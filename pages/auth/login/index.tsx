'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { myAppHook } from '../context/AppUtils';

import { supabase } from '@/lib/supabase';
import { Navbar } from '@/components/navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn, setAuthToken } = myAppHook();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      toast.error('Email ou senha incorretos.');
      setLoading(false);

      return;
    }

    if (data.session?.access_token) {
      setIsLoggedIn(true);
      setAuthToken(data.session.access_token);
      localStorage.setItem('access_token', data.session.access_token);
      toast.success('Login realizado com sucesso!');
      router.push('/auth/admin');
    } else {
      toast.error('Erro ao logar.');
    }

    setLoading(false);
  };

  return (
    <section>
      <Navbar />

      <section className="max-w-md mx-auto mt-20 px-4">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            required
            className="p-2 border rounded"
            placeholder="Seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="p-2 border rounded"
            placeholder="Sua senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </section>
    </section>
  );
}
