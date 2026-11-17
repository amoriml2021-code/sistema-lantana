
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");
    setCarregando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    setCarregando(false);

    if (error) {
      setErro("E-mail ou senha inválidos. Verifique seus dados.");
      return;
    }

    window.location.href = "/";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7f4] p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#174b35]">LANTANA</h1>
          <p className="mt-2 text-sm text-gray-500">
            Gestão da Qualidade
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-800">
          Acesse sua conta
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Entre com seu e-mail e senha.
        </p>

        <form onSubmit={entrar} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-700"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Senha
            </label>
            <input
              type="password"
              required
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-700"
              placeholder="Digite sua senha"
            />
          </div>

          {erro && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full rounded-lg bg-[#174b35] p-3 font-semibold text-white hover:bg-[#236344] disabled:opacity-60"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Acesso restrito aos usuários cadastrados pelo administrador.
        </p>
      </section>
    </main>
  );
}
