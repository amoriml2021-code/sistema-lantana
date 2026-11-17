
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function salvar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMensagem("");

    if (senha.length < 8) {
      setMensagem("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }

    if (senha !== confirmacao) {
      setMensagem("As senhas não são iguais.");
      return;
    }

    setCarregando(true);

    const { error } = await supabase.auth.updateUser({
      password: senha,
    });

    setCarregando(false);

    if (error) {
      setMensagem("Não foi possível atualizar a senha. Solicite um novo link.");
      return;
    }

    setMensagem("Senha atualizada com sucesso! Você já pode entrar.");
    setSenha("");
    setConfirmacao("");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f7f4] p-6">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#174b35]">
          LANTANA
        </h1>
        <h2 className="mt-8 text-xl font-bold">Criar nova senha</h2>
        <p className="mt-2 text-sm text-gray-500">
          Escolha uma nova senha para sua conta.
        </p>

        <form onSubmit={salvar} className="mt-6 space-y-4">
          <input
            type="password"
            required
            minLength={8}
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Nova senha"
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          <input
            type="password"
            required
            minLength={8}
            value={confirmacao}
            onChange={(event) => setConfirmacao(event.target.value)}
            placeholder="Confirme a nova senha"
            className="w-full rounded-lg border border-gray-300 p-3"
          />

          {mensagem && (
            <p className="rounded-lg bg-gray-100 p-3 text-sm">
              {mensagem}
            </p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full rounded-lg bg-[#174b35] p-3 font-semibold text-white disabled:opacity-60"
          >
            {carregando ? "Salvando..." : "Salvar nova senha"}
          </button>
        </form>

        <a
          href="/login"
          className="mt-6 block text-center text-sm text-[#174b35]"
        >
          Voltar para o login
        </a>
      </section>
    </main>
  );
}
